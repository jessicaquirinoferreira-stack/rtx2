import React, { useState } from 'react';
import { MapPin, ArrowRight, MessageCircle, X, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA, PortfolioItem, RTX_INFO } from '../data/rtxData';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = ['Todos', 'Residencial', 'Comercial', 'Manutenção & Condomínios', 'Limpeza & Segurança'];

  const filteredItems =
    activeFilter === 'Todos'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Projetos & Execuções
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Portfólio de Obras e Gestão
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Conheça alguns dos empreendimentos residenciais, comerciais e condomínios que confiam no padrão RTX de engenharia.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setActiveModalItem(item)}
            >
              {/* Image with zoom effect */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-slate-800 shadow-sm">
                  {item.category}
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Inset Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600">
                  <span className="flex items-center gap-1">
                    Ver especificações técnicas <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-400 font-normal">Padrão RTX</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[92vh] flex flex-col">
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-700 hover:text-slate-950 bg-white/80 hover:bg-white rounded-full backdrop-blur-md shadow-md transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900 shrink-0">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1 block">
                  {activeModalItem.category} · {activeModalItem.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {activeModalItem.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col justify-between">
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Visão Geral do Projeto
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {activeModalItem.description}
                </p>

                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Detalhes Técnicos & Execução
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalItem.details}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
                    `Olá! Gostei do projeto "${activeModalItem.title}" no site da RTX e gostaria de solicitar um orçamento similar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Quero um projeto com este padrão</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="py-3 px-5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
