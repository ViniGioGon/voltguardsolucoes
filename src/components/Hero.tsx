/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowDown, CheckCircle2, Shield, CalendarCheck, MapPin } from "lucide-react";

interface HeroProps {
  onOpenBudgetModal: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenBudgetModal, onExploreServices }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0A1128]">
      {/* Background Image / Texture overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          className="w-full h-full object-cover select-none"
          alt="Technical engineering flat lay showcasing electrical precision equipment"
          src="src/img/empresa.png"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent"></div>
      </div>

      {/* Grid structure overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Typography and presentation */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-700/85 rounded-full text-xs font-mono text-[#fed721] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fed721] animate-pulse"></span>
            Engenharia de Alta Performance
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] !text-left">
            Eletrotécnica — <br />
            <span className="text-[#fed721]">Projetos e Execução</span> de Excelência
          </h1>

          <p className="font-sans text-lg text-slate-300 max-w-xl leading-relaxed text-left">
            Projetos industriais, SPDA predial e laudos de responsabilidade sob regência da NBR 5410/5419, desenvolvidos com rigor físico e total conformidade regulatória.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onOpenBudgetModal}
              className="bg-[#fed721] hover:bg-[#ffe16d] text-slate-950 font-heading font-bold text-sm px-8 py-4 rounded-sm transition-all shadow-lg hover:shadow-[#fed721]/10 active:scale-95 cursor-pointer"
            >
              Consultoria Gratuita
            </button>
            <button
              onClick={onExploreServices}
              className="border border-white/20 hover:bg-white/5 text-white font-heading font-bold text-sm px-8 py-4 rounded-sm transition-all cursor-pointer"
            >
              Soluções Técnicas
            </button>
          </div>

          {/* Quick core metrics / certification indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 w-full border-t border-slate-800/80 mt-2">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#fed721] shrink-0" size={20} />
              <div className="flex flex-col text-left">
                <span className="text-white font-mono font-bold text-sm">ART CREA</span>
                <span className="text-xs text-slate-400">Inclusa em tudo</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="text-[#fed721] shrink-0" size={20} />
              <div className="flex flex-col text-left">
                <span className="text-white font-mono font-bold text-sm">NBR 5410/5419</span>
                <span className="text-xs text-slate-400">Segurança Integral</span>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-2 lg:col-span-1">
              <MapPin className="text-[#fed721] shrink-0" size={20} />
              <div className="flex flex-col text-left">
                <span className="text-white font-mono font-bold text-sm">Campinas & Região</span>
                <span className="text-xs text-slate-400">Atendimento ágil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive / visual card display */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md group overflow-hidden">
            <div className="absolute -inset-1.5 bg-[#fed721]/15 blur-2xl rounded-lg opacity-85 transition-opacity group-hover:opacity-100"></div>
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-sm overflow-hidden shadow-2xl">
              {/* Image element with workman panels */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                <img
                  className="w-full h-full object-cover filter brightness-95 transform transition-transform duration-700 group-hover:scale-105"
                  alt="Engenheiro eletricista qualificado trabalhando na vistoria de painel elétrico de força"
                  src="src/img/vistoria.png"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm border border-slate-705 px-3 py-1 rounded-sm text-[10px] font-mono font-bold text-[#fed721] uppercase tracking-wider">
                  Visita Técnica Prioritária
                </div>
              </div>

              {/* Quick interactive checklist details */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span>SISTEMAS ELÉTRICOS</span>
                  <span className="text-[#fed721]">ONLINE</span>
                </div>
                
                <h3 className="font-heading font-bold text-lg text-white text-left">
                  Conformidade Técnica Legatária
                </h3>
                
                <p className="font-sans text-xs text-slate-350 text-left leading-relaxed">
                  Inspeções periódicas evitam multas de autarquias, perdas de cobertura de seguros comerciais e panes térmicas severas na fiação geral.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenBudgetModal}
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs py-2.5 px-4 rounded-sm transition-colors cursor-pointer"
                  >
                    <CalendarCheck size={14} className="text-[#fed721]" />
                    Agendar Visita de Avaliação
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating prompt for scrolls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-500 animate-bounce hidden md:block">
        <ArrowDown size={24} className="stroke-[1.5]" />
      </div>
    </section>
  );
}
