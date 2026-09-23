import { useState, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DraggablePhoto } from '../components/DraggablePhoto';
import imgBoard from '../../imports/image-4.png';
import imgPhoto1 from '../../imports/Desktop3/48f0e4f9ea8f9d18488373f4f94e4a0f738cfe94.png';
import imgPhoto2 from '../../imports/Desktop3/d6b83829ec4f021a428062642136e2d51c682ab2.png';
import imgPhoto3 from '../../imports/Desktop3/fe29603c489dcec5e917b0a270f2ae2dfdccf164.png';
import imgPhoto4 from '../../imports/Desktop3/de1915ac263bb0d641e7b17b76609c8d0c6836c8.png';
import imgPhoto5 from '../../imports/Desktop3/70c0b3d97ab60923b919b1ee9b1c90b3b09b45be.png';
import imgPhoto6 from '../../imports/Desktop3/12777d0292107c4af8e01b8dacef28afb348c064.png';

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
    { id: 1, img: imgPhoto5, title: t('photo1Title'), x: 50,  y: 40,  rotation: -8,  width: 180, zIndex: 1 },
    { id: 2, img: imgPhoto4, title: t('photo2Title'), x: 600, y: 80,  rotation: 14,  width: 150, zIndex: 2 },
    { id: 3, img: imgPhoto1, title: t('photo3Title'), x: 750, y: 300, rotation: -95, width: 140, zIndex: 3 },
    { id: 4, img: imgPhoto3, title: t('photo4Title'), x: 80,  y: 380, rotation: 2,   width: 200, zIndex: 4 },
    { id: 5, img: imgPhoto2, title: t('photo5Title'), x: 150, y: 550, rotation: 1,   width: 180, zIndex: 5 },
    { id: 6, img: imgPhoto6, title: t('photo6Title'), x: 450, y: 350, rotation: 7,   width: 220, zIndex: 6 },
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

        <div className="relative w-full overflow-hidden" style={{ height: 700, backgroundImage: `url(${imgBoard})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          {photos.map(photo => (
            <DraggablePhoto key={photo.id} {...photo} onMove={movePhoto} onHoverChange={setHoveredTitle} onDragStart={handleDragStart} />
          ))}
        </div>

        <div className="mt-4 font-['Space_Mono'] text-[10px] text-gray-400 uppercase tracking-widest">
          {t('playInstruction')}
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
