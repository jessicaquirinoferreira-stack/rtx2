import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Shield, Award, CheckCircle2, MapPin } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';

export const Hero: React.FC = () => {
  const [quotesToday, setQuotesToday] = useState(14);

  // Subtle natural increment simulation during user stay
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuotesToday((prev) => prev + 1);
    }, 18000);
    return () => clearTimeout(timer);
  }, []);

  const whatsAppUrl = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
    'Olá! Vi o site da RTX e gostaria de solicitar um orçamento.'
  )}`;

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial gradient highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Social Proof Badge & Google Official 4.9 Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-900 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>
                  <strong className="font-semibold text-blue-950 tabular-nums">{quotesToday} orçamentos</strong> solicitados hoje
                </span>
              </div>

              <GoogleReviewsBadge />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-6" style={{ textWrap: 'balance' }}>
              Construímos com <span className="text-blue-600 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">qualidade, segurança</span> e confiança.
            </h1>

            {/* Subtitle with official positioning */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Há <strong>mais de 15 anos no mercado</strong>, a <strong>RTX Construtora & Prestação de Serviços</strong> entrega engenharia civil de alto padrão, reformas comerciais e residenciais, manutenção predial, controle de acesso e conservação patrimonial integral.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg shadow-blue-500/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-blue-600 border border-slate-200 active:scale-[0.98] rounded-xl shadow-xs transition-all duration-200"
              >
                <span>Conhecer Serviços</span>
              </a>
            </div>

            {/* Quick trust bullet markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs text-slate-600 font-medium pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Engenharia com ART / CREA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mão de Obra Própria & CLT</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Piracicaba, Campinas, SP & RJ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-End Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-70" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/50 border border-slate-200/90 shadow-2xl group flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] p-6 sm:p-10">
                {/* Subtle ambient grid and radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
                <div className="absolute -top-16 -right-16 w-60 h-60 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Selected Element: Official Logo */}
                <img
                  src={RTX_INFO.officialLogo}
                  alt="RTX Construtora - Logo Oficial 3D"
                  className="w-52 h-52 sm:w-64 sm:h-64 object-contain drop-shadow-[0_20px_35px_rgba(30,64,175,0.28)] transition-transform duration-700 group-hover:scale-105 z-10 my-auto"
                />

                {/* Floating Inset Badge - Experience */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/80 flex items-center gap-2.5 z-20">
                  <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-none">15+ Anos</div>
                    <div className="text-[10px] text-slate-500 font-medium">Tradição & Excelência</div>
                  </div>
                </div>

                {/* Floating Inset Badge - Oficial */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200/80 flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-[11px] font-bold text-slate-800">Marca Oficial</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/10 text-white z-20 shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                      Sede Operacional
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-300">
                      <MapPin className="w-3 h-3 text-cyan-400" /> Piracicaba – SP
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-snug">
                    “Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Full-Width Strip below Hero */}
        <div className="mt-16 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 tabular-nums tracking-tight">
              +15 <span className="text-blue-600 font-bold">Anos</span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              De solidez e experiência no mercado
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 tabular-nums tracking-tight">
              +380 <span className="text-blue-600 font-bold">Obras</span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Projetos executados com excelência
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 tabular-nums tracking-tight">
              100% <span className="text-blue-600 font-bold">Segurança</span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Equipe registrada e normas ABNT
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 tabular-nums tracking-tight flex items-center gap-1.5">
              4.9 <span className="text-amber-500 text-2xl">★</span> <span className="text-blue-600 font-bold text-2xl">Google</span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Avaliação de excelência dos clientes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
