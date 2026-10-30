import React, { useState } from 'react';
import {
  Building2,
  HardHat,
  ShieldCheck,
  Sparkles,
  Wrench,
  Briefcase,
  Home,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  X,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem, RTX_INFO } from '../data/rtxData';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6" />,
  HardHat: <HardHat className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  HomeCheck: <Home className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const text = `Olá! Vi o site da RTX Construtora e gostaria de solicitar um orçamento para o serviço de: ${serviceTitle}.`;
    return `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            Especialidades de Engenharia & Gestão
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Serviços completos para o seu projeto e patrimônio
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            “Transformamos seu ambiente em um local gostoso de trabalhar e morar.” Soluções integradas com rigor técnico, equipe qualificada e supervisão constante.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const isFeatured = idx === 0 || idx === 2;
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 flex flex-col justify-between ${
                  isFeatured ? 'bg-gradient-to-b from-blue-50/30 to-white' : ''
                }`}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {iconMap[service.iconName] || <Building2 className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-medium text-slate-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Highlight pill text */}
                  <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    {service.highlightText}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Key Benefits List */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Orçar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest block mb-2">
              Atendimento Especializado
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Precisa de um pacote sob medida para o seu condomínio ou empresa?
            </h3>
            <p className="text-sm text-slate-300">
              Oferecemos contratos de facilities, portaria, reformas e manutenção integrada com redução de custos e zero dor de cabeça.
            </p>
          </div>
          <a
            href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
              'Olá! Gostaria de uma proposta de serviços e manutenção para condomínio/empresa com a RTX.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-blue-50 active:scale-95 rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              {iconMap[selectedService.iconName] || <Building2 className="w-6 h-6" />}
            </div>

            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              {selectedService.highlightText}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {selectedService.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>

            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Diferenciais deste serviço:
            </h4>
            <ul className="space-y-2.5 mb-8">
              {selectedService.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <a
                href={getServiceWhatsAppUrl(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="py-3 px-4 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
