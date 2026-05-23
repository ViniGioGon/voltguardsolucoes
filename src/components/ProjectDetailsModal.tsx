/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, CheckCircle, MapPin, Layers, Award } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBudget: () => void;
}

export default function ProjectDetailsModal({ project, onClose, onOpenBudget }: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      {/* Container widget */}
      <div className="relative w-full max-w-2xl bg-white rounded-sm border border-slate-205 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header background image or graphic */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-950 shrink-0">
          <img
            className="w-full h-full object-cover filter brightness-90"
            alt={project.title}
            src={project.image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-950/60 backdrop-blur-sm hover:bg-slate-950/90 text-white rounded-full p-2 border border-slate-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Title indicators */}
          <div className="absolute bottom-4 left-6 right-6 text-left space-y-1 select-none">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-350">
              <MapPin size={12} className="text-[#fed721]" />
              <span>{project.location}</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#fed721]">{project.category}</span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
              Memorial de Execução & Memorial Descritivo:
            </span>
            <p className="font-sans text-sm text-slate-700 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Core Technical Specifications Table */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5 select-none">
              <Layers size={14} className="text-slate-900" />
              <span className="font-heading font-extrabold text-xs text-slate-900 uppercase tracking-wider">
                Ficha de Especificações Técnicas (Technical Specs Table):
              </span>
            </div>

            <div className="border border-slate-200 rounded-sm overflow-hidden bg-slate-50">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="bg-slate-900 text-white font-mono uppercase text-[9px] tracking-wider">
                    <th className="p-3">Parâmetro Analisado</th>
                    <th className="p-3 text-right">Especificação Obtida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {project.specs.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="p-3 text-slate-500 font-bold">{spec.label}</td>
                      <td className="p-3 text-right text-slate-900 font-semibold">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trust assurances block */}
          <div className="p-4 bg-slate-950 text-slate-350 rounded-sm text-xs font-sans leading-relaxed flex items-start gap-4 select-none border-l-4 border-[#fed721]">
            <Award className="text-[#fed721] shrink-0 mt-0.5" size={20} />
            <div className="space-y-0.5">
              <strong>Homologação e Responsabilidade Técnica Técnica:</strong>
              <p className="text-[11px] text-slate-400">
                O caso apresentado foi auditado e aprovado com anotação no CREA correspondente. Segue rigorosamente a NBR 5410 de segurança patrimonial corporativa.
              </p>
            </div>
          </div>
        </div>

        {/* Modal actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-150 shrink-0 flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-sm transition-colors cursor-pointer"
          >
            Fechar Janela
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBudget();
            }}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-950 text-white font-heading font-extrabold text-xs rounded-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            Agendar Estudo Semelhante
          </button>
        </div>
      </div>
    </div>
  );
}
