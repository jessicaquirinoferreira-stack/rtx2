import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const CtaSection: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
    'Olá! Vi o site da RTX e gostaria de solicitar um orçamento.'
  )}`;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-6">
          Mais de 15 Anos de Experiência
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Quando o assunto é cuidar do seu patrimônio, <span className="text-cyan-400">qualidade faz toda a diferença.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Entre em contato agora e solicite seu orçamento. Transformamos seu ambiente em um local gostoso de trabalhar e morar com segurança, conservação e engenharia de ponta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-slate-900 bg-white hover:bg-blue-50 active:scale-95 rounded-xl shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>Falar no WhatsApp Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${RTX_INFO.phones[0].number}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 active:scale-95 rounded-xl backdrop-blur-md transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Ligar: {RTX_INFO.phones[0].display}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
