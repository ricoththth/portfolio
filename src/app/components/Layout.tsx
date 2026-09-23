import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { TransitionProvider } from '../context/TransitionContext';

// Keep in sync with the <title> in index.html.
const SITE_TITLE = 'RICOTH';
const AWAY_TITLE = 'crea y juega <3';

export function Layout() {
  // Playful tab title: when someone tabs away from the site, the
  // browser tab says "crea y juega <3" instead of just sitting idle.
  useEffect(() => {
    const handleVisibility = () => {
      document.title = document.hidden ? AWAY_TITLE : SITE_TITLE;
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <TransitionProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </TransitionProvider>
  );
}
