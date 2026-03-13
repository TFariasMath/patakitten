import React from 'react';

const COLOR_MAP: Record<string, string> = {
    ' ': 'transparent',
    '1': '#111827', // Black fur
    '2': '#FDE047', // Yellow eye
    '0': '#000000', // Black pupil
    '3': '#F472B6', // Pink nose
    '4': '#6B21A8', // Purple hat
    '5': '#FBBF24', // Gold hat band
    '6': '#EF4444', // Red glasses
    '7': '#3B82F6', // Blue bowtie
    '8': '#F59E0B', // Gold crown
    '9': '#10B981', // Emerald crown gem
    'A': '#F87171', // Red bowtie center
    'B': '#FFFFFF', // Glasses reflection
};

// 16x16 grid for Pixel Art
export const PIXEL_LAYERS = {
    baseCat: [
        "                ",
        "  11        11  ",
        "  11        11  ",
        " 1111      1111 ",
        " 11111111111111 ",
        "1111111111111111",
        "1122211111122211",
        "1120211111120211",
        "1122211111122211",
        "1111111331111111",
        " 11111333311111 ",
        "  111111111111  ",
        "   1111111111   ",
        "    11111111    ",
        "                ",
        "                ",
    ],
    hat: [
        "      4444      ",
        "     444444     ",
        "     444444     ",
        "     555555     ",
        "   4444444444   ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
    ],
    glasses: [
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        " 66666    66666 ",
        "6B00006666B00006",
        " 66666    66666 ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
    ],
    bowtie: [
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "    77    77    ",
        "    777AA777    ",
        "    77    77    ",
        "                ",
    ],
    crown: [
        "      8  8      ",
        "     888888     ",
        "     898898     ",
        "     888888     ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
    ]
};

export default function PixelGrid({ activeAccessories }: { activeAccessories: string[] }) {
    // Combine layers (Base Cat + Active Accessories) in order
    const layersToRender = ['baseCat', ...activeAccessories.filter(a => Object.keys(PIXEL_LAYERS).includes(a))];

    const width = 16;
    const height = 16;

    // Create an empty composite 16x16 image
    const finalPixels = Array(height).fill(0).map(() => Array(width).fill(' '));

    layersToRender.forEach(layerName => {
        const layerData = PIXEL_LAYERS[layerName as keyof typeof PIXEL_LAYERS];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const char = layerData[y]?.[x] || ' ';
                if (char !== ' ') {
                    finalPixels[y][x] = char; // Overlay pixel
                }
            }
        }
    });

    return (
        <div
            className="grid gap-0"
            style={{
                gridTemplateColumns: `repeat(${width}, 1fr)`,
                width: '256px',
                height: '256px',
                backgroundColor: '#FFF1F2',
                borderRadius: '24px',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
                border: '6px solid #FBCFE8',
                margin: '0 auto'
            }}
        >
            {finalPixels.map((row, y) =>
                row.map((colorKey, x) => (
                    <div
                        key={`${x}-${y}`}
                        style={{
                            backgroundColor: COLOR_MAP[colorKey],
                            width: '100%',
                            height: '100%'
                        }}
                    />
                ))
            )}
        </div>
    );
}
