/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BRAND_NAME } from "../data";
import Logo from "./Logo";
import { MapPin, Phone, Mail, Award, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-gray-400">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 text-left">
        {/* Column 1: Brand & brief overview */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-3">
            <div className="bg-[#fed721] p-1 rounded-sm flex items-center justify-center">
              <Logo className="h-6 w-6" />
            </div>
            <span className="font-heading text-lg font-extrabold text-white tracking-widest uppercase leading-none">
              {BRAND_NAME.toUpperCase()} SOLUÇÕES
            </span>
          </div>
          <p className="font-sans text-sm text-slate-400 leading-relaxed pr-6">
            Soluções corporativas de engenharia e modelagem eletrotécnica de alta precisão. Foco irrepreensível em segurança jurídica, eficiência termográfica e conformidade de seguros.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-[#fed721] bg-slate-900 border border-slate-800 p-2.5 rounded-sm inline-block select-none">
            <Award size={14} className="shrink-0" />
            <span>Engenheiros Registrados no CREA-SP</span>
          </div>
        </div>

        {/* Column 2: Navigation links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
            Acesso Rápido
          </h4>
          <ul className="space-y-2.5 text-sm font-sans">
            <li>
              <a href="#home" className="hover:text-white transition-colors cursor-pointer">
                Início
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors cursor-pointer">
                Nossos Serviços
              </a>
            </li>
            <li>
              <a href="#calculadoras" className="hover:text-white transition-colors cursor-pointer">
                Simulador Energético
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-white transition-colors cursor-pointer">
                Casos Executados
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white transition-colors cursor-pointer">
                Orçamentos
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Custom Technical Solutions */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
            Serviços Industriais
          </h4>
          <ul className="space-y-2.5 text-sm font-sans">
            <li>
              <a href="#servicos" className="hover:text-[#fed721] transition-colors leading-relaxed">
                Projetos Executivos Subestações
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-[#fed721] transition-colors leading-relaxed">
                Adequação Integral de SPDA
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-[#fed721] transition-colors leading-relaxed">
                Laudos para Renovação AVCB
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-[#fed721] transition-colors leading-relaxed">
                Montagem de Quadros CCM
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-[#fed721] transition-colors leading-relaxed">
                Auditoria de Qualidade Termo
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Location details */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
            Atendimento RMC
          </h4>
          <ul className="space-y-3.5 text-sm font-sans text-left">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#fed721] shrink-0 mt-0.5" />
              <span className="leading-tight text-gray-300">
                Campinas, Sumaré, Hortolândia, Valinhos, Vinhedo & região.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-[#fed721] shrink-0" />
              <span className="text-gray-300 font-mono">(19) 99177-2139</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-[#fed721] shrink-0" />
              <span className="text-gray-300 font-mono">(19) 99483-7513</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-[#fed721] shrink-0" />
              <span className="text-gray-300 font-mono">(19) 99715-9418</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#fed721] shrink-0" />
              <span className="text-gray-300 font-mono break-all leading-none">voltguardsolucoes@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar copyrights */}
      <div className="max-w-[1280px] mx-auto px-6 pt-8 border-t border-slate-900/80 flex flex-col sm:row justify-between items-center gap-4 text-xs font-mono text-gray-500 text-left">
        <div className="space-y-1 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {BRAND_NAME} Soluções. Todos os direitos reservados.</p>
          <p className="text-[10px] text-gray-600">Projetos conformes com as metodologias de análise de risco NBR 5410/5419. ART inclusa.</p>
        </div>

        <button
          onClick={handleScrollTop}
          className="flex items-center gap-1 bg-slate-900 hover:bg-[#fed721] group hover:text-slate-950 transition-all px-3 py-1.5 rounded-sm text-gray-400 font-bold border border-slate-850 cursor-pointer"
        >
          <ArrowUp size={12} className="transform transition-transform group-hover:-translate-y-0.5" />
          <span>Voltar ao topo</span>
        </button>
      </div>
    </footer>
  );
}
