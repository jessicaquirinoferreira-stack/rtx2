import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/rtxData';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <GoogleReviewsBadge className="mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            O que dizem os clientes e síndicos
          </h2>
          <p className="text-base text-slate-600">
            A satisfação de quem confia seu patrimônio aos mais de 15 anos de excelência da RTX Construtora com avaliação 4.9 no Google.
          </p>
        </div>

        {/* Carousel / Interactive Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg">
            <Quote className="w-12 h-12 text-blue-200 mb-6" />

            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
              "{current.text}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
              <div>
                <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
                <div className="text-xs text-slate-500 font-medium">
                  <span>{current.role}</span> · <span>{current.companyOrLocation}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-xs"
                  aria-label="Depoimento Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono tabular-nums text-slate-400 px-2">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
                <button
                  type="button"
                  onClick={next}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-xs"
                  aria-label="Próximo Depoimento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
