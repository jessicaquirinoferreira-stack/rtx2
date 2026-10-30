import React from 'react';
import {
  ShieldCheck,
  Award,
  Users2,
  Clock4,
  FileCheck2,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Mais de 15 Anos de Mercado",
      description: "Solidez comprovada e know-how técnico acumulado em centenas de intervenções, reformas e construções civis.",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-blue-600" />,
      title: "Engenharia Técnica & ART",
      description: "Todas as obras são respaldadas por responsabilidade técnica, projetos executivos e cumprimento estrito das normas ABNT.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-blue-600" />,
      title: "Equipe Própria & Vistoriada",
      description: "Profissionais registrados, uniformizados e treinados com foco em excelência, ética, segurança do trabalho e zelo patrimonial.",
    },
    {
      icon: <Clock4 className="w-6 h-6 text-blue-600" />,
      title: "Pontualidade & Transparência",
      description: "Cronogramas cumpridos à risca e relatórios claros de evolução física e orçamentária para sua total tranquilidade.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Cuidado e Preservação Patrimonial",
      description: "“Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.” Proteção estrutural e valorização imobiliária.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
      title: "Ambientes Agradáveis",
      description: "“Transformamos seu ambiente em um local gostoso de trabalhar e morar”, seja em condomínios, residências ou sedes corporativas.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Editorial Presentation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              Diferenciais Competitivos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Por que escolher a RTX Construtora?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Na RTX, unimos o rigor da engenharia civil moderna à confiabilidade de uma equipe treinada para zelar por cada detalhe do seu empreendimento.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm mb-8 w-full">
              <p className="text-sm font-semibold text-slate-900 italic mb-2">
                “Segurança, conservação e cuidado para o seu patrimônio.”
              </p>
              <span className="text-xs text-slate-500">
                — Compromisso oficial RTX Construtora & Prestação de Serviços
              </span>
            </div>

            <a
              href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
                'Olá! Gostaria de entender melhor como a RTX Construtora pode atender meu projeto.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Fale com nossos engenheiros</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Side: 6 Differentiators Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50/80 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  {diff.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
