import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useRef, useState, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOME_IMAGES } from '../data/images';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*';

function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number>(0);
  const iterRef = useRef(0);

  const scramble = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    iterRef.current = 0;
    const totalFrames = text.length * 3;
    const tick = () => {
      iterRef.current += 1;
      const progress = iterRef.current / totalFrames;
      const resolved = Math.floor(progress * text.length);
      setDisplay(
        text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < resolved) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );
      if (iterRef.current < totalFrames) rafRef.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [text]);

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setDisplay(text);
  }, [text]);

  return (
    <span className={className} onMouseEnter={scramble} onMouseLeave={reset} style={{ cursor: 'default', letterSpacing: 'inherit' }}>
      {display}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Home() {
  const { t } = useLanguage();

  const roles = [
    { num: '[01]', label: t('role1Label'), items: [t('role1Item1'), t('role1Item2'), t('role1Item3')] },
    { num: '[02]', label: t('role2Label'), items: [t('role2Item1'), t('role2Item2')] },
    { num: '[03]', label: t('role3Label'), items: [t('role3Item1'), t('role3Item2'), t('role3Item3')] },
    { num: '[04]', label: t('role4Label'), items: [t('role4Item1'), t('role4Item2'), t('role4Item3')] },
  ];

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1100px] mx-auto px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24">

          {/* Left — intro + roles */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className="font-['Space_Mono'] text-[42px] leading-none mb-0.5">
                <ScrambleText text={t('hi')} />
              </h1>
              <h2 className="font-['Space_Mono'] text-[42px] leading-none">
                <ScrambleText text={t('iAm')} />
              </h2>
            </motion.div>

            <div className="space-y-5 font-['Space_Mono'] text-[11px] leading-relaxed">
              {roles.map((role, i) => (
                <motion.div key={role.num} custom={i + 1} initial="hidden" animate="show" variants={fadeUp}>
                  <div className="mb-1.5 text-black">{role.num} {role.label}</div>
                  <div className="text-gray-600 space-y-0.5 ml-3">
                    {role.items.map(item => (
                      <div key={item} className="flex items-start gap-1.5">
                        <span className="mt-0.5 shrink-0">⦿</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center — photo */}
          <motion.div className="flex items-start justify-center lg:justify-start" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="w-[220px] group">
              <div className="overflow-hidden">
                <img src={HOME_IMAGES.perfil} alt="Lizeth Rico" className="w-full h-auto transition-transform duration-700 group-hover:scale-105 group-hover:grayscale" loading="eager" decoding="async" />
              </div>
              <p className="font-['Space_Mono'] text-[9px] text-gray-400 mt-2 tracking-wider uppercase">
                {t('profileCaption')}
              </p>
            </div>
          </motion.div>

          {/* Right — stats + extra */}
          <motion.div className="space-y-8 font-['Space_Mono'] text-[11px]" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div>
              <div className="mb-4 text-gray-400 uppercase tracking-widest text-[9px]">{t('notableLabel')}</div>
              <div className="space-y-4">
                {stats.map(stat => (
                  <div key={stat.value} className="group cursor-default">
                    <div className="text-2xl font-bold transition-all duration-300 group-hover:tracking-widest">{stat.value}</div>
                    <div className="text-gray-500 text-[10px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="text-gray-400 uppercase tracking-widest text-[9px]">{t('currentlyLabel')}</div>
              <div className="text-gray-700 space-y-1 text-[10px]">
                <div>{t('current1')}</div>
                <div>{t('current2')}</div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Separator */}
        <motion.div className="border-t border-black pt-5 mb-5 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.4 }}>
          <div className="font-['Space_Mono'] text-[9px] tracking-[0.4em] uppercase text-gray-400 whitespace-nowrap">
            {t('separator')}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.4 }}>
          <Link to="/work" className="group inline-flex items-center gap-3 font-['Space_Mono'] text-[11px] uppercase tracking-widest">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black group-hover:after:w-full after:transition-all after:duration-300">
              {t('viewAllWork')}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
