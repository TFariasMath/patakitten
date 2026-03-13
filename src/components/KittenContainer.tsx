'use client';

import { useState } from 'react';
import PixelGrid from './PixelGrid';

export default function KittenContainer({ onPat, accessories }: { onPat: () => void, accessories: string[] }) {
    const [animating, setAnimating] = useState(false);
    const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

    const handleTouchKitten = (e: React.MouseEvent | React.TouchEvent) => {
        // Visual pat anim
        setAnimating(true);
        setTimeout(() => setAnimating(false), 300);

        // Create heart particle
        let clientX = 0, clientY = 0;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = (e as React.MouseEvent).clientX;
            clientY = (e as React.MouseEvent).clientY;
        }

        const newHeart = { id: Date.now(), x: clientX - 20 + Math.random() * 40, y: clientY - 40 };
        setHearts(prev => [...prev, newHeart]);

        setTimeout(() => {
            setHearts(prev => prev.filter(h => h.id !== newHeart.id));
        }, 1000);

        // Trigger external logic
        onPat();
    };

    return (
        <div className="relative cursor-pointer select-none flex flex-col items-center" onClick={handleTouchKitten}>
            <div className={`transition-all duration-300 ${animating ? 'scale-95 translate-y-2' : 'scale-100 hover:scale-105'}`}>
                <PixelGrid activeAccessories={accessories} />

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg border-2 border-pink-300 font-extrabold text-pink-600 animate-pulse text-sm whitespace-nowrap z-10 transition-transform">
                    ¡Acaríciame! 👋
                </div>
            </div>

            {hearts.map(h => (
                <span
                    key={h.id}
                    className="heart-particle fixed text-4xl z-50 drop-shadow-md"
                    style={{ left: h.x, top: h.y }}
                >
                    💖
                </span>
            ))}
        </div>
    );
}
