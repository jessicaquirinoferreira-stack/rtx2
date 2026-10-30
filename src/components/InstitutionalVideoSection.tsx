import React, { useRef, useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  MessageCircle,
  Shield,
  CheckCircle2,
  Phone,
  Sparkles,
  Users,
} from 'lucide-react';
import { VIDEO_DATA, RTX_PRESENTERS, RTX_INFO } from '../data/rtxData';

export const InstitutionalVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video-institucional" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Apresentação Oficial da Empresa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Conheça a RTX Construtora em Vídeo
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Acompanhe a apresentação oficial com <strong>Carlos Santos</strong> e <strong>Dulcinéia Santos</strong> da equipe RTX, demonstrando nossos serviços de controle de acesso, conservação e manutenção técnica.
          </p>
        </div>

        {/* Video Player + Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Responsive Video Player Container (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] rounded-3xl overflow-hidden bg-black border-2 border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group">
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={VIDEO_DATA.videoUrl}
                poster={VIDEO_DATA.posterUrl}
                playsInline
                preload="metadata"
                className="w-full h-auto aspect-[9/16] max-h-[640px] object-cover mx-auto"
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
              />

              {/* Center Play Button Overlay (when paused) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 active:scale-95 animate-pulse">
                    <Play className="w-9 h-9 fill-white translate-x-1" />
                  </div>
                  <span className="mt-4 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/20 text-xs font-semibold text-white tracking-wide">
                    Assistir Apresentação Oficial (0:35)
                  </span>
                </div>
              )}

              {/* Bottom Custom Control Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between gap-3 text-white">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <div className="flex-1 text-center text-xs font-medium text-slate-300 truncate">
                  Carlos Santos & Dulcinéia Santos · RTX
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
                    aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleFullScreen}
                    className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
                    aria-label="Tela Cheia"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information Extracted from the Video (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Presenters Cards */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
                Porta-Vozes Oficiais
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {RTX_PRESENTERS.map((pres, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md"
                  >
                    <img
                      src={pres.photo}
                      alt={pres.name}
                      className="w-14 h-14 rounded-xl object-cover border border-cyan-400/40 shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{pres.name}</h4>
                      <span className="text-xs text-cyan-400 font-medium block">
                        {pres.team} · {pres.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Highlights Box */}
            <div className="p-5 rounded-2xl bg-blue-950/60 border border-blue-500/30 backdrop-blur-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                Mensagem Central do Vídeo
              </h4>
              <p className="text-sm text-slate-100 font-medium italic mb-4 leading-relaxed">
                “Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença. Na RTX oferecemos serviço de controle de acesso, garantindo mais segurança e tranquilidade para sua empresa, condomínio ou empreendimento.”
              </p>
              <div className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Controlador de acesso presencial e tecnológico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conservação e higienização especializada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Manutenção predial preventiva e técnica</span>
                </div>
              </div>
            </div>

            {/* Contacts Shown in Video Banner */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700/90 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Fale Conosco (Indicado no Vídeo)
                </span>
                <div className="flex flex-col text-sm font-bold text-cyan-300">
                  <a href={`https://wa.me/${RTX_INFO.phones[0].number}`} className="hover:underline">
                    {RTX_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${RTX_INFO.phones[1].number}`} className="hover:underline">
                    {RTX_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
                  'Olá! Assisti ao vídeo institucional da RTX e gostaria de solicitar um orçamento.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
