/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 * Software Engineering Craftsmanship
 */

import React, { useState } from "react";
import {
  Building2,
  CheckCircle2,
  MapPin,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Award,
  MessageCircle,
  FileText,
  Activity,
  PhoneCall,
  FileSignature,
  X
} from "lucide-react";

// Local imports
import { SERVICES, PROJECTS, TESTIMONIALS, FAQS } from "./data";
import { Project, Service } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import CalculatorSPDA from "./components/CalculatorSPDA";
import SimulatorSavings from "./components/SimulatorSavings";
import ContactForm from "./components/ContactForm";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import Footer from "./components/Footer";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<Service | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Custom filter logic based on selection
  const filteredProjects = selectedCategory === "Todos"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleOpenBudgetModal = () => {
    setBudgetModalOpen(true);
  };

  const handleCloseBudgetModal = () => {
    setBudgetModalOpen(false);
  };

  const handleExploreServicesButton = () => {
    const sevEle = document.getElementById("servicos");
    if (sevEle) {
      sevEle.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#fed721] selection:text-slate-950 flex flex-col justify-between">
      {/* Dynamic Header */}
      <Header onOpenBudgetModal={handleOpenBudgetModal} />

      {/* Main Container */}
      <main className="flex-grow">
        {/* Dynamic Hero banner */}
        <Hero
          onOpenBudgetModal={handleOpenBudgetModal}
          onExploreServices={handleExploreServicesButton}
        />

        {/* Nossos Diferenciais Prontuário Band */}
        <section className="bg-slate-900 border-y border-slate-850 py-10">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 text-left select-none">
              <div className="p-3 bg-slate-800/80 rounded-sm text-[#fed721] shrink-0">
                <Award size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-white font-heading font-extrabold text-sm block">100% Homologado CREA</span>
                <span className="text-xs text-slate-400 block pr-2">Laudos, vistorias e novos projetos acompanham recolhimento oficial de ART.</span>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left select-none">
              <div className="p-3 bg-slate-800/80 rounded-sm text-[#fed721] shrink-0">
                <Zap size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-white font-heading font-extrabold text-sm block">Eficiência e Economia</span>
                <span className="text-xs text-slate-400 block pr-2">Atenuamos cobranças severas de energia reativa excedente na fatura mensal.</span>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left select-none">
              <div className="p-3 bg-slate-800/80 rounded-sm text-[#fed721] shrink-0">
                <Building2 size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-white font-heading font-extrabold text-sm block">Conformidade Bombeiros</span>
                <span className="text-xs text-slate-400 block pr-2">Laudo NBR 5410 de SPDA que agilizam a renovação do seu habite-se e AVCB.</span>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left select-none">
              <div className="p-3 bg-slate-800/80 rounded-sm text-[#fed721] shrink-0">
                <FileText size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-white font-heading font-extrabold text-sm block">Rigor Normativo</span>
                <span className="text-xs text-slate-400 block pr-2">Foco total em segurança do trabalhador conforme a MTE NR-10 obrigatória.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Solutions Section */}
        <section id="servicos" className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 select-none">
              <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-[0.2em] block">
                Nossas Soluções Especializadas
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Engenharia de Alta Performance em Energia Elétrica
              </h2>
              <div className="h-1 w-20 bg-[#fed721] mx-auto rounded-sm"></div>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Desenvolvemos soluções elétricas sólidas para indústrias automatizadas, comércios exigentes e condomínios que demandam segurança técnica total contra curtos e raios.
              </p>
            </div>

            {/* Grid of ServiceCards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((srv) => (
                <ServiceCard
                  key={srv.id}
                  service={srv}
                  onSelect={() => setSelectedServiceDetail(srv)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Twin Calculators & Simulators Live Section */}
        <section id="calculadoras" className="py-20 lg:py-24 bg-slate-100 border-y border-slate-200">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 select-none">
              <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-[0.2em] block">
                Simulações Técnicas Gratuitas
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Avalie Suas Necessidades em Campo
              </h2>
              <div className="h-1 w-20 bg-[#fed721] mx-auto rounded-sm"></div>
              <p className="font-sans text-sm text-slate-500 leading-relaxed">
                Utilize nossos simuladores interativos baseados em equações reais de engenharia elétrica para testar conformidade ou estimar retornos de correções técnicas.
              </p>
            </div>

            {/* Grid display for calculators */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <CalculatorSPDA />
              <SimulatorSavings />
            </div>
          </div>
        </section>

        {/* Showcase Portfolio Section */}
        <section id="projetos" className="py-20 lg:py-28 bg-[#040815] text-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-slate-900 pb-10 select-none">
              <div className="space-y-4 text-left">
                <span className="text-xs font-mono text-[#fed721] font-bold uppercase tracking-[0.2em] block">
                  Projetos Recentes & Casos de Sucesso
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                  Nossa Engenharia na Prática
                </h2>
                <div className="h-1 w-20 bg-[#fed721] rounded-sm"></div>
                <p className="font-sans text-sm text-slate-450 max-w-xl leading-relaxed">
                  Conheça alguns estudos de caso focados em subestações de alta potência, implantação de captação contra raios e retrofit industriais.
                </p>
              </div>

              {/* Filtering Chips Layout */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Todos", "Industrial", "Comercial", "Residencial"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 font-mono text-xs rounded-sm transition-all duration-150 border cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#fed721] border-[#fed721] text-slate-950 font-bold"
                        : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  onOpenDetails={() => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Us section & Regional Coverage */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side details and regional indicators */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-[0.2em] block">
                Cobertura e Atendimento Corporativo
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Atendimento Rápido na Região de Campinas
              </h2>
              <div className="h-1 w-20 bg-[#fed721] rounded-sm"></div>
              
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Toda obra e infraestrutura de alta potência exige proximidade do responsável técnico para inspeção visual periódica fidedigna. Prestamos atendimento com visitas de campo imediatas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 select-none">
                {[
                  "Campinas — Vistorias Centrais",
                  "Sumaré — Linhas Industriais",
                  "Hortolândia — Painéis e CCM",
                  "Valinhos / Vinhedo — SPDA Predial",
                  "Indaiatuba — Termografia Ativa",
                  "Americana / Paulínia — Projetos"
                ].map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-sm">
                    <MapPin size={14} className="text-[#fed721] shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-950 text-white font-heading font-extrabold text-xs py-3.5 px-6 rounded-sm uppercase tracking-wider transition-all duration-150"
                >
                  <PhoneCall size={14} className="text-[#fed721]" />
                  Agendar Visita Regional
                </a>
              </div>
            </div>

            {/* Right side static visual collage or testimonials panel */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-md bg-slate-950 border border-slate-900 rounded-sm p-8 text-white text-left overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fed721]/5 rounded-bl-full select-none"></div>
                
                <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2 leading-none">
                  <FileSignature size={18} className="text-[#fed721]" />
                  Prontuário NR-10 Unificado
                </h3>

                <ul className="space-y-4 text-xs font-sans text-slate-350 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#fed721] shrink-0 mt-0.5" />
                    <span><strong>Estudo de Coordenação e Seletividade:</strong> Ajuste preciso de disjuntores para isolar curto-circuitos setoriais rápidos sem desarmar toda a empresa.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 size={16} className="text-[#fed721] shrink-0 mt-0.5" />
                    <span><strong>Mapeamento de Malha de Aterramento:</strong> Medição oficial por miliohmímetro das tensões de passo e toque em subestações abrigadas.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 size={16} className="text-[#fed721] shrink-0 mt-0.5" />
                    <span><strong>Auditoria de Prontuário Técnico Geral:</strong> Atualização e preenchimento de documentos e check lists exigidos pelo CREA e o MTE.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-850 flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-sm flex items-center justify-center text-[#fed721] font-heading font-black text-sm select-none">
                    100
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block tracking-wider leading-none">Laudo técnico</span>
                    <span className="text-xs text-slate-300 font-bold block mt-1">Nenhum sinistro registrado por sobrecarga técnica em nossos clientes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Client Testimonials */}
        <section className="py-20 bg-slate-100 border-t border-slate-200">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 select-none">
              <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-[0.2em] block">
                Depoimentos Reais de Segurança
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Quem Confia em Nosso Trabalho
              </h2>
              <div className="h-1 w-20 bg-[#fed721] mx-auto rounded-sm"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {TESTIMONIALS.map((testi) => (
                <div
                  key={testi.id}
                  className="bg-white border border-slate-200 rounded-sm p-8 text-left space-y-6 relative flex flex-col justify-between shadow-sm"
                >
                  <p className="font-sans text-sm text-slate-650 italic leading-relaxed">
                    "{testi.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-slate-100/80 pt-4 select-none">
                    <div className="w-10 h-10 bg-slate-900 text-[#fed721] font-heading font-bold rounded-sm flex items-center justify-center text-sm">
                      {testi.avatarInitials}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans font-bold text-slate-900 text-sm leading-none">{testi.author}</span>
                      <span className="font-sans text-xs text-slate-500 mt-1">{testi.role} — <strong>{testi.company}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive FAQ fold section */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-200 select-none">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center space-y-4 mb-14">
              <HelpCircle className="mx-auto text-[#fed721]" size={32} />
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                Perguntas Frequentes — Setor Elétrico
              </h2>
              <div className="h-1 w-20 bg-[#fed721] mx-auto rounded-sm"></div>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-205 rounded-sm overflow-hidden bg-slate-50 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-5 flex justify-between items-center hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <span className="font-heading font-black text-sm text-slate-900 pr-4">
                        {faq.question}
                      </span>
                      <span className="text-slate-500 shrink-0">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1.5 text-left text-xs font-sans text-slate-600 border-t border-slate-200/60 leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Direct Contact Form Panel embedded at bottom */}
        <section id="contato" className="py-20 lg:py-24 bg-slate-100 border-t border-slate-200">
          <div className="max-w-[1280px] mx-auto px-6">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Corporate footer details */}
      <Footer />

      {/* Floating Action Button (Official WhatsApp for RMC quick estimates) */}
      <a
        href="https://wa.me/5519991772139?text=Olá Voltguard! Gostaria de um pré-orçamento técnico sobre engenharia elétrica."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] hover:shadow-xl hover:shadow-[#25D366]/20 text-white flex items-center gap-2.5 px-5 py-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 duration-200 select-none active:scale-95"
      >
        <MessageCircle size={18} className="fill-current" />
        <span className="text-xs font-mono font-bold tracking-wider uppercase leading-none hidden sm:inline">
          Falar com um Engenheiro
        </span>
      </a>

      {/* Global popup for budget form */}
      {budgetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-sm border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCloseBudgetModal}
                className="bg-slate-950/60 text-white rounded-full p-2 border border-slate-800 hover:bg-slate-950/90 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="overflow-y-auto">
              <ContactForm />
            </div>

            <div className="p-3 bg-slate-100 border-t border-slate-150 shrink-0 text-right">
              <button
                onClick={handleCloseBudgetModal}
                className="px-4 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-650 text-[10px] font-mono rounded-sm transition-colors cursor-pointer"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Service long-detail visual popup overlay */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-sm border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="relative h-44 bg-slate-950 shrink-0">
              <img
                className="w-full h-full object-cover filter brightness-75"
                alt={selectedServiceDetail.title}
                src={selectedServiceDetail.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-4 right-4 bg-slate-950/60 text-white rounded-full p-1.5 border border-slate-850 hover:bg-slate-950/90 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-left">
                <span className="text-[10px] font-mono text-[#fed721] uppercase tracking-wider block">
                  Soluções Especializadas
                </span>
                <h3 className="font-heading font-extrabold text-lg text-white">
                  {selectedServiceDetail.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-left">
              <p className="font-sans text-xs text-slate-700 leading-relaxed">
                {selectedServiceDetail.longDescription}
              </p>

              <div className="space-y-1.5 pt-2 select-none">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  Normas Técnicas Associadas:
                </span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {selectedServiceDetail.normas.map((norm, id) => (
                    <span
                      key={id}
                      className="px-2 py-1 bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600 rounded-sm"
                    >
                      {norm}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-150 shrink-0 flex gap-2 justify-end">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-sm transition-colors cursor-pointer"
              >
                Fechar Janela
              </button>
              <button
                onClick={() => {
                  setSelectedServiceDetail(null);
                  handleOpenBudgetModal();
                }}
                className="px-4 py-2 bg-[#fed721] hover:bg-[#ffe16d] text-slate-950 font-heading font-extrabold text-xs rounded-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                Agendar Vistoria
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project specs details modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBudget={handleOpenBudgetModal}
      />
    </div>
  );
}
