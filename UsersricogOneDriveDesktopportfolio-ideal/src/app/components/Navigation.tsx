import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const links = [
    { to: '/work',  label: t('work') },
    { to: '/play',  label: t('play') },
    { to: '/about', label: t('about') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-['Space_Mono'] font-bold text-base uppercase tracking-tight group">
            <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black group-hover:after:w-full after:transition-all after:duration-300">
              LIZETH RICO
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-['Space_Mono'] text-sm relative group ${isActive(to) ? 'font-bold' : 'font-normal'}`}
              >
                <span className="relative">
                  {label}
                  {isActive(to) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-black"
                    />
                  )}
                </span>
              </Link>
            ))}

            <a href="#resume" className="font-['Space_Mono'] text-sm font-normal relative group">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black group-hover:after:w-full after:transition-all after:duration-300">
                {t('resume')}
              </span>
            </a>

            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="font-['Space_Mono'] text-sm text-gray-400 hover:text-black transition-colors duration-200"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
