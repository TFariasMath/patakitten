import React from 'react';

const COLOR_MAP: Record<string, string> = {
    ' ': 'transparent',
    '0': '#000000', // Black outline & details
    '1': '#111827', // Black fur base
    '2': '#374151', // Dark grey fur shading
    '3': '#9CA3AF', // Light grey fur highlights
    '4': '#FFFFFF', // White fur & eye reflection
    '5': '#FBCFE8', // Pink ears
    '6': '#FDE047', // Yellow eyes (base)

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
    // 32x32 pixel art representation of the provided kitten design (adapted to black)
    baseCatFrame1: [
        "                        0000    ",
        "                       055550   ",
        "                      05555500  ",
        "                     025550220  ",
        "                    0225502220  ",
        "                  00222202220   ",
        "                 02222220220    ",
        "                02222222220     ",
        "               02200222220      ",
        "              02204022220       ",
        "             02220022220        ",
        "  000       02222222200         ",
        " 05550000000222222222200        ",
        " 055555555222200444002220       ",
        "  005555522220444444402220      ",
        "    00552222044004004402220     ",
        "      022220444040044440220     ",
        "     0222220444400444440220     ",
        "     0222204444444444440220     ",
        "     022220444400000004020      ",
        "    022220444440     0400       ",
        "   022222044440      00         ",
        "  0222220444440                 ",
        "  02222044444440                ",
        " 0222220444444440      00       ",
        " 02222204404440440    0220      ",
        "022222044044404444000022220     ",
        "02222204044404444422222220      ",
        " 022220404440444422222200       ",
        " 0022040444044442220000         ",
        "   0000000000000000             ",
        "                                ",
    ],
    baseCatFrame2: [
        "                        0000    ",
        "                       055550   ",
        "                      05555500  ",
        "                     025550220  ",
        "                    0225502220  ",
        "                  00222202220   ",
        "                 02222220220    ",
        "                02222222220     ",
        "               02200222220      ",
        "              02204022220       ",
        "             02220022220        ",
        "  000       02222222200         ",
        " 05550000000222222222200        ",
        " 055555555222200004002220       ",
        "  005555522220000000402220      ",
        "    00552222004004004402220     ",
        "      022220044400004440220     ",
        "     0222220444400004440220     ",
        "     0222204444444444440220     ",
        "     022220444400000004020      ",
        "    022220444440     0400       ",
        "   022222044440      00         ",
        "  0222220444440                 ",
        "  02222044444440                ",
        " 0222220444444440      00       ",
        " 02222204404440440    0220      ",
        "022222044044404444000022220     ",
        "02222204044404444422222220      ",
        " 022220404440444422222200       ",
        " 0022040444044442220000         ",
        "   0000000000000000             ",
        "                                ",
    ],
    hat: [
        "                   HHHH         ",
        "                  HHHHHH        ",
        "                 HHHHHHHH       ",
        "                 HHHHHHHH       ",
        "                 hhhhhhhh       ",
        "               HHHHHHHHHHHH     ",
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
        "                                ",
        "                                ",
        "                                ",
    ],
    crown: [
        "                 C  C  C        ",
        "                CCCCCCCCC       ",
        "                CCcCCcCCc       ",
        "                CCCCCCCCC       ",
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
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
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
        "                000   000       ",
        "               0GGG000GGG0      ",
        "              0Gg0000G000G0     ",
        "               0GGG0 0GGG0      ",
        "                000   000       ",
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
        "                    00000       ",
        "                   0B0b0B0      ",
        "                   0BBbBB0      ",
        "                    00000       ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
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
        "                  0000000       ",
        "                 0NNNNNNN0      ",
        "                   0n0          ",
        "                   000          ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
        "                                ",
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
