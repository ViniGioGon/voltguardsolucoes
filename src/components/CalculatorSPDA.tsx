/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Calculator, AlertTriangle, CheckCircle, ArrowRight, RefreshCw, Layers } from "lucide-react";

export default function CalculatorSPDA() {
  const [buildingType, setBuildingType] = useState("industrial");
  const [height, setHeight] = useState("low");
  const [keraunic, setKeraunic] = useState("medium");
  const [sensitiveEquipment, setSensitiveEquipment] = useState("yes");
  const [calculated, setCalculated] = useState(false);

  // Simple algorithm representing NBR 5419 standards:
  const getCalculationResult = () => {
    let score = 0;
    
    // Type weighting
    if (buildingType === "industrial") score += 4;
    else if (buildingType === "hospital") score += 5;
    else if (buildingType === "residential") score += 3;
    else score += 2; // general commercial
    
    // Height weighting
    if (height === "high") score += 4;
    else if (height === "mid") score += 2;
    else score += 1;
    
    // Lightning frequency weighting
    if (keraunic === "high") score += 3;
    else if (keraunic === "medium") score += 2;
    else score += 1;
    
    // Sensitive equipment
    if (sensitiveEquipment === "yes") score += 2;

    let priority = "Baixa";
    let subClass = "Classe IV";
    let bgClass = "bg-green-50 text-green-800 border-green-200";
    let desc = "Risco Aceitável. Recomenda-se verificação periódica preventiva a cada 3 anos.";
    let actionItem = "Instalação padrão de para-raios tipo Franklin e aterramento simples para proteção comum.";

    if (score >= 11) {
      priority = "Crítica";
      subClass = "Classe I (Risco Máximo)";
      bgClass = "bg-red-50 text-red-800 border-red-200";
      desc = "Risco Elevadíssimo. SPDA indispensável com descidas extras e blindagens estruturais rígidas.";
      actionItem = "Gaiola de Faraday com malha 5x5m, descidas a cada 10m e DPS de Classe I/II em todos os quadros secundários.";
    } else if (score >= 8) {
      priority = "Média-Alta";
      subClass = "Classe II / III";
      bgClass = "bg-amber-50 text-amber-800 border-amber-200";
      desc = "Risco Moderado. Recomenda-se SPDA completo com recertificação anual estruturada.";
      actionItem = "Malha de teto Franklin conjugada com escoamento estrutural e DPS Classe II nos painéis elétricos principais.";
    }

    return { score, priority, subClass, bgClass, desc, actionItem };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  const resetCalculator = () => {
    setCalculated(false);
  };

  const result = getCalculationResult();

  return (
    <div className="bg-white border border-slate-200 rounded-sm shadow-xl p-6 lg:p-8 flex flex-col justify-between h-full">
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2 bg-slate-900 text-[#fed721] rounded-sm">
            <Calculator size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-heading font-extrabold text-lg text-slate-900 uppercase tracking-tight">
              Análise Rápida de Risco de SPDA
            </h3>
            <p className="font-sans text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Conformidade NBR 5419:2015
            </p>
          </div>
        </div>

        {!calculated ? (
          <form onSubmit={handleCalculate} className="space-y-4 text-left">
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              Responda os parâmetros básicos de infraestrutura predial para simular a classificação de criticidade de descargas atmosféricas sugerida pela metodologia de gerenciamento de riscos:
            </p>

            {/* 1. Building Type */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase">
                1. Tipo de Ocupação da Planta
              </label>
              <select
                value={buildingType}
                onChange={(e) => setBuildingType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-250 rounded-sm p-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all font-mono"
              >
                <option value="industrial">Industrial Geral / Usinas de Processo</option>
                <option value="hospital">Hospitalar / Clínicas / Ambientes de Saúde</option>
                <option value="residential">Condomínio Residencial Vertical / Apartamentos</option>
                <option value="commercial">Comercial Geral / Depósitos / Escolas</option>
              </select>
            </div>

            {/* 2. Height */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase">
                2. Altura Estimada da Edificação (Z)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "low", label: "Baixa (<10m)" },
                  { id: "mid", label: "Média (10-25m)" },
                  { id: "high", label: "Alta (>25m)" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setHeight(opt.id)}
                    className={`py-2 px-3 text-xs font-mono rounded-sm border text-center transition-all ${
                      height === opt.id
                        ? "bg-slate-900 border-slate-900 text-white font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Local Lightning */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase">
                3. Índice Keraúnico Local (Raios)
              </label>
              <select
                value={keraunic}
                onChange={(e) => setKeraunic(e.target.value)}
                className="w-full bg-slate-50 border border-slate-250 rounded-sm p-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all font-mono"
              >
                <option value="low">Baixo (Regiões de baixíssimo histórico)</option>
                <option value="medium">Médio (Campinas e RMC Geral)</option>
                <option value="high">Alto (Urbano adensado / Alta declividade)</option>
              </select>
            </div>

            {/* 4. Sensitive Equipment */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase">
                4. Possui Equipamentos Sensíveis / CPD?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "yes", label: "Sim (Servidores / CLP)" },
                  { id: "no", label: "Não (Proteção Comum)" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSensitiveEquipment(opt.id)}
                    className={`py-2 px-3 text-xs font-mono rounded-sm border text-center transition-all ${
                      sensitiveEquipment === opt.id
                        ? "bg-slate-900 border-slate-900 text-white font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#fed721] hover:bg-[#ffe16d] text-slate-950 font-heading font-bold text-xs py-3.5 px-4 rounded-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer pt-3 mt-4"
            >
              Calcular Criticidade Recomendada
              <ArrowRight size={14} />
            </button>
          </form>
        ) : (
          <div className="space-y-5 text-left animate-fadeIn">
            {/* Results output */}
            <div className={`p-4 rounded-sm border-l-4 ${result.bgClass}`}>
              <div className="flex items-start gap-3">
                <AlertTriangle className="shrink-0 mt-0.5" size={18} />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider font-bold">
                    Classificação de Risco
                  </p>
                  <p className="font-heading font-black text-lg">
                    Prioridade: {result.priority}
                  </p>
                  <p className="text-xs font-mono font-bold">
                    Sugerido: {result.subClass}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-4 bg-slate-50 border border-slate-150 rounded-sm">
              <h4 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-wider">
                Resumo do Diagnóstico Técnico:
              </h4>
              <p className="font-sans text-xs text-slate-650 leading-relaxed">
                {result.desc}
              </p>
              
              <div className="border-t border-slate-205 pt-2 mt-2">
                <span className="font-heading font-bold text-[10px] text-slate-500 uppercase block tracking-wider">
                  Configuração Recomendada de Malha:
                </span>
                <span className="font-mono text-xs text-slate-800 font-semibold block mt-1 leading-normal">
                  {result.actionItem}
                </span>
              </div>
            </div>

            {/* Quick Warning */}
            <div className="p-3.5 bg-slate-900 text-slate-350 rounded-sm text-[11px] font-sans leading-relaxed">
              ⚠️ <strong>Nota Técnica:</strong> Este estimador automatizado não substitui a análise de risco de software integral (gerenciamento R1 a R4) realizada presencialmente com medições de resistividade de solo por engenheiro de SPDA.
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={resetCalculator}
                className="w-full sm:w-1/3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-mono text-xs py-2.5 rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw size={12} />
                Refazer
              </button>
              <a
                href="#contato"
                className="w-full sm:w-2/3 bg-slate-900 hover:bg-slate-950 text-white font-heading font-bold text-xs py-2.5 rounded-sm text-center flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
              >
                <Layers size={12} className="text-[#fed721]" />
                Validar Laudo Técnico
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
