import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_DECK } from '../data/images';

const deckRots = [9, -6, 14, -11, 4, -16, 7];

function PhotoDeck({ images, shuffleLabel }: { images: { img: string }[]; shuffleLabel: string }) {
  const [stack, setStack] = useState(images.map((_, i) => i));

  const cycle = () => setStack(prev => {
    const next = [...prev];
    const top = next.pop()!;
    next.unshift(top);
    return next;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative cursor-pointer select-none" style={{ width: 220, height: 285 }} onClick={cycle}>
        {stack.map((imgIdx, pos) => {
          const isTop = pos === stack.length - 1;
          const depth = pos - (stack.length - 1);
          return (
            <motion.div
              key={imgIdx}
              className="absolute inset-0 bg-white shadow-lg"
              style={{ padding: 10, paddingBottom: 38, zIndex: pos, transformOrigin: 'center bottom' }}
              animate={{ rotate: deckRots[imgIdx % deckRots.length], x: depth * 2, y: depth * 3, scale: isTop ? 1 : 0.96 + pos * 0.005 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              whileHover={isTop ? { y: depth * 3 - 10, scale: 1.03 } : {}}
            >
              <img src={images[imgIdx].img} alt="" className="w-full object-cover pointer-events-none" style={{ height: 195 }} loading="lazy" decoding="async" />
            </motion.div>
          );
        })}
      </div>
      <p className="font-['Space_Mono'] text-[9px] text-gray-300 uppercase tracking-[0.3em]">{shuffleLabel}</p>
    </div>
  );
}

function TimelineEntry({ year, title, items, delay = 0 }: { year: string; title?: string; items: string[]; delay?: number }) {
  return (
    <motion.div className="grid grid-cols-[80px_1fr] gap-4" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      <div className="font-['Space_Mono'] text-[10px] text-gray-400 pt-0.5 shrink-0">{year}</div>
      <div className="border-l border-gray-200 pl-4 pb-6">
        {title && (
          <div className="font-['Space_Mono'] text-[12px] font-bold uppercase tracking-wide mb-1.5">{title}</div>
        )}
        <div className="space-y-1 font-['Space_Mono'] text-[11px] text-gray-700">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span className="shrink-0 text-gray-300 mt-0.5">⦿</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const skills = ['Figma', 'Adobe CC', 'Premiere Pro', 'After Effects', 'Claude / AI workflows', 'Vibe coding', 'User Research', 'PRD Writing', 'Brand Strategy', 'Campaign Design', 'Web3 Products', '0→1 MVPs', 'Community Management', 'Content Production', 'Motion Design'];

export function About() {
  const { t } = useLanguage();

  const deckImages = ABOUT_DECK.map(({ img }) => ({ img }));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1000px] mx-auto px-8 py-14">

        <motion.div className="mb-12" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <div className="font-['Space_Mono'] text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-3">{t('aboutLabel')}</div>
          <h1 className="font-['Space_Mono'] uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: 1 }}>
            {t('myStory')}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-8 md:gap-16 items-start mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-['Space_Mono'] text-[12px] leading-[1.9] text-gray-800 mb-5">{t('bio1')}</p>
            <p className="font-['Space_Mono'] text-[12px] leading-[1.9] text-gray-800 mb-5">{t('bio2')}</p>
            <p className="font-['Space_Mono'] text-[11px] leading-[1.9] text-gray-500">{t('bio3')}</p>
            <p className="font-['Space_Mono'] text-[10px] text-gray-400 mt-3">{t('bio4')}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center">
            <PhotoDeck images={deckImages} shuffleLabel={t('clickToShuffle')} />
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="border-b border-gray-200 pb-3 mb-8">
            <h2 className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em]">{t('experienceLabel')}</h2>
          </div>
          <TimelineEntry year={t('yearCourse')} items={[t('expCourse_1')]} delay={0} />
          <TimelineEntry year={t('year2025')} items={[t('exp2025_1')]} delay={0.1} />
          <TimelineEntry year={t('year2324')} items={[t('exp2324_1')]} delay={0.2} />
          <TimelineEntry year={t('year2122')} items={[t('exp2122_1')]} delay={0.3} />
        </motion.div>

        {/* Skills */}
        <motion.div className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="border-b border-gray-200 pb-3 mb-6">
            <h2 className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em]">{t('skillsLabel')}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <motion.span key={skill} className="rounded-full border border-gray-300 px-3 py-1 font-['Space_Mono'] text-[10px] uppercase tracking-wider text-gray-600 cursor-default" whileHover={{ backgroundColor: '#000', color: '#fff', borderColor: '#000' }} transition={{ duration: 0.15 }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div className="border-t border-black pt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap gap-6 font-['Space_Mono'] text-[11px]">
            {[
              { label: t('contactResume'),   href: '#resume' },
              { label: t('contactLinkedin'), href: 'https://www.linkedin.com/in/lizeth-rico/' },
            ].map(({ label, href }) => (
              <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="relative group" whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black group-hover:after:h-0 after:transition-all after:duration-200">{label}</span>
                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
