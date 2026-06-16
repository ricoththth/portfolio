import { useRef, useState, useCallback } from 'react';

interface DraggablePhotoProps {
  id: number;
  img: string;
  title: string;
  x: number;
  y: number;
  rotation: number;
  width: number;
  onMove: (id: number, x: number, y: number) => void;
  onHoverChange: (title: string | null) => void;
  onDragStart: (id: number) => void;
}

export function DraggablePhoto({
  id, img, title, x, y, rotation, width,
  onMove, onHoverChange, onDragStart,
}: DraggablePhotoProps) {
  const [isDragging, setIsDragging] = useState(false);
  const startRef = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    onDragStart(id);
    startRef.current = { px: e.clientX, py: e.clientY, ox: x, oy: y };
  }, [id, x, y, onDragStart]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!startRef.current) return;
    const dx = e.clientX - startRef.current.px;
    const dy = e.clientY - startRef.current.py;
    onMove(id, Math.max(0, startRef.current.ox + dx), Math.max(0, startRef.current.oy + dy));
  }, [id, onMove]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    startRef.current = null;
  }, []);

  return (
    <div
      className="absolute select-none"
      style={{
        left: x,
        top: y,
        width,
        transform: `rotate(${rotation}deg)`,
        opacity: isDragging ? 0.75 : 1,
        zIndex: isDragging ? 1000 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => !isDragging && onHoverChange(title)}
      onMouseLeave={() => onHoverChange(null)}
    >
      <div className="bg-white p-3 shadow-xl" style={{ transition: isDragging ? 'none' : 'box-shadow 0.2s' }}>
        <img src={img} alt={title} className="w-full h-auto block pointer-events-none" />
        {/* Pin */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-red-700 shadow-md" />
      </div>
    </div>
  );
}
