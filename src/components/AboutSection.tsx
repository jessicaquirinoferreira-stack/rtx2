import React from 'react';
import { MapPin, Phone, Instagram, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Logo Card & Description (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/50 border border-slate-200/90 shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[420px] sm:min-h-[480px] group">
              {/* Subtle ambient grid and radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Selected Element: Official Logo */}
              <img
                src={RTX_INFO.officialLogo}
                alt="RTX Construtora - Logo Oficial 3D"
                className="w-52 h-52 sm:w-60 sm:h-60 object-contain drop-shadow-[0_20px_35px_rgba(30,64,175,0.28)] transition-transform duration-700 group-hover:scale-105 z-10 my-auto"
              />

              {/* Inset Brand Overlay with Official Description */}
              <div className="relative w-full bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-slate-200/80 z-20 mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <img
                      src={RTX_INFO.officialLogo}
                      alt="RTX Logo"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {RTX_INFO.fullName}
                    </h4>
                    <span className="text-[11px] font-semibold text-blue-600 block">
                      Razão Social: {RTX_INFO.razaoSocial}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  “Construímos com qualidade, segurança e confiança.” Mais de 15 anos no mercado oferecendo engenharia civil residencial e comercial, reformas, manutenção predial, facilities e controle de acesso com excelência comprovada.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Official Company Profile (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              Sobre a RTX Construtora
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Mais de 15 anos transformando projetos em realidade sólida
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              A <strong>RTX Construtora – Engenharia e Construção</strong> (também reconhecida amplamente como <strong>RTX Prestação de Serviços</strong>) consolidou sua trajetória com base em três pilares fundamentais: <strong>qualidade, segurança e confiança</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Com sede corporativa estrategicamente localizada em <strong>Piracicaba – SP</strong> e operações ágeis em toda a região metropolitana de São Paulo e Rio de Janeiro, atendemos desde residências contemporâneas de alto padrão até condomínios horizontais/verticais e grandes empreendimentos comerciais.
            </p>

            {/* Official Key Quote */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/70 mb-8 w-full">
              <p className="text-sm sm:text-base font-semibold text-blue-950 italic">
                “Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.”
              </p>
            </div>

            {/* Official Data Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">Endereço Oficial</span>
                  <a
                    href={RTX_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {RTX_INFO.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">Instagram Oficial</span>
                  <a
                    href={RTX_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 font-semibold hover:underline"
                  >
                    {RTX_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">WhatsApp Oficial</span>
                  <a
                    href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(RTX_INFO.defaultWhatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-blue-600 font-semibold"
                  >
                    {RTX_INFO.phones[0].display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">Atendimento RJ & SP</span>
                  <a
                    href={`tel:${RTX_INFO.phones[1].number}`}
                    className="text-xs text-slate-600 hover:text-blue-600"
                  >
                    {RTX_INFO.phones[1].display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
