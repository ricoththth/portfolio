import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTransition } from '../context/TransitionContext';
import { projects, getProjectById } from '../data/projects';
import { NotFound } from './NotFound';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const { navigateWithStars } = useTransition();

  const projectId = Number(id);
  const project = getProjectById(projectId);

  if (!project) return <NotFound />;

  const index = projects.findIndex((p) => p.id === projectId);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const handleNavigate = (e: React.MouseEvent, path: string) => {
    navigateWithStars(path, { x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1100px] mx-auto px-8 py-12">

        <motion.button
          onClick={(e) => handleNavigate(e, '/work')}
          className="group flex items-center gap-2 mb-10 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-gray-500 hover:text-black transition-colors duration-200"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft size={13} className="transition-transform duration-200 group-hover:-translate-x-1" />
          {t('backToWork')}
        </motion.button>

        {/* ── Hero ────────────────────────────────────────────────── */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 border-b border-black pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-gray-400">
              <Star size={12} fill="currentColor" strokeWidth={0} />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-widest">{t(project.catKey)} · {project.year}</span>
            </div>
            <h1 className="font-['Space_Mono'] uppercase tracking-tight text-3xl md:text-4xl">{t(project.titleKey)}</h1>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <div className="flex gap-2 flex-wrap md:justify-end">
              {project.tagKeys.map((tagKey) => (
                <span key={tagKey} className="border border-black px-2 py-1 font-['Space_Mono'] text-[10px] uppercase tracking-wider">{t(tagKey)}</span>
              ))}
            </div>
            <p className="font-['Space_Mono'] text-[12px] leading-relaxed text-gray-600 max-w-sm md:max-w-md md:text-right whitespace-pre-line">
              {t(project.descKey)}
            </p>
          </div>
        </motion.div>

        {/* ── Cover ───────────────────────────────────────────────── */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show" className="overflow-hidden bg-gray-100 mb-6 aspect-[16/9]">
          <img src={project.cover} alt={t(project.titleKey)} className="w-full h-full object-cover" />
        </motion.div>

        {/* ── Gallery ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {project.gallery.slice(1).map((img, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className={`overflow-hidden bg-gray-100 aspect-[4/3] ${i === 0 ? 'md:col-span-2 md:aspect-[16/8]' : ''}`}
            >
              <img src={img} alt={`${t(project.titleKey)} ${i + 2}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>

        {/* ── Prev / Next ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 border-t border-black">
          <button onClick={(e) => handleNavigate(e, `/work/${prev.id}`)} className="group text-left py-6 pr-4 border-r border-black">
            <div className="flex items-center gap-2 mb-1 font-['Space_Mono'] text-[10px] uppercase tracking-widest text-gray-400">
              <ArrowLeft size={11} className="transition-transform duration-200 group-hover:-translate-x-1" />
              {t('prevProject')}
            </div>
            <div className="font-['Space_Mono'] text-sm uppercase tracking-tight group-hover:tracking-widest transition-all duration-200">{t(prev.titleKey)}</div>
          </button>
          <button onClick={(e) => handleNavigate(e, `/work/${next.id}`)} className="group text-right py-6 pl-4">
            <div className="flex items-center justify-end gap-2 mb-1 font-['Space_Mono'] text-[10px] uppercase tracking-widest text-gray-400">
              {t('nextProject')}
              <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
            </div>
            <div className="font-['Space_Mono'] text-sm uppercase tracking-tight group-hover:tracking-widest transition-all duration-200">{t(next.titleKey)}</div>
          </button>
        </div>

      </div>
    </div>
  );
}
