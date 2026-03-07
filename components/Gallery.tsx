import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    // Shuffle images on mount for random effect
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    setShuffledImages(shuffled);
  }, [images]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % shuffledImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + shuffledImages.length) % shuffledImages.length);
    }
  };

  return (
    <div className="py-16 px-4 bg-stone-50" id="album">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-script text-rose-500 mb-4">Album Hạnh Phúc</h2>
        <div className="flex justify-center items-center gap-2 text-stone-400">
             <div className="h-[1px] w-12 bg-stone-300"></div>
             <Heart size={16} fill="#fda4af" className="text-rose-300"/>
             <div className="h-[1px] w-12 bg-stone-300"></div>
        </div>
        <p className="mt-4 text-stone-600 italic">Những khoảnh khắc ngọt ngào của chúng mình</p>
      </div>

      {/* Masonry Layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto space-y-4">
        {shuffledImages.map((src, index) => (
          <div 
            key={index} 
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Heart className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>

          <button 
            className="absolute left-2 md:left-8 text-white hover:text-gray-300 p-2 bg-black/20 rounded-full transition-colors"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={shuffledImages[lightboxIndex]} 
              alt="Lightbox" 
              className="max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl animate-fade-in"
            />
          </div>

          <button 
            className="absolute right-2 md:right-8 text-white hover:text-gray-300 p-2 bg-black/20 rounded-full transition-colors"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;