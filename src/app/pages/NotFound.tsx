import { useTransition } from '../context/TransitionContext';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { navigateWithStars } = useTransition();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="font-['Space_Mono'] uppercase tracking-tight text-2xl mb-4">404</h1>
        <button
          onClick={(e) => navigateWithStars('/work', { x: e.clientX, y: e.clientY })}
          className="font-['Space_Mono'] text-[11px] uppercase tracking-wider underline underline-offset-4"
        >
          {t('backToWork')}
        </button>
      </div>
    </div>
  );
}
