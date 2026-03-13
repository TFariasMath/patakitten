import React from 'react';

const COLOR_MAP: Record<string, string> = {
    ' ': 'transparent',
    '0': '#000000', // Black outline
    '1': '#2D3748', // Black fur base
    '2': '#4A5568', // Light black/grey shading
    '3': '#718096', // Highlights
    '4': '#FFFFFF', // White fur & eye reflection
    '5': '#FBCFE8', // Pink ears
    '6': '#ED8936', // Orange/Yellow eyes base
    '7': '#F6AD55', // Eye shading

    // Headwear
    'H': '#6B21A8', // Purple Hat base
    'h': '#FBBF24', // Hat band
    'C': '#F59E0B', // Crown gold
    'c': '#10B981', // Crown gem emerald

    // Eyewear
    'G': '#EF4444', // Glasses red frame
    'g': '#FFFFFF', // Glasses reflection

    // Neckwear
    'B': '#3B82F6', // Blue bowtie
    'b': '#1E3A8A', // Bowtie center
    'N': '#10B981', // Green collar
    'n': '#F59E0B', // Collar bell gold
};

export const PIXEL_LAYERS = {
    baseCatFrame1: [
        "                                ",
        "                                ",
        "                                ",
        "               0000             ",
        "              05550             ",
        "             0555500            ",
        "            015550110           ",
        "           0115501110           ",
        "         00111101110            ",
        "        01111110110             ",
        "       011111111110             ",
        " 000  01111111111110  00        ",
        "0555001111111111111100110       ",
        "05555501111110001111011110      ",
        "01555551111100401111001110      ",
        " 0155511111100001111101110      ",
        "  011111111144444111101110      ",
        "   00111111044004411101110      ",
        "     011111044040441100110      ",
        "      011104440044411000        ",
        "      001104444444410000        ",
        "    00110044444444400000        ",
        "   0111101044044040110          ",
        "  01100011044044040110          ",
        "  010   01044044040110          ",
        " 0110   01044044040110          ",
        " 011100011044044040110          ",
        "  0111111000000000000           ",
        "   000000                       ",
        "                                ",
        "                                ",
        "                                "
    ],
    baseCatFrame2: [
        "                                ",
        "                                ",
        "                                ",
        "               0000             ",
        "              05550             ",
        "             0555500            ",
        "            015550110           ",
        "           0115501110           ",
        "         00111101110            ",
        "        01111110110             ",
        "       011111111110             ",
        " 000  01111111111110  00        ",
        "0555001111111111111100110       ",
        "05555501111110001111011110      ",
        "01555551111100401111001110      ",
        " 0155511111100001111101110      ",
        "  011111111144444111101110      ",
        "   00111111000000011101110      ",
        "     011111044040441100110      ",
        "      011104440044411000        ",
        "      001104444444410000        ",
        "    00110044444444400000        ",
        "   0111101044044040110          ",
        "  01100011044044040110          ",
        "  010   01044044040110          ",
        " 0110   01044044040110          ",
        " 011100011044044040110          ",
        "  0111111000000000000           ",
        "   000000                       ",
        "                                ",
        "                                ",
        "                                "
    ],
    hat: [
        "                                ",
        "           HHHHHH               ",
        "          0HHHHHH0              ",
        "          0HHHHHH0              ",
        "          0hhhhhh0              ",
        "        000HHHHHH00             ",
        "        0HHHHHHHHHH0            ",
        "        000000000000            ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                "
    ],
    crown: [
        "                                ",
        "            0  0                ",
        "           0C00C0               ",
        "          0CC00CC0              ",
        "          0Cc00cC0              ",
        "          0CCCCCC0              ",
        "          0cccccc0              ",
        "           000000               ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                "
    ],
    glasses: [
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "             000   000          ",
        "            0GGG000GGG0         ",
        "           0Gg0000Gg0000        ",
        "            0GGG0 0GGG0         ",
        "             000   000          ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                "
    ],
    bowtie: [
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                  00   00       ",
        "                 0BB000BB0      ",
        "                 0BBbBbBB0      ",
        "                 0BB000BB0      ",
        "                  00   00       ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                "
    ],
    collar: [
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                 00000000       ",
        "                 0NNNNNN0       ",
        "                    00          ",
        "                   0nn0         ",
        "                    00          ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                "
    ]
};

export default function PixelGrid({ activeAccessories, isAnimating }: { activeAccessories: string[], isAnimating: boolean }) {
    const catLayer = isAnimating ? 'baseCatFrame2' : 'baseCatFrame1';
    const layersToRender = [catLayer, ...activeAccessories.filter(a => Object.keys(PIXEL_LAYERS).includes(a))];

    const width = 32;
    const height = 32;

    const finalPixels = Array(height).fill(0).map(() => Array(width).fill(' '));

    layersToRender.forEach(layerName => {
        const layerData = PIXEL_LAYERS[layerName as keyof typeof PIXEL_LAYERS];
        // Safety check just in case
        if (!layerData) return;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const char = layerData[y]?.[x] || ' ';
                if (char !== ' ') {
                    finalPixels[y][x] = char;
                }
            }
        }
    });

    return (
        <div
            className="grid gap-0 overflow-hidden"
            style={{
                gridTemplateColumns: `repeat(${width}, 1fr)`,
                gridTemplateRows: `repeat(${height}, 1fr)`, // Absolutely critical to prevent vertical stretching
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
                            backgroundColor: COLOR_MAP[colorKey] || 'transparent',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                ))
            )}
        </div>
    );
}
