import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-black mt-16">
      <div className="max-w-[1200px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between font-['Space_Mono'] text-[10px] uppercase">
          <div>{t('footerCopy')}</div>
          <div className="flex gap-6">
            <a href="mailto:hello@lizethrico.com" className="hover:underline">{t('email')}</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">{t('twitter')}</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">{t('linkedin')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
