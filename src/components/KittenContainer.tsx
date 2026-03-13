'use client';

import { useState, useEffect } from 'react';
import PixelGrid from './PixelGrid';

export default function KittenContainer({ onPat, accessories }: { onPat: () => void, accessories: string[] }) {
    const [animFrame, setAnimFrame] = useState('idle1');
    const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
    const [isJumping, setIsJumping] = useState(false);

    // Loop animation background loop
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const playLoop = () => {
            const rand = Math.random();
            if (rand < 0.2) {
                // Blink
                setAnimFrame('blink');
                timeout = setTimeout(() => { setAnimFrame('idle1'); playLoop(); }, 150);
            } else if (rand < 0.5) {
                // Tail wag / breathe
                setAnimFrame('idle2');
                timeout = setTimeout(() => { setAnimFrame('idle1'); playLoop(); }, 400);
            } else {
                // Stand still
                setAnimFrame('idle1');
                timeout = setTimeout(() => { playLoop(); }, 1500);
            }
        };
        playLoop();
        return () => clearTimeout(timeout);
    }, []);

    const handleTouchKitten = (e: React.MouseEvent | React.TouchEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();

        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 300);

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
            <div className={`transition-transform duration-200 ${isJumping ? '-translate-y-8 scale-105' : 'translate-y-0 scale-100 hover:scale-105'}`}>
                <PixelGrid activeAccessories={accessories} animFrame={animFrame} />

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
