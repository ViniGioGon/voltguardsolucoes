/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, FileCheck, Check, MessageSquare, ShieldCheck, Mail, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("proj_inst");
  const [message, setMessage] = useState("");
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Por favor, preencha pelo menos seu nome e WhatsApp de contato para que possamos retornar.");
      return;
    }

    setSubmitting(true);
    // Simulate real database integration response
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleWhatsAppRedirect = () => {
    const serviceLabels: { [key: string]: string } = {
      proj_inst: "Projetos de Instalações",
      laudo_5410: "Laudos NBR 5410",
      spda: "Sistemas de SPDA",
      manut: "Manutenção de Painéis",
      outro: "Outros serviços de engenharia"
    };

    const text = `Olá Voltguard! Meu nome é *${name || "Visitante"}*.\n` +
      `Gostaria de um orçamento sobre: *${serviceLabels[service] || "Engenharia Elétrica"}*.\n` +
      `Contato adicional: ${email || "Não informado"}\n` +
      `Mensagem: ${message || "Tenho interesse no serviço técnico de vocês."}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5519991772139?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-sm border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-12 max-w-5xl mx-auto">
      {/* Left side details: corporate info */}
      <div className="lg:col-span-5 bg-slate-950 text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fed721]/5 rounded-bl-full z-0"></div>

        <div className="space-y-8 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#fed721] uppercase tracking-widest block">
              Fale Conosco
            </span>
            <h3 className="font-heading font-extrabold text-2xl lg:text-3xl text-white tracking-tight leading-tight">
              Pronto para iniciar seu projeto elétrico?
            </h3>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              Solicite um orçamento sob medida ou agende uma visita presencial em sua empresa com um engenheiro eletricista corporativo.
            </p>
          </div>

          <div className="space-y-5 border-t border-slate-900 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-sm text-[#fed721]">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Email Corporativo</span>
                <span className="text-sm font-semibold text-white">voltguardsolucoes@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-sm text-[#fed721]">
                <MessageCircle size={16} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Whatsapp Primário</span>
                <span className="text-sm font-semibold text-white">(19) 99177-2139</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-sm text-[#fed721]">
                <MessageCircle size={16} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Whatsapp Secundário</span>
                <span className="text-sm font-semibold text-white">(19) 99483-7513</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-sm text-[#fed721]">
                <Clock size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Horário de Vistoria</span>
                <span className="text-sm font-semibold text-gray-300">Seg — Sex: 08h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Guarantee sign */}
        <div className="mt-12 p-4 bg-slate-900 border border-slate-800 rounded-sm text-left flex items-start gap-3 relative z-10 select-none">
          <ShieldCheck className="text-[#fed721] shrink-0 mt-0.5" size={20} />
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold text-white block">Acompanha ART CREA</span>
            <span className="text-[10px] text-gray-400 block leading-tight">Garantimos conformidade total frente as seguradoras e bombeiros regionais.</span>
          </div>
        </div>
      </div>

      {/* Right side details: form action */}
      <div className="lg:col-span-7 p-8 lg:p-12 bg-white flex flex-col justify-center relative">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-slate-800 uppercase">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-slate-800 uppercase">
                  Endereço de E-mail
                </label>
                <input
                  type="email"
                  placeholder="email@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-slate-800 uppercase">
                  WhatsApp para Contato *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(19) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-slate-800 uppercase">
                  Qual o serviço de interesse?
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                >
                  <option value="proj_inst">Projetos de Instalações</option>
                  <option value="laudo_5410">Laudos Técnicos / NR-10</option>
                  <option value="spda">Sistemas SPDA e Aterramento</option>
                  <option value="manut">Manutenção de Quadros & Painéis</option>
                  <option value="outro">Consultorias Diversas</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-bold text-slate-800 uppercase">
                Mensagem ou Detalhes Técnicos
              </label>
              <textarea
                placeholder="Por favor, descreva as dimensões da obra, kVA desejado ou o tipo de laudo que necessita."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
              />
            </div>

            {/* Direct primary actions grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white font-heading font-bold text-xs py-3.5 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 duration-150 active:scale-95 disabled:opacity-70 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Aguarde...
                  </>
                ) : (
                  <>
                    Enviar Formulário
                    <Send size={13} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs py-3.5 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 duration-150 active:scale-95 cursor-pointer"
              >
                <MessageCircle size={14} />
                Chamar no WhatsApp
              </button>
            </div>
            
            <p className="text-[10px] text-slate-400 text-center">
              * Prometemos total segurança com seus dados segundo as diretrizes corporativas vigentes.
            </p>
          </form>
        ) : (
          <div className="space-y-5 text-center py-8 animate-fadeIn">
            <div className="w-16 h-16 bg-green-50 border border-green-200 text-green-650 flex items-center justify-center rounded-full mx-auto shadow-sm">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-extrabold text-2xl text-slate-950 leading-tight">
                Orçamento Enviado com Sucesso!
              </h4>
              <p className="font-sans text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                Agradecemos o contato, <strong>{name}</strong>. Nossa equipe técnica de engenharia analisará as especificações e retornará o chamado comercial em até 2 horas.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }}
              className="mt-6 inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono py-2 px-4 rounded-sm transition-colors cursor-pointer"
            >
              <FileCheck size={14} />
              Enviar outra solicitação
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
