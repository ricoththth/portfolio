import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { TransitionProvider } from '../context/TransitionContext';

export function Layout() {
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
