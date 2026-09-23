import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTransition } from '../context/TransitionContext';
import { projects } from '../data/projects';

export function Work() {
  const { t } = useLanguage();
  const { navigateWithStars } = useTransition();
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleOpenProject = (e: React.MouseEvent, id: number) => {
    navigateWithStars(`/work/${id}`, { x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen bg-white" onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}>
      <div className="max-w-[1100px] mx-auto px-8 py-12">

        <motion.div className="flex items-baseline justify-between mb-10 border-b border-black pb-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="font-['Space_Mono'] uppercase tracking-tight">{t('workTitle')}</h1>
          <span className="font-['Space_Mono'] text-[11px] text-gray-500">{projects.length} projects</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={(e) => handleOpenProject(e, project.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  navigateWithStars(`/work/${project.id}`, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
                }
              }}
            >
              <div className="overflow-hidden bg-gray-100 mb-3 aspect-[4/3]">
                <img src={project.cover} alt={t(project.titleKey)} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale" loading="lazy" decoding="async" />
              </div>
              <div className="font-['Space_Mono'] text-[10px] uppercase tracking-wider">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold transition-all duration-200 group-hover:tracking-widest">{t(project.titleKey)}</span>
                  <span className="text-gray-400">{project.year}</span>
                </div>
                <div className="text-gray-500">{t(project.catKey)}</div>
                <div className="flex gap-2 mt-1.5 flex-wrap">
                  {project.tagKeys.map((tagKey) => (
                    <span key={tagKey} className="rounded-full border border-gray-300 px-2 py-0.5 text-[9px] text-gray-500 transition-colors duration-200 group-hover:border-black group-hover:text-black">{t(tagKey)}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {hovered !== null && (
        <div className="fixed pointer-events-none z-[9999] bg-black text-white px-3 py-1.5 font-['Space_Mono'] text-[11px] uppercase whitespace-nowrap tracking-wider" style={{ left: mousePos.x + 16, top: mousePos.y + 16 }}>
          {t(projects.find((p) => p.id === hovered)!.titleKey)} · {t('viewProject')}
        </div>
      )}
    </div>
  );
}
