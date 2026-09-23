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
        {/* Cover photo sits small, next to the description — no big
            full-width hero image. */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="mb-10 border-b border-black pb-8">
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <Star size={12} fill="currentColor" strokeWidth={0} />
            <span className="font-['Space_Mono'] text-[10px] uppercase tracking-widest">{t(project.catKey)}</span>
          </div>
          <h1 className="font-['Space_Mono'] uppercase tracking-tight text-3xl md:text-4xl mb-6">{t(project.titleKey)}</h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-[220px] shrink-0 overflow-hidden bg-gray-100 aspect-[4/3]">
              <img src={project.cover} alt={t(project.titleKey)} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-2 flex-wrap">
                {project.tagKeys.map((tagKey) => (
                  <span key={tagKey} className="rounded-full border border-black px-3 py-1 font-['Space_Mono'] text-[10px] uppercase tracking-wider">{t(tagKey)}</span>
                ))}
              </div>
              <p className="font-['Space_Mono'] text-[12px] leading-relaxed text-gray-600 whitespace-pre-line">
                {t(project.descKey)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Gallery ─────────────────────────────────────────────── */}
        {/* When a project has extraTextKey, its last photo slot becomes a
            text panel instead — for case studies that need more room to
            explain than a caption allows. wideSlots renders full-width with
            object-contain (not cover) so dense screenshots/infographics
            don't get cropped. stackedColumns renders a custom two-column
            block (each column a stack of images/text at natural height)
            in place of the slots it consumes — for screenshots of very
            different lengths that need a text panel to balance them out. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {project.gallery.slice(1).map((img, i, arr) => {
            const isTextSlot = !!project.extraTextKey && i === arr.length - 1;
            const isWide = (project.wideSlots ?? [0]).includes(i);
            const sc = project.stackedColumns;

            if (sc) {
              const consumed = [...sc.left, ...sc.right].filter((v): v is number => v !== 'text');
              if (consumed.includes(i)) {
                if (i !== Math.min(...consumed)) return null; // whole block rendered once, at the first consumed index
                const renderItem = (item: number | 'text', key: string) =>
                  item === 'text' ? (
                    <div key={key} className="border border-black p-6 flex items-center">
                      <p className="font-['Space_Mono'] text-[11px] leading-relaxed text-gray-700 whitespace-pre-line">
                        {t(sc.textKey!)}
                      </p>
                    </div>
                  ) : (
                    <div key={key} className="overflow-hidden bg-gray-100">
                      <img src={arr[item]} alt={`${t(project.titleKey)} ${item + 2}`} className="w-full h-auto block" loading="lazy" decoding="async" />
                    </div>
                  );
                return (
                  <motion.div
                    key={i}
                    custom={i + 2}
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start"
                  >
                    <div className="flex flex-col gap-4">{sc.left.map((item, idx) => renderItem(item, `l${idx}`))}</div>
                    <div className="flex flex-col gap-4">{sc.right.map((item, idx) => renderItem(item, `r${idx}`))}</div>
                  </motion.div>
                );
              }
            }

            return (
              <motion.div
                key={i}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className={`overflow-hidden ${isWide ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'} ${isTextSlot ? 'border border-black p-6 md:p-8 flex items-center' : 'bg-gray-100'}`}
              >
                {isTextSlot ? (
                  <p className="font-['Space_Mono'] text-[11px] leading-relaxed text-gray-700 whitespace-pre-line">
                    {t(project.extraTextKey!)}
                  </p>
                ) : (
                  <img src={img} alt={`${t(project.titleKey)} ${i + 2}`} className={`w-full h-full ${isWide ? 'object-contain' : 'object-cover'}`} loading="lazy" decoding="async" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA externa (opcional, ej. case study en Behance) ─────── */}
        {project.externalUrl && (
          <motion.div
            className="flex flex-col items-center gap-5 mb-16 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Space_Mono'] uppercase tracking-tight text-2xl md:text-3xl">
              {t(project.externalPromptKey!)}
            </h2>
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black px-8 py-3 font-['Space_Mono'] text-[11px] uppercase tracking-widest transition-colors duration-200 hover:bg-black hover:text-white"
            >
              {t(project.externalButtonKey!)}
            </a>
          </motion.div>
        )}

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
