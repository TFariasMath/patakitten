import React from 'react';

const ACCESSORY_CONFIG: Record<string, { src: string; style: React.CSSProperties }> = {
    hat: {
        src: '/acc_hat.png',
        style: { top: '-30%', left: '10%', width: '55%' }
    },
    crown: {
        src: '/acc_crown.png',
        style: { top: '-25%', left: '15%', width: '45%' }
    },
    glasses: {
        src: '/acc_glasses.png',
        style: { top: '25%', left: '15%', width: '55%' }
    },
    bowtie: {
        src: '/acc_bowtie.png',
        style: { top: '60%', left: '25%', width: '40%' }
    },
    collar: {
        src: '/acc_collar.png',
        style: { top: '62%', left: '15%', width: '55%' }
    },
    scarf: {
        src: '/acc_scarf.png',
        style: { top: '55%', left: '10%', width: '60%' }
    }
};

export default function PixelGrid({ activeAccessories, isAnimating }: { activeAccessories: string[], isAnimating: boolean }) {
    return (
        <div
            className="relative overflow-visible"
            style={{
                width: '220px',
                height: '220px',
                backgroundColor: '#FFF1F2',
                borderRadius: '24px',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
                border: '6px solid #FBCFE8',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Base kitten */}
            <img
                src="/kitten.png"
                alt="Pixel art kitten"
                className={`transition-transform duration-150 ${isAnimating ? 'scale-90' : 'scale-100'}`}
                style={{
                    width: '85%',
                    height: '85%',
                    objectFit: 'contain',
                    imageRendering: 'pixelated',
                    position: 'relative',
                    zIndex: 1
                }}
                draggable={false}
            />

            {/* Accessory overlays */}
            {activeAccessories.map(acc => {
                const config = ACCESSORY_CONFIG[acc];
                if (!config) return null;
                return (
                    <img
                        key={acc}
                        src={config.src}
                        alt={acc}
                        className={`absolute pointer-events-none transition-transform duration-150 ${isAnimating ? 'scale-90' : 'scale-100'}`}
                        style={{
                            ...config.style,
                            objectFit: 'contain',
                            imageRendering: 'pixelated',
                            zIndex: 2
                        }}
                        draggable={false}
                    />
                );
            })}
        </div>
    );
}
