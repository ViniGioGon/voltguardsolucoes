/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, ArrowRight, Table } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  key?: any;
  project: Project;
  onOpenDetails: () => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div
      onClick={onOpenDetails}
      className="group bg-slate-900 border border-slate-800 rounded-sm overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-lg shadow-slate-950/40"
    >
      <div className="relative">
        {/* Full-bleed thumbnail */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950">
          <img
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            alt={project.title}
            src={project.image}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Location tag badge over top */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-slate-950/90 text-[10px] font-mono font-bold px-2.5 py-1 text-[#fed721] rounded-sm uppercase tracking-wider select-none">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 text-left">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <MapPin size={12} className="text-[#fed721]" />
            <span>{project.location}</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#fed721] transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Sneak peek of top specifications */}
        <div className="grid grid-cols-2 gap-2 p-3 bg-slate-950/50 border border-slate-800 rounded-sm text-[10px] font-mono">
          {project.specs.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-slate-500 uppercase tracking-tight">{spec.label}</span>
              <span className="text-white font-semibold truncate leading-normal">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 select-none">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-[#fed721] group-hover:text-amber-400 transition-colors uppercase tracking-wider border-t border-slate-800/80 pt-4">
          <span className="flex items-center gap-1">
            <Table size={12} />
            Ficha Técnica Integral
          </span>
          <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
