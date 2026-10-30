import React from 'react';
import { MapPin, Phone, Instagram, Globe, ArrowUp } from 'lucide-react';
import { RTX_INFO, SERVICES_DATA } from '../data/rtxData';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#inicio" className="flex items-center gap-3 mb-4 group">
              <img
                src={RTX_INFO.officialLogo}
                alt="RTX Construtora"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight">
                  {RTX_INFO.fullName}
                </span>
                <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">
                  Razão Social: {RTX_INFO.razaoSocial}
                </span>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Mais de 15 anos construindo com qualidade, segurança e confiança. Construção civil, engenharia, manutenção predial e terceirização de excelência em Piracicaba, SP e RJ.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a
                href={RTX_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:text-pink-400 text-slate-300 flex items-center justify-center transition-all"
                aria-label="Instagram RTX Construtora"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={RTX_INFO.currentSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 text-slate-300 flex items-center justify-center transition-all"
                aria-label="Site Netlify Atual"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            {/* Google 4.9 Rating Badge */}
            <div className="pt-2">
              <GoogleReviewsBadge dark />
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Por que escolher a RTX
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfólio de Obras
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Services List (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Serviços Principais
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Direct Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Sede & Telefones
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href={RTX_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {RTX_INFO.address}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`https://wa.me/${RTX_INFO.phones[0].number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block text-slate-200 font-semibold"
                  >
                    {RTX_INFO.phones[0].display}
                  </a>
                  <span className="text-[10px] text-slate-500">WhatsApp Oficial (Piracicaba & SP)</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${RTX_INFO.phones[1].number}`}
                    className="hover:text-white transition-colors block text-slate-200 font-semibold"
                  >
                    {RTX_INFO.phones[1].display}
                  </a>
                  <span className="text-[10px] text-slate-500">Atendimento RJ & SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {RTX_INFO.fullName}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Piracicaba – SP</span>
            <span>·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
