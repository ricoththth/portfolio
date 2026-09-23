import { useRef, useState, useCallback } from 'react';

interface DraggablePhotoProps {
  id: number;
  img: string;
  title: string;
  x: number;
  y: number;
  rotation: number;
  width: number;
  zIndex: number;
  onMove: (id: number, x: number, y: number) => void;
  onHoverChange: (title: string | null) => void;
  onDragStart: (id: number) => void;
}

export function DraggablePhoto({
  id, img, title, x, y, rotation, width, zIndex,
  onMove, onHoverChange, onDragStart,
}: DraggablePhotoProps) {
  const [isDragging, setIsDragging] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);
  const posRef = useRef({ x, y });

  // Only trust the prop position while it isn't being actively dragged —
  // once a drag starts, posRef becomes the source of truth until pointer up.
  if (!startRef.current) {
    posRef.current = { x, y };
  }

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    onDragStart(id);
    startRef.current = { px: e.clientX, py: e.clientY, ox: posRef.current.x, oy: posRef.current.y };
  }, [id, onDragStart]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!startRef.current || !elRef.current) return;
    const dx = e.clientX - startRef.current.px;
    const dy = e.clientY - startRef.current.py;
    const nx = Math.max(0, startRef.current.ox + dx);
    const ny = Math.max(0, startRef.current.oy + dy);
    posRef.current = { x: nx, y: ny };
    // Move the element directly during the drag instead of round-tripping
    // through parent state — keeps motion smooth and avoids re-rendering
    // every other photo on each pointer move.
    elRef.current.style.left = `${nx}px`;
    elRef.current.style.top = `${ny}px`;
  }, []);

  const commitAndEnd = useCallback(() => {
    setIsDragging(false);
    startRef.current = null;
    onMove(id, posRef.current.x, posRef.current.y);
  }, [id, onMove]);

  return (
    <div
      ref={elRef}
      className="absolute select-none touch-none"
      style={{
        left: x,
        top: y,
        width,
        transform: `rotate(${rotation}deg)`,
        opacity: isDragging ? 0.85 : 1,
        zIndex: isDragging ? 2000 : zIndex,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={commitAndEnd}
      onPointerCancel={commitAndEnd}
      onMouseEnter={() => !isDragging && onHoverChange(title)}
      onMouseLeave={() => onHoverChange(null)}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-auto block pointer-events-none select-none"
        draggable={false}
      />
      {/* Pin */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-red-700 shadow-md" />
    </div>
  );
}
