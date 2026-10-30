import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryPhone = RTX_INFO.phones[0];
  const whatsAppUrl = `https://wa.me/${primaryPhone.number}?text=${encodeURIComponent(RTX_INFO.defaultWhatsAppMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark with Official Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-3 group whitespace-nowrap shrink-0"
              aria-label="RTX Construtora - Início"
            >
              <img
                src={RTX_INFO.officialLogo}
                alt="RTX Construtora"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  RTX Construtora
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                  Engenharia & Construção
                </span>
              </div>
            </a>

            {/* Zone 2: 5 Clean Single-Line Nav Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              <a
                href="#inicio"
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
              >
                Serviços
              </a>
              <a
                href="#video-institucional"
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Vídeo Oficial</span>
              </a>
              <a
                href="#sobre"
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
              >
                Sobre
              </a>
              <a
                href="#portfolio"
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
              >
                Portfólio
              </a>
              <a
                href="#contato"
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
              >
                Contato
              </a>
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${primaryPhone.number}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{primaryPhone.display}</span>
              </a>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md shadow-blue-500/10 whitespace-nowrap shrink-0"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
              >
                Orçamento
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Abrir Menu de Navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-4 left-4 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-3 text-base font-medium text-slate-700">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Início
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#video-institucional"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center justify-between"
              >
                <span>Vídeo Oficial</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">Novo</span>
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Diferenciais
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Portfólio
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Contato
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-center text-xs text-slate-500 mt-1">
                Atendimento: {primaryPhone.display}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
