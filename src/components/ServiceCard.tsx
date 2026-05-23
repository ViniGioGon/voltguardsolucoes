/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { FileSpreadsheet, ClipboardCheck, Zap, Cpu, Activity, Lightbulb, ArrowUpRight } from "lucide-react";
import { Service } from "../types";

// Safe Static Icon Mapper
const getIcon = (name: string, size = 24, className = "") => {
  switch (name) {
    case "FileSpreadsheet":
      return <FileSpreadsheet size={size} className={className} />;
    case "ClipboardCheck":
      return <ClipboardCheck size={size} className={className} />;
    case "Zap":
      return <Zap size={size} className={className} />;
    case "Cpu":
      return <Cpu size={size} className={className} />;
    case "Activity":
      return <Activity size={size} className={className} />;
    case "Lightbulb":
      return <Lightbulb size={size} className={className} />;
    default:
      return <Zap size={size} className={className} />;
  }
};

interface ServiceCardProps {
  key?: any;
  service: Service;
  onSelect: () => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <div
      onClick={onSelect}
      className="group relative bg-[#ffffff] border border-slate-200/90 rounded-sm p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-400/10 hover:border-[#fed721] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      {/* Visual background pattern trigger */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-slate-200 rounded-bl-full z-0 opacity-40 transition-all group-hover:scale-110"></div>

      <div className="relative z-10 space-y-4">
        {/* Dynamic customized icon wrapper */}
        <div className="w-12 h-12 bg-slate-100 border border-slate-250/50 rounded-sm flex items-center justify-center text-slate-900 group-hover:bg-[#fed721] transition-colors duration-300">
          {getIcon(service.iconName, 22)}
        </div>

        <div className="space-y-2">
          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-slate-950 transition-colors text-left">
            {service.title}
          </h3>
          <p className="font-sans text-sm text-slate-500 line-clamp-3 text-left leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-6 flex flex-col gap-4 border-t border-slate-100/80 mt-6">
        {/* Listed standards/regulations chips */}
        <div className="flex flex-wrap gap-1.5">
          {service.normas.slice(0, 2).map((norm, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-500 uppercase rounded-sm"
            >
              {norm}
            </span>
          ))}
        </div>

        <div className="flex items-center text-xs font-heading font-black text-slate-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider gap-1 pt-1 justify-between">
          <span>Ver Detalhes Integrados</span>
          <ArrowUpRight size={14} className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}
