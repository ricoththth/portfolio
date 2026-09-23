import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { DraggablePhoto } from '../components/DraggablePhoto';
import imgBoard from '../../imports/image-4.png';
import imgPhoto1 from '../../imports/Desktop3/48f0e4f9ea8f9d18488373f4f94e4a0f738cfe94.png';
import imgPhoto2 from '../../imports/Desktop3/d6b83829ec4f021a428062642136e2d51c682ab2.png';
import imgPhoto3 from '../../imports/Desktop3/fe29603c489dcec5e917b0a270f2ae2dfdccf164.png';
import imgPhoto4 from '../../imports/Desktop3/de1915ac263bb0d641e7b17b76609c8d0c6836c8.png';
import imgPhoto5 from '../../imports/Desktop3/70c0b3d97ab60923b919b1ee9b1c90b3b09b45be.png';
import imgPhoto6 from '../../imports/Desktop3/12777d0292107c4af8e01b8dacef28afb348c064.png';
import imgPhoto7 from '../../imports/image-7.png';

interface Photo {
  id: number;
  img: string;
  title: string;
  x: number;
  y: number;
  rotation: number;
  width: number;
}

function GooeyWindow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef([
    { x: 80,  y: 50,  vx: 0.5,  vy: 0.3,  r: 38, color: '#f9a8d4' },
    { x: 160, y: 80,  vx: -0.4, vy: 0.6,  r: 32, color: '#fbcfe8' },
    { x: 240, y: 40,  vx: 0.3,  vy: -0.5, r: 28, color: '#f472b6' },
    { x: 120, y: 100, vx: -0.6, vy: -0.3, r: 24, color: '#ec4899' },
    { x: 200, y: 110, vx: 0.4,  vy: 0.4,  r: 20, color: '#f9a8d4' },
  ]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.filter = 'blur(10px) contrast(20)';
      ctx.globalCompositeOperation = 'source-over';
      blobsRef.current.forEach(b => {
        b.x += b.vx; b.y += b.vy;
        if (b.x < b.r || b.x > W - b.r) b.vx *= -1;
        if (b.y < b.r || b.y > H - b.r) b.vy *= -1;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      });
      ctx.filter = 'none';
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="bg-white border border-gray-200 overflow-hidden" style={{ borderRadius: 8, width: 320, height: 160 }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 bg-gray-50">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 font-['Space_Mono'] text-[9px] text-gray-400 uppercase tracking-wider">gooey.play</span>
      </div>
      <div className="relative" style={{ height: 120 }}>
        <canvas ref={canvasRef} width={320} height={120} className="w-full h-full" />
      </div>
    </div>
  );
}

const deckRotations = [8, -5, 12, -9, 3, -14, 6];

function PhotoDeck({ images }: { images: { img: string; caption: string }[] }) {
  const [stack, setStack] = useState(images.map((_, i) => i));
  const cycle = () => setStack(prev => {
    const next = [...prev];
    const top = next.pop()!;
    next.unshift(top);
    return next;
  });
  return null;
}

export function Play() {
  const { t } = useLanguage();
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [topId, setTopId] = useState<number | null>(null);

  const [photos, setPhotos] = useState<Photo[]>([
    { id: 1, img: imgPhoto5, title: t('photo1Title'), x: 50,  y: 40,  rotation: -8,  width: 180 },
    { id: 2, img: imgPhoto4, title: t('photo2Title'), x: 600, y: 80,  rotation: 14,  width: 150 },
    { id: 3, img: imgPhoto1, title: t('photo3Title'), x: 750, y: 300, rotation: -95, width: 140 },
    { id: 4, img: imgPhoto3, title: t('photo4Title'), x: 80,  y: 380, rotation: 2,   width: 200 },
    { id: 5, img: imgPhoto2, title: t('photo5Title'), x: 150, y: 550, rotation: 1,   width: 180 },
    { id: 6, img: imgPhoto6, title: t('photo6Title'), x: 450, y: 350, rotation: 7,   width: 220 },
  ]);

  const deckImages = [
    { img: imgPhoto7, caption: t('playCap1') },
    { img: imgPhoto4, caption: t('playCap2') },
    { img: imgPhoto5, caption: t('playCap3') },
    { img: imgPhoto2, caption: t('playCap4') },
    { img: imgPhoto3, caption: t('playCap5') },
    { img: imgPhoto6, caption: t('playCap6') },
  ];

  const movePhoto = useCallback((id: number, x: number, y: number) => {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, x, y } : p));
  }, []);

  const handleDragStart = useCallback((id: number) => {
    setTopId(id);
    setHoveredTitle(null);
  }, []);

  const sorted = topId
    ? [...photos.filter(p => p.id !== topId), photos.find(p => p.id === topId)!]
    : photos;

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
          {sorted.map(photo => (
            <DraggablePhoto key={photo.id} {...photo} onMove={movePhoto} onHoverChange={setHoveredTitle} onDragStart={handleDragStart} />
          ))}
        </div>

        <div className="mt-4 font-['Space_Mono'] text-[10px] text-gray-400 uppercase tracking-widest">
          {t('playInstruction')}
        </div>

        <div className="mt-12 flex flex-wrap items-start gap-16">
          <div><GooeyWindow /></div>
          <div><PhotoDeck images={deckImages} /></div>
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
