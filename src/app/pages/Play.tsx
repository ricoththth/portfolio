import { useState, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DraggablePhoto } from '../components/DraggablePhoto';
import { PLAY_IMAGES } from '../data/images';

interface Photo {
  id: number;
  img: string;
  title: string;
  x: number;
  y: number;
  rotation: number;
  width: number;
  zIndex: number;
}

export function Play() {
  const { t } = useLanguage();
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const zCounterRef = useRef(6);

  const [photos, setPhotos] = useState<Photo[]>([
    { id: 1, img: PLAY_IMAGES.fotos[0].img, title: t(PLAY_IMAGES.fotos[0].titleKey), x: 50,  y: 40,  rotation: -8,  width: 180, zIndex: 1 },
    { id: 2, img: PLAY_IMAGES.fotos[1].img, title: t(PLAY_IMAGES.fotos[1].titleKey), x: 600, y: 80,  rotation: 14,  width: 150, zIndex: 2 },
    { id: 3, img: PLAY_IMAGES.fotos[2].img, title: t(PLAY_IMAGES.fotos[2].titleKey), x: 750, y: 300, rotation: -95, width: 140, zIndex: 3 },
    { id: 4, img: PLAY_IMAGES.fotos[3].img, title: t(PLAY_IMAGES.fotos[3].titleKey), x: 80,  y: 380, rotation: 2,   width: 200, zIndex: 4 },
    { id: 5, img: PLAY_IMAGES.fotos[4].img, title: t(PLAY_IMAGES.fotos[4].titleKey), x: 150, y: 550, rotation: 1,   width: 180, zIndex: 5 },
    { id: 6, img: PLAY_IMAGES.fotos[5].img, title: t(PLAY_IMAGES.fotos[5].titleKey), x: 450, y: 350, rotation: 7,   width: 220, zIndex: 6 },
  ]);

  const movePhoto = useCallback((id: number, x: number, y: number) => {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, x, y } : p));
  }, []);

  // Bring the picked-up photo to front via z-index only — the photos array
  // (and DOM order) never changes, so an in-progress drag never gets its
  // element relocated in the DOM, which was interrupting pointer capture.
  const handleDragStart = useCallback((id: number) => {
    zCounterRef.current += 1;
    const z = zCounterRef.current;
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, zIndex: z } : p));
    setHoveredTitle(null);
  }, []);

  return (
    <div className="min-h-screen bg-white" onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}>
      <div className="max-w-[1200px] mx-auto px-8 py-8">

        <div className="mb-6">
          <h1 className="font-['Space_Mono'] font-bold text-2xl uppercase tracking-tight">
            [{t('play')}]
          </h1>
        </div>

        <div className="relative w-full overflow-hidden" style={{ height: 700, backgroundImage: `url(${PLAY_IMAGES.tablero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          {photos.map(photo => (
            <DraggablePhoto key={photo.id} {...photo} onMove={movePhoto} onHoverChange={setHoveredTitle} onDragStart={handleDragStart} />
          ))}
        </div>

        <div className="mt-4 font-['Space_Mono'] text-[10px] text-gray-400 uppercase tracking-widest">
          {t('playInstruction')}
        </div>

        <div className="mt-10 flex justify-center">
          <img src={PLAY_IMAGES.banner} alt="Coming up: photobooth" className="w-full max-w-[560px] h-auto" />
        </div>
      </div>

      {hoveredTitle && (
        <div className="fixed pointer-events-none z-[9999] bg-black text-white px-3 py-1.5 font-['Space_Mono'] text-[11px] uppercase whitespace-nowrap tracking-wider" style={{ left: mousePos.x + 16, top: mousePos.y + 16 }}>
          {hoveredTitle}
        </div>
      )}
    </div>
  );
}
