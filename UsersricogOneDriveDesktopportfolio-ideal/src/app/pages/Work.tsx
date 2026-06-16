import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import imgPhoto1 from '../../imports/Desktop3/48f0e4f9ea8f9d18488373f4f94e4a0f738cfe94.png';
import imgPhoto2 from '../../imports/Desktop3/d6b83829ec4f021a428062642136e2d51c682ab2.png';
import imgPhoto3 from '../../imports/Desktop3/fe29603c489dcec5e917b0a270f2ae2dfdccf164.png';
import imgPhoto4 from '../../imports/Desktop3/de1915ac263bb0d641e7b17b76609c8d0c6836c8.png';
import imgPhoto5 from '../../imports/Desktop3/70c0b3d97ab60923b919b1ee9b1c90b3b09b45be.png';
import imgPhoto6 from '../../imports/Desktop3/12777d0292107c4af8e01b8dacef28afb348c064.png';
import imgPhoto7 from '../../imports/Desktop3/df869e1615c57ee0774db69b610db62ce72c7873.png';

export function Work() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const projects = [
    { id: 1, img: imgPhoto1, title: t('proj1Title'), category: t('proj1Cat'), year: '2024', tags: [t('proj1Tag1'), t('proj1Tag2')] },
    { id: 2, img: imgPhoto4, title: t('proj2Title'), category: t('proj2Cat'), year: '2023', tags: [t('proj2Tag1'), t('proj2Tag2')] },
    { id: 3, img: imgPhoto5, title: t('proj3Title'), category: t('proj3Cat'), year: '2022', tags: [t('proj3Tag1'), t('proj3Tag2')] },
    { id: 4, img: imgPhoto2, title: t('proj4Title'), category: t('proj4Cat'), year: '2022', tags: [t('proj4Tag1'), t('proj4Tag2')] },
    { id: 5, img: imgPhoto3, title: t('proj5Title'), category: t('proj5Cat'), year: '2023', tags: [t('proj5Tag1'), t('proj5Tag2')] },
    { id: 6, img: imgPhoto6, title: t('proj6Title'), category: t('proj6Cat'), year: '2024', tags: [t('proj6Tag1'), t('proj6Tag2')] },
    { id: 7, img: imgPhoto7, title: t('proj7Title'), category: t('proj7Cat'), year: '2023', tags: [t('proj7Tag1'), t('proj7Tag2')] },
  ];

  return (
    <div className="min-h-screen bg-white" onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}>
      <div className="max-w-[1100px] mx-auto px-8 py-12">

        <motion.div className="flex items-baseline justify-between mb-10 border-b border-black pb-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="font-['Space_Mono'] uppercase tracking-tight">{t('workTitle')}</h1>
          <span className="font-['Space_Mono'] text-[11px] text-gray-500">{projects.length} projects</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
          {projects.map((project, i) => (
            <motion.div key={project.id} className="group cursor-pointer" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }} onMouseEnter={() => setHovered(project.id)} onMouseLeave={() => setHovered(null)}>
              <div className="overflow-hidden bg-gray-100 mb-3 aspect-[4/3]">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale" loading="lazy" decoding="async" />
              </div>
              <div className="font-['Space_Mono'] text-[10px] uppercase tracking-wider">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold transition-all duration-200 group-hover:tracking-widest">{project.title}</span>
                  <span className="text-gray-400">{project.year}</span>
                </div>
                <div className="text-gray-500">{project.category}</div>
                <div className="flex gap-2 mt-1.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-gray-300 px-1.5 py-0.5 text-[9px] text-gray-500 transition-colors duration-200 group-hover:border-black group-hover:text-black">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {hovered !== null && (
        <div className="fixed pointer-events-none z-[9999] bg-black text-white px-3 py-1.5 font-['Space_Mono'] text-[11px] uppercase whitespace-nowrap tracking-wider" style={{ left: mousePos.x + 16, top: mousePos.y + 16 }}>
          {projects.find((p) => p.id === hovered)?.title}
        </div>
      )}
    </div>
  );
}
