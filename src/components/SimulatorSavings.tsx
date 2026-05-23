/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TrendingDown, ShieldCheck, HelpCircle, Landmark, Sparkles } from "lucide-react";

export default function SimulatorSavings() {
  const [billValue, setBillValue] = useState(8500); // Default R$8.500/month
  const [factorDePotencia, setFactorDePotencia] = useState(0.78); // Default 0.78

  // Compute realistic estimates:
  // Fines are typically a percentage proportional to (0.92 - current_fp) / 0.92 * energy cost
  // Let's model a realistic penalty around 15% to 35% of energy costs when fp is low.
  const penaltyFactor = Math.max(0, (0.92 - factorDePotencia) / 0.92);
  const monthlyExcessCost = Math.round(billValue * 1.15 * penaltyFactor);
  const annualExcessCost = monthlyExcessCost * 12;

  // Approximate cost of automatic capacitor banks based on required kVAr
  // Required kVAr = kW * (tan(acos(current)) - tan(acos(0.92)))
  // Assuming a rough load factor, required kVAr scale roughly with billValue and poor Factor.
  const targetKVar = Math.max(5, Math.round(((0.92 - factorDePotencia) * 1.5) * (billValue * 0.012)));
  const estimatedCapacitorCost = Math.round(targetKVar * 95 + 1600); // hardware + installation engineering

  const payBackMonths = Math.max(2, parseFloat((estimatedCapacitorCost / (monthlyExcessCost || 1)).toFixed(1)));

  return (
    <div className="bg-white border border-slate-200 rounded-sm shadow-xl p-6 lg:p-8 flex flex-col justify-between h-full">
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2 bg-slate-900 text-[#fed721] rounded-sm">
            <TrendingDown size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-heading font-extrabold text-lg text-slate-900 uppercase tracking-tight">
              Simulador de Economia de Energia
            </h3>
            <p className="font-sans text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Correção de Fator de Potência (Excesso Reativo)
            </p>
          </div>
        </div>

        <div className="space-y-5 text-left">
          <p className="font-sans text-xs text-slate-500 leading-relaxed">
            Se sua empresa possui motores trifásicos, compressores ou maquinários, um fator de potência abaixo de <strong>0,92</strong> gera multas diretas na sua fatura da concessionária. Ajuste as estimativas abaixo para simular redundâncias e ROI:
          </p>

          {/* Slider 1: Average Monthly Bill */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-900">
              <span className="uppercase">1. Fatura de Energia Média</span>
              <span className="text-slate-950 text-sm">
                R$ {billValue.toLocaleString("pt-BR")} /mês
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="500"
              value={billValue}
              onChange={(e) => setBillValue(Number(e.target.value))}
              className="w-full accent-slate-900 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>R$ 2.000</span>
              <span>R$ 25.000</span>
              <span>R$ 50.000+</span>
            </div>
          </div>

          {/* Slider 2: Current Factor de Potencia */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-900">
              <span className="uppercase">2. Fator de Potência Atual</span>
              <span className={`text-sm px-2 py-0.5 rounded-sm ${factorDePotencia < 0.85 ? "bg-red-50 text-red-700 font-bold" : "bg-amber-50 text-amber-700 font-bold"}`}>
                {factorDePotencia.toFixed(2)}
              </span>
            </div>
            <input
              type="range"
              min="0.70"
              max="0.91"
              step="0.01"
              value={factorDePotencia}
              onChange={(e) => setFactorDePotencia(Number(e.target.value))}
              className="w-full accent-slate-900 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span className="text-red-500">0.70 (Crítico)</span>
              <span>0.80 (Regular)</span>
              <span className="text-slate-500">0.91 (Limite Concessionária)</span>
            </div>
          </div>

          {/* Computed results container */}
          <div className="grid grid-cols-2 gap-4 p-4 border border-slate-200 bg-slate-50 rounded-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">
                Multa Estimada Inclusa
              </span>
              <span className="text-xl font-heading font-black text-red-650 block">
                R$ {monthlyExcessCost.toLocaleString("pt-BR")}
              </span>
              <span className="text-[10px] text-slate-400 block leading-tight">
                taxa desperdiçada/mês
              </span>
            </div>

            <div className="space-y-1 border-l border-slate-200 pl-4">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">
                Economia Anual Direta
              </span>
              <span className="text-xl font-heading font-black text-green-650 block">
                R$ {annualExcessCost.toLocaleString("pt-BR")}
              </span>
              <span className="text-[10px] text-slate-400 block leading-tight">
                com bancos de capacitores
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-3.5 bg-slate-900 rounded-sm text-white">
            <div className="space-y-0.5 text-left">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">
                Banco Calculado (Alvo)
              </span>
              <span className="text-sm font-mono font-bold text-[#fed721] block">
                ~ {targetKVar} kVAr
              </span>
            </div>

            <div className="space-y-0.5 text-left border-l border-slate-800 pl-4">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">
                Retorno do Investimento (ROI)
              </span>
              <span className="text-sm font-mono font-bold text-[#fed721] block flex items-center gap-1">
                <Sparkles size={11} className="text-[#fed721]" />
                {payBackMonths} meses
              </span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contato"
              className="w-full bg-[#fed721] hover:bg-[#ffe16d] text-slate-950 font-heading font-bold text-xs py-3 rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-colors uppercase tracking-wider"
            >
              <ShieldCheck size={14} className="text-slate-950" />
              Solicitar Projeto de Correção Reativa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
