/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Testimonial, FAQ } from "./types";

export const BRAND_NAME = "Voltguard";
export const BRAND_SUBTITLE = "Soluções Elétricas e Engenharia";
export const LOGO_URL = "https://lh3.googleusercontent.com/aida/ADBb0uiBG2l25zWu__9yXIKGE9HGd61qdOYm1YYFhP8gpnH4ZpvDyGTgKtskpRDxSIOZY_A7CVOd1S9_4db36Ujo7x1I3wWIkJ5CBDec6jQbK0fGNqqmdlK5pGUZmyKOKALZzH6sC1-5w0IGv_Ov20D_zFq20WHIBg-cfkKxhuOXxQ1-KJwEw-TusMErtNEk3jhCBtMPEIiwnWA-2T7lTHvd6rcpQoljtqXXQm7pICcTRPtRCfztObL5Lq7LKtQ";

export const SERVICES: Service[] = [
  {
    id: "proj_eletr",
    title: "Projetos Elétricos",
    shortDescription: "Dimensionamento detalhado e esquemas de proteção unifilares para baixa e média tensão.",
    longDescription: "Planejamento estruturado para novas plantas industriais, readequações comerciais e residências de alto padrão. Nossos projetos incluem diagramas unifilares detalhados, memorial de cálculo de demanda, dimensionamento rigoroso de condutores e eletrodutos, barramentos de distribuição otimizados e especificações técnicas de todos os materiais conformes às exigências de concessionárias locais.",
    iconName: "FileSpreadsheet",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uhZLdMUgg9vmSnjNj5OBI88gUnLK5JTAPqZlRabquBcJv3ZYqynwieMJW8W2T_1drIE8rwe-HjfpOhmkUgHUPqXjAAjVYNT7ZjEkYNZgeaIWbV0odUjlq96BYQ-VfQYoaov82VwCZjRl9AeiZeNJatBqMJNRTlUPoetOYtZEM9YqVvRaum_mQDEk5Go2C1JQpk2O8bDLJlXCHFFcuUq7DIV0xqiyJAVPganoo086ZV5BDS1hFtc1xisQ64",
    normas: ["ABNT NBR 5410", "Concessionárias (CPFL, etc.)", "NR-10"]
  },
  {
    id: "laudo_5410",
    title: "Laudo NBR 5410 & NR-10",
    shortDescription: "Vistoria e auditoria do prontuário técnico de instalações elétricas para plena conformidade.",
    longDescription: "Inspeção em campo minuciosa para avaliação física e documental das instalações. Ideal para renovação de AVCB de bombeiros, auditoria de seguradoras, fiscalização do Ministério do Trabalho e gestão interna de riscos. O serviço acompanha relatório termográfico das conexões e barramentos sob carga com emissão imediata da correspondente ART do engenheiro fiscal.",
    iconName: "ClipboardCheck",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uhVMzw-jhnJE-f_JXSKg71LWBBjVZA9Jhxyz3EOizVmUxR96wU8oUWXLdrdWQG83l6g3eW9XEI27a71IcRjD3fzz2LspEfe3eLXbHa5-bEWqkSwqW-Ho3GJuJ-NX3C4VjFKIKfSkbDVRIfFPkdlz7tO66F3In2y3zmVs2ug-0xuYZdF9A3Be6iXOS7dItackfswa3zZx_QHKxLOQa4jKBjBg1s5MI_J1fbpM-9gTYi5Yd2MPO7xWI_-ow",
    normas: ["ABNT NBR 5410", "MTE NR-10", "Instruções Técnicas de Bombeiros"]
  },
  {
    id: "spda_aterr",
    title: "SPDA e Aterramento",
    shortDescription: "Sistemas de proteção contra descargas atmosféricas sintonizados com a norma NBR 5419.",
    longDescription: "Desenvolvimento e dimensionamento de malhas de aterramento complexas e captações aéreas por gaiola de Faraday ou método Franklin. Realizamos medições oficiais de resistência do solo pelo método de quatro eletrodos (Wenner) e geramos laudos de conformidade com diagramas de cobertura de proteção.",
    iconName: "Zap",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGP2jiwajJ-3LbMUMPy9VOoNq0BpflfIQGVmW_xglSt66lJRx2GdBg9s8mWTPK_tTIK4sYvA0_ADVCoLmxepAlyvHWxweBh4nG_WzOq89WLrZ-OljzETZ8ZrNTRF0pjQkwxGPJu7MUy5VfaHH0gBVDsTN_d9dCWf3-HgZBuxYen7I3-amuAAOIL1wQxOwc_JfT3Zc4kHi1e7i8oMyt0L5y6EYlYmsSakxE09ionT1LXRX7QFngKZ5top8Wy9KOyavkMr3CvW9EOvA",
    normas: ["ABNT NBR 5419:2015", "NBR 15749 (Medição de Resistência)"]
  },
  {
    id: "quad_paineis",
    title: "Quadros, Painéis & Automação",
    shortDescription: "Engenharia de montagem, seletividade e modernização de quadros de distribuição elétrica.",
    longDescription: "Retrofit e montagem profissional de Quadros de Distribuição (QGD), painéis de comando de bombas e motores, CCM (Centro de Controle de Motores) e bancos automáticos de capacitores para correção do fator de potência. Garantimos barramentos isolados, identificação anilhada das conexões, diagramas de porta atualizados e proteção IP contra toques acidentais em conformidade industrial rígida.",
    iconName: "Cpu",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uioRtAIC70IQwaJarFlh3nLTCrzNB1-bUhetGfDw_MnNUKL5-58P-SVa9ZGxprbycLsgOfA9T_0pJA-0PPeMOP-1HIlUDmmp4EzAUrzeZiQEKEC8cyPBcW3d0ObRdc3hUA-z_p8WKZugZbVIryG3pI0-A0p6Ndax58ZoeOwkyieWHtgTBxjvOb_c3J3DLTHnm0xYzX2uGle1dUHY7dgbET7GhCnniREM3ljWJte3AXiySyct3ZJ4anIqlk",
    normas: ["ABNT NBR IEC 61439-1", "NR-12 (Segurança de Máquinas)"]
  },
  {
    id: "audit_energ",
    title: "Auditoria & Eficiência Energética",
    shortDescription: "Análise avançada de qualidade de energia, fator de potência e atenuação de harmônicos.",
    longDescription: "Análise de perfil de carga através de analisadores digitais instalados temporariamente nos principais barramentos. Diagnosticamos a origem de perturbações na rede, distorções harmônicas que causam queima de placas eletrônicas e sugerimos as ações corretivas prioritárias para mitigar multas por excesso de reativos faturados.",
    iconName: "Activity",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ui_7sRvtmvHcPS5-Oc0bBcPeN72zpfI6xDMvFZkGBsyMk9wEjD3qR9BupK5Tz7WBFupmV-tTebM49bH_GcBsXE-oHbq6SiqWj9Eej_Ul2kS6QZz2Mb3znkJq2SfmRtKrKpR1eao8sxfZeJ92OySAFzRjkDe0ugeT1n3cbnA7Dx55qaEMMKY3bc7Yy_4SS0sBX5s3kmKBR9g3DsMhgb46omVvosQe7-34pxsMGwx_dmnyBQyFBZpKsxtMpY",
    normas: ["Resoluções Normativas da ANEEL", "Prodist Módulo 8"]
  },
  {
    id: "retrofit_led",
    title: "Retrofit Elétrico & Iluminação",
    shortDescription: "Modernização completa de infraestrutura antiga visando alto índice de reprodução de cor, menor manutenção e consumo.",
    longDescription: "Cálculos luminotécnicos detalhados usando softwares de simulação para áreas industriais e escritórios corporativos. Calculamos o nível ideal de iluminância (lux) exigido por postos de trabalho em conformidade técnica, com o melhor arranjo geométrico de projetores industriais LED e calhas de distribuição.",
    iconName: "Lightbulb",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uiHseslqPJiMR6IDDMENqEwxbO0_C9407R4tc2ijMZHjalbIrIgMVdWK0Z-HXJCcDmGV1Ogngw9dMcK7ZZa67wyFBF2c2hz2npmyQYD4xMMMrdTS2oh1YItnwi8mPqOnvHdp4upt3qk2r3kCVSvRlT1bDnPvTWJ-zzv5m-vgMRyY3iUirlhaIO4RvF5Vdb4Otu8iqj7bdRxRcEpmHtTEe-VLSvbspLXv1UsDQsd-tj3FzMuaP3ZaUSa7dg",
    normas: ["ABNT NBR ISO/CIE 8995-1", "NR-17 (Ergonomia no Trabalho)"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj_sumare",
    title: "Subestação & Instalações Industriais",
    location: "Sumaré - SP",
    category: "Industrial",
    description: "Análise técnica integral e projetos executivos de distribuição de alta potência para expansão de planta industrial automatizada.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsSo9uY0Pf58Fqc1AITkFJgJwBzTyeQa6ofx_W223JHxEKvCW6lZiDt3xcXBAVxHrHrGAdGi26KN45gJp3TSI6rev7K0ZE5ZIX9Qgb-uX4uTlrpm3JmKiNRCgiIMl2BqL72trMj6-hNaAoKOxrO7p_tV0VMeYzw-crc5vntv-KAK_kMTlwbHZv3e4x5WIMQgs8jqsLfOEaYMz0Alzq7cBf4QFSlsR58_4QiZT9OyzhF3VK8dlmwStNbGXM5qBExk04Ef4B9VqS3Mg",
    longDescription: "Estudo detalhado de coordenação e seletividade da proteção na expansão de cabine primária industrial de 13.8kV. O escopo abrangeu o projeto de novos barramentos de distribuição de 380V, malha subterrânea de aterramento protetivo, dimensionamento dos leitos de cabos principais e bancos automáticos de capacitores para compensação rápida de potência reativa excedente na linha de usinagem pesada.",
    specs: [
      { label: "Potência Instalada", value: "750 kVA" },
      { label: "Tensão de Operação", value: "13.8 kV / 380-220V" },
      { label: "Compensação Reativa", value: "125 kVAr Automático" },
      { label: "Conformidade Normativa", value: "NBR 14039 & CPFL GED 2855" }
    ]
  },
  {
    id: "proj_campinas",
    title: "Sistema SPDA e Readequação LED",
    location: "Campinas - SP",
    category: "Residencial",
    description: "Laudo, atualização do sistema de malha captora contra descargas atmosféricas e modernização luminotécnica de condomínio de alto padrão.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_DxMqax5JTCTR6Vx49KUVjfWXyprp3rSXD6GZkNej3-Tm07s8ylKXXzVZ7T5SdKtaxBvqf0GDW5ZtJPSfc79TfVBj_GzDHkrDrgDyXpwl5uRbkm6b5rZslMKzoBDVPRHfZFivjIpH61Yl_yytjEmOZKYtjiGUPcEhsH02x9Uyb9iM_66ZzHKZoVRlCfgB_mxy7yMSVI03hHd-RBpU_69qpCGGIZXBi6gAZX3kN_6Dpel9wSB3DRr7gJRbuDYBtln0QkWhYGmj3Y0",
    longDescription: "Readequação integral do subsistema de captação e descida do SPDA em conformidade com as restrições atualizadas da norma ABNT NBR 5419:2015. Em paralelo, foi desenvolvido o retrofit da iluminação externa comum do condomínio para tecnologia LED de alta durabilidade, resultando em mais de 45% de redução imediata dos custos de iluminação nas áreas de lazer e guaritas permanentes.",
    specs: [
      { label: "Norma SPDA Utilizada", value: "NBR 5419:2015 (Classe III)" },
      { label: "Pontas de Captação", value: "Franklin e Gaiola Comb." },
      { label: "Redução no Consumo LED", value: "48% Medido" },
      { label: "Laudo e Liberação", value: "Emissão de ART CREA" }
    ]
  },
  {
    id: "proj_hortolandia",
    title: "Modernização de CCM & Painéis Elétricos",
    location: "Hortolândia - SP",
    category: "Industrial",
    description: "Projeto e execução técnica de painel CCM de alta confiabilidade para controle centralizado de infraestrutura predial comercial complexa.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uiewYw2Hy2xt5zd2IPJKnVTYcdBeOZOjJYluQN8XgZoijvzEDG0_t0v43ptrdToky4cvduGDWKkHGnxL0HIEua7od7cUM1-xPPSNFaWAnIKD_A97DA0LyuW6jqG8089CUlzbaEg2rIhvQXAJvtEfoV7rRS1ZoPVCxVMcpIDV0XiB9VN4SgwN7UJk9BQEyfR7C8Nl-5kgDot2tKVXJ6Jup3ro1-KnA9PbZOsQYEpKt3zIMrNEo2XWjpA1YI",
    longDescription: "Substituição completa de painéis elétricos com graves não-conformidades de proteção térmica por estruturas modulares novas equipadas com disjuntores de caixa moldada de última geração. O sistema conta agora com contatores eletrônicos monitorados por redes industriais, relés térmicos inteligentes contra sobrecarga e intertravamento de segurança redundante para manutenção preventiva rápida.",
    specs: [
      { label: "Número de Motores", value: "14 Partidas Est-Tri" },
      { label: "Corrente de Curto Max", value: "25 kA Atribuída" },
      { label: "Grau de Proteção Painel", value: "IP 54 Interno" },
      { label: "Controle de Equipamentos", value: "CLP Integrado Modbus" }
    ]
  },
  {
    id: "proj_valinhos",
    title: "Laudo Termográfico e NBR 5410",
    location: "Valinhos - SP",
    category: "Comercial",
    description: "Vistoria termográfica detalhada sob plena carga térmica operacional para identificação preventiva de pontos quentes em supermercados de atacado.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uioRtAIC70IQwaJarFlh3nLTCrzNB1-bUhetGfDw_MnNUKL5-58P-SVa9ZGxprbycLsgOfA9T_0pJA-0PPeMOP-1HIlUDmmp4EzAUrzeZiQEKEC8cyPBcW3d0ObRdc3hUA-z_p8WKZugZbVIryG3pI0-A0p6Ndax58ZoeOwkyieWHtgTBxjvOb_c3J3DLTHnm0xYzX2uGle1dUHY7dgbET7GhCnniREM3ljWJte3AXiySyct3ZJ4anIqlk",
    longDescription: "Análise técnica executada em comércios de grande porte com câmeras termográficas de alta precisão. Foi possível mapear com precisão conexões frouxas e disjuntores operando acima da temperatura nominal devido a desbalanço de correntes entre as fases da rede. A consultoria evitou panes de interrupção operacional catastróficas em sistemas de refrigeração alimentícia essenciais.",
    specs: [
      { label: "Quadros Auditados", value: "24 Painéis Gerais" },
      { label: "Temperatura Máxima Alerta", value: "85°C em Barramento" },
      { label: "Correção Impedância", value: "Reaperto sob Medições" },
      { label: "Liberação Normativa", value: "Prontuário NR-10 Concluidor" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi_1",
    text: "Contratamos a Voltguard para elaborar o projeto e laudo técnico do painel geral de distribuição da nossa nova linha de produção industrial. A equipe entregou com um rigor técnico impecável, prazos respeitados e atendimento em tempo integral para sanar dúvidas da equipe de manutenção local.",
    author: "Eng. Ricardo Mendes",
    role: "Diretor de Operações e Facilities",
    company: "Metalúrgica Sumaré Ltda.",
    avatarInitials: "RM"
  },
  {
    id: "testi_2",
    text: "O laudo de vistoria do SPDA e o recolhimento da ART foram essenciais para a liberação do nosso Auto de Vistoria do Corpo de Bombeiros (AVCB). A clareza documental dos relatórios, fotos, mapeamento de resistência e a assessoria dada aos nossos técnicos foi fora de série. Recomendo muito seu trabalho de engenharia.",
    author: "Ana Beatriz Vieira",
    role: "Gestora Administrativa de Empreendimentos",
    company: "Condomínio Corporate Square Campinas",
    avatarInitials: "AV"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq_1",
    question: "A Voltguard emite ART (Anotação de Responsabilidade Técnica)?",
    answer: "Sim, emitimos formalmente a ART cadastrada junto ao CREA-SP para absolutamente 100% dos nossos serviços, incluindo novos projetos executivos, laudos técnicos emitidos, vistorias de conformidade predial de bombeiros e consultoria de eficiência energética predial."
  },
  {
    id: "faq_2",
    question: "Qual o prazo padrão para entrega de um laudo NBR 5410 ou SPDA ?",
    answer: "Os prazos padrão variam conforme o porte da sua instalação física de campo. Em média, as visitas de campo técnicas preliminares duram de 1 a 2 dias úteis, e o relatório técnico unificado estruturado acompanhado da ART é entregue formalmente em até 5 a 8 dias úteis de trabalho."
  },
  {
    id: "faq_3",
    question: "Vocês atendem outras regiões além de Campinas - SP?",
    answer: "Atendemos de forma imediata toda à Região Metropolitana de Campinas (incluindo Sumaré, Hortolândia, Valinhos, Vinhedo, Indaiatuba, Americana, Jaguariúna, Paulínia e Nova Odessa) com visitas de vistorias técnicas presenciais. Para projetos maiores industriais estruturados e consultoria de energia faturada fazemos atendimento em âmbito nacional."
  },
  {
    id: "faq_4",
    question: "O que é e por que preciso de um prontuário de instalações elétricas NR-10?",
    answer: "A NR-10 do Ministério do Trabalho exige que todas as empresas com carga instalada igual ou superior a 75 kW mantenham um Prontuário técnico unificado de instalações elétricas atualizado. Isso engloba laudos das instalações, de aterramento de painéis, fichas de EPI/EPC do pessoal, treinamentos regulamentares regulares obtidos e procedimentos recomendados de segurança contra choques e arcos térmicos."
  }
];
