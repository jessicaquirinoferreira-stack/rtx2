import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Exit intent detection via mouseleave toward top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        // Check session storage so we don't annoy repeatedly
        const alreadyShown = sessionStorage.getItem('rtx_exit_intent_shown');
        if (!alreadyShown) {
          setIsOpen(true);
          setHasTriggered(true);
          sessionStorage.setItem('rtx_exit_intent_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const whatsAppUrl = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
    'Olá! Antes de sair do site da RTX, gostaria de solicitar uma avaliação técnica e orçamento sem compromisso.'
  )}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden text-center">
        {/* Glow Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700" />

        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo and Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 p-2 flex items-center justify-center mb-4 shadow-sm">
          <img
            src={RTX_INFO.officialLogo}
            alt="RTX Construtora"
            className="w-full h-full object-contain"
          />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">
          Oportunidade de Orçamento Exclusivo
        </span>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
          Vai iniciar uma obra ou precisa cuidar do seu patrimônio?
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          Não feche com nenhum fornecedor antes de falar com a equipe de engenharia da <strong>RTX Construtora</strong>. Mais de 15 anos de excelência com garantia, pontualidade e os melhores preços de Piracicaba e região.
        </p>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-left flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600">
            <strong className="text-slate-800">Avaliação técnica sem custo:</strong> Converse diretamente com nossos especialistas no WhatsApp agora mesmo.
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Falar com Engenheiro no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleClose}
            className="text-xs text-slate-400 hover:text-slate-600 py-1 transition-colors cursor-pointer"
          >
            Continuar navegando no site
          </button>
        </div>
      </div>
    </div>
  );
};
