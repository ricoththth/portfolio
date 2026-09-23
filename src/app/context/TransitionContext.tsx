import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

interface Origin {
  x: number;
  y: number;
}

interface TransitionContextType {
  /** Plays a star-burst animation from the click origin, then navigates. */
  navigateWithStars: (path: string, origin: Origin) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

const STAR_COUNT = 70;

// Pre-computed, deterministic star params (angle / distance / size / delay)
// so the burst looks organic without relying on Math.random() re-renders.
// Distance and size each cycle through their own odd modulus so the
// pairing never lines up into visible rings — dense, varied, and still
// perfectly repeatable frame to frame.
const STARS = Array.from({ length: STAR_COUNT }, (_, i) => {
  const jitter = ((i * 29) % 17) / 17 - 0.5; // -0.5..0.5, breaks up the even spacing
  const angle = (i / STAR_COUNT) * Math.PI * 2 + jitter * 0.5;
  const distance = 22 + ((i * 41) % 78); // 22–100 vmax
  const size = 6 + ((i * 23) % 11) * 4; // 6–46px, lots of size tiers
  const delay = (i % 17) * 0.012;
  const spin = i % 2 === 0 ? 1 : -1;
  return { angle, distance, size, delay, spin };
});

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');
  const [origin, setOrigin] = useState<Origin>({ x: 0, y: 0 });
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  const navigateWithStars = useCallback((path: string, o: Origin) => {
    setOrigin(o);
    setPendingPath(path);
    setPhase('covering');
  }, []);

  const handleCoverComplete = useCallback(() => {
    if (pendingPath) {
      navigate(pendingPath);
      window.scrollTo(0, 0);
    }
    setPhase('revealing');
  }, [navigate, pendingPath]);

  const handleRevealComplete = useCallback(() => {
    setPhase('idle');
    setPendingPath(null);
  }, []);

  const value = useMemo(() => ({ navigateWithStars }), [navigateWithStars]);

  return (
    <TransitionContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {phase !== 'idle' && (
          <div className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">
            {/* Ink wash expanding from / retreating to the click point */}
            <motion.div
              className="absolute rounded-full bg-black"
              style={{ left: origin.x, top: origin.y, width: 1, height: 1, marginLeft: -0.5, marginTop: -0.5 }}
              initial={{ scale: 0 }}
              animate={{ scale: phase === 'covering' ? 3000 : 0 }}
              transition={{ duration: phase === 'covering' ? 0.55 : 0.5, ease: phase === 'covering' ? [0.76, 0, 0.24, 1] : [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => {
                if (phase === 'covering') handleCoverComplete();
                if (phase === 'revealing') handleRevealComplete();
              }}
            />

            {/* Star burst radiating from the click point */}
            {STARS.map((s, i) => {
              const travel = phase === 'covering' ? s.distance : s.distance * 1.6;
              const tx = Math.cos(s.angle) * travel;
              const ty = Math.sin(s.angle) * travel;
              return (
                <motion.div
                  key={i}
                  className="absolute text-white"
                  style={{ left: origin.x, top: origin.y }}
                  initial={phase === 'covering' ? { x: '0vmax', y: '0vmax', scale: 0, opacity: 0, rotate: 0 } : { x: `${tx}vmax`, y: `${ty}vmax`, scale: 1, opacity: 1, rotate: s.spin * 140 }}
                  animate={
                    phase === 'covering'
                      ? { x: `${tx}vmax`, y: `${ty}vmax`, scale: 1, opacity: 1, rotate: s.spin * 140 }
                      : { x: '0vmax', y: '0vmax', scale: 0, opacity: 0, rotate: 0 }
                  }
                  transition={{ duration: phase === 'covering' ? 0.5 : 0.45, delay: phase === 'covering' ? s.delay : (STAR_COUNT - i) * 0.008, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Star size={s.size} fill="currentColor" strokeWidth={0} style={{ transform: 'translate(-50%, -50%)' }} />
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) throw new Error('useTransition must be used within a TransitionProvider');
  return context;
}
