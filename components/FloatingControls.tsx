import React, { useState, useRef, useEffect } from 'react';
import { Music, Disc, Phone, MessageCircle, Share2, Facebook, X } from 'lucide-react';
import { CONTACT_LINKS } from '../constants';

interface FloatingControlsProps {
  musicUrl: string;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ musicUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        return true;
      } catch {
        setIsPlaying(false);
        return false;
      }
    };

    const unlockAndPlay = () => {
      void tryPlay();
    };

    void tryPlay().then((started) => {
      if (!started) {
        // Most browsers require a user gesture before playing audio.
        document.addEventListener('pointerdown', unlockAndPlay, { once: true });
        document.addEventListener('keydown', unlockAndPlay, { once: true });
      }
    });

    return () => {
      document.removeEventListener('pointerdown', unlockAndPlay);
      document.removeEventListener('keydown', unlockAndPlay);
    };
  }, [musicUrl]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        autoPlay
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Left Bottom: Music Control */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={toggleMusic}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-500 ${
            isPlaying ? 'bg-amber-400 rotate-180' : 'bg-gray-800'
          }`}
        >
          {isPlaying ? (
            <Disc className="w-6 h-6 text-white animate-spin-slow" />
          ) : (
            <Music className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Right Bottom: Contact Menu */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showContactMenu && (
          <div className="flex flex-col gap-3 animate-fade-in-up">
             <a
              href={CONTACT_LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
              title="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={CONTACT_LINKS.zalo}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
              title="Zalo"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={CONTACT_LINKS.tiktok}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
              title="Tiktok"
            >
              <span className="font-bold text-xs">Tik</span>
            </a>
             <a
              href="tel:0999999999"
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
              title="Call"
            >
              <Phone size={20} />
            </a>
          </div>
        )}

        <button
          onClick={() => setShowContactMenu(!showContactMenu)}
          className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-rose-600 transition-colors border-2 border-white animate-bounce"
        >
          {showContactMenu ? <X size={24} /> : <Share2 size={24} />}
        </button>
      </div>
    </>
  );
};

export default FloatingControls;
