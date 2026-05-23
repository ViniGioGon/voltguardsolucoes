/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Zap, ShieldAlert, Award } from "lucide-react";
import { BRAND_NAME } from "../data";
import Logo from "./Logo";

interface HeaderProps {
  onOpenBudgetModal: () => void;
}

export default function Header({ onOpenBudgetModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800"
            : "bg-slate-950/90 md:bg-transparent"
        }`}
        id="main-header"
      >
        <div className="flex justify-between items-center w-full px-6 max-w-[1280px] mx-auto h-full">
          {/* Logo & Brand text */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="bg-[#fed721] p-1.5 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <Logo className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-white tracking-widest leading-none">
                {BRAND_NAME.toUpperCase()}
              </span>
              <span className="font-sans text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
                SOLUÇÕES
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            <button
              onClick={() => scrollToSection("home")}
              className="font-heading font-semibold text-xs text-gray-300 hover:text-[#fed721] transition-colors uppercase tracking-widest cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="font-heading font-semibold text-xs text-gray-300 hover:text-[#fed721] transition-colors uppercase tracking-widest cursor-pointer"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("calculadoras")}
              className="font-heading font-semibold text-xs text-gray-300 hover:text-[#fed721] transition-colors uppercase tracking-widest cursor-pointer"
            >
              Simuladores
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="font-heading font-semibold text-xs text-gray-300 hover:text-[#fed721] transition-colors uppercase tracking-widest cursor-pointer"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="font-heading font-semibold text-xs text-gray-300 hover:text-[#fed721] transition-colors uppercase tracking-widest cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Action CTA buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBudgetModal}
              className="bg-[#fed721] text-slate-950 hover:bg-[#ffe16d] font-heading font-extrabold text-xs px-5 py-2.5 rounded-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#fed721]/10 active:scale-95 cursor-pointer"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile indicator & burger menu */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={onOpenBudgetModal}
              className="bg-[#fed721] text-slate-950 text-[10px] font-heading font-bold px-3 py-2 rounded-sm uppercase tracking-wider hover:opacity-90"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#fed721] transition-colors p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 flex flex-col pt-24 px-6 gap-6 md:hidden">
          <div className="flex flex-col gap-5 border-b border-slate-800 pb-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left font-heading font-bold text-lg text-white hover:text-[#fed721] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left font-heading font-bold text-lg text-white hover:text-[#fed721] transition-colors"
            >
              Soluções Especializadas
            </button>
            <button
              onClick={() => scrollToSection("calculadoras")}
              className="text-left font-heading font-bold text-lg text-white hover:text-[#fed721] transition-colors"
            >
              Simuladores Técnicos
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-left font-heading font-bold text-lg text-white hover:text-[#fed721] transition-colors"
            >
              Casos Práticos (Portfólio)
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left font-heading font-bold text-lg text-white hover:text-[#fed721] transition-colors"
            >
              Fale com um Engenheiro
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Award className="text-[#fed721] shrink-0" size={16} />
              <span>Prontuário e responsabilidade legal</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ShieldAlert className="text-[#fed721] shrink-0" size={16} />
              <span>Laudos conforme NBR 5410 & 5419</span>
            </div>
            <a
              href="https://wa.me/5519991772139"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-slate-900 border border-slate-700 text-white rounded-md py-3 text-sm font-medium hover:bg-slate-800"
            >
              Falar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
