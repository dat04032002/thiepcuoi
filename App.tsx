import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import CoupleSection from './components/CoupleSection';
import CalendarSection from './components/CalendarSection';
import Gallery from './components/Gallery';
import FloatingControls from './components/FloatingControls';
import Footer from './components/Footer';
import { WEDDING_DATA } from './constants';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  // Security: Prevent Right Click and F12
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleIntroComplete = () => {
    setShowContent(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-rose-200">
      {/* Intro Animation */}
      <Intro onComplete={handleIntroComplete} />

      {/* Main Content */}
      <div 
        className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Header / Hero */}
        <header className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
             <img 
               src="https://picsum.photos/id/193/1920/1080" 
               alt="Hero" 
               className="w-full h-full object-cover object-center"
             />
             <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 space-y-6">
            <h3 className="text-xl md:text-2xl uppercase tracking-[0.2em] font-light animate-fade-in-down">Save The Date</h3>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
               <h1 className="text-6xl md:text-8xl font-script animate-zoom-in text-rose-100">Lê Thực</h1>
               <span className="text-4xl font-serif italic">&</span>
               <h1 className="text-6xl md:text-8xl font-script animate-zoom-in text-rose-100">Nguyễn Nhung</h1>
            </div>
            <p className="text-xl md:text-2xl font-serif mt-4 border-t border-b border-white/50 py-2 px-8">
              30 . 03 . 2026
            </p>

            <button 
              onClick={() => scrollToSection('couple')}
              className="absolute bottom-10 animate-bounce cursor-pointer p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </header>

        {/* Sections */}
        <CoupleSection groom={WEDDING_DATA.groom} bride={WEDDING_DATA.bride} />
        
        <CalendarSection weddingDateStr={WEDDING_DATA.weddingDate} />
        
        <div className="relative py-20 bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/1016/1920/600)' }}>
            <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
                <p className="text-2xl md:text-4xl text-white font-script text-center max-w-2xl px-4 leading-relaxed">
                  "Hạnh phúc không phải là điểm đến, mà là hành trình chúng ta đi cùng nhau."
                </p>
            </div>
        </div>

        <Gallery images={WEDDING_DATA.album} />

        <Footer />
        
        <FloatingControls musicUrl={WEDDING_DATA.musicUrl} />
      </div>
    </div>
  );
};

export default App;