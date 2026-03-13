import React from 'react';

const COLOR_MAP: Record<string, string> = {
    ' ': 'transparent',
    '0': '#1a1a1a', // Black outline
    '1': '#2d3748', // Black base fur
    '2': '#4a5568', // Lighter fur shading
    '3': '#ffffff', // White
    '4': '#fbbf24', // Yellow eyes (base)
    '5': '#f472b6', // Pink (ears, nose, paw pads)
    '6': '#ec4899', // Darker pink
    // Hat
    'H': '#8b5cf6', // purple hat
    'h': '#c4b5fd', // light purple hat band
    // Glasses
    'G': '#111827', // dark glasses frame/lens
    'g': '#f3f4f6', // glasses reflection
    // Scarf
    'S': '#ef4444', // red scarf
    's': '#fca5a5', // light red
    // Crown
    'C': '#fbbf24', // gold
    'c': '#fef3c7', // light gold
    'E': '#10b981', // emerald
    // Wings
    'W': '#e5e7eb', // Wing base
    'w': '#d1d5db', // Wing shading
    // Backpack
    'B': '#3b82f6', // blue backpack
    'b': '#93c5fd', // backpack highlight
    // Bowtie
    'X': '#ec4899', // bow color
    'x': '#be185d',
};

const EMPTY_LINE = "                                ";

export const PIXEL_LAYERS = {
    idle1: [
        EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE,
        "      000             000       ",
        "     05550           05550      ",
        "    01555500000000000555510     ",
        "    01155111111111111155110     ",
        "    01111111111111111111110     ",
        "   0111111111111111111111110    ",
        "   0111111111111111111111110    ",
        "   0111000111111111000111110    ",
        "   0110444011111110444011110    ",
        "   0110344011111110344011110    ",
        "   0111000111001111000111110    ",
        "   0111111110550111111111110    ",
        "   0111111110330111111111110    ",
        "    01111111100111111111110     ",
        "     011111111111111111110      ",
        "     011111111111111111110      ",
        "    01111111333333111111110     ",
        "   01111113333333333111111100   ",
        "   011111133333333331111111110  ",
        "  01111111333333333311111111110 ",
        "  0111111113333333311111111110  ",
        "  011111111111111111111111100   ",
        " 01110001111111111111110001110  ",
        "0111033301111111111111033301110 ",
        "0110333330111111111110333330110 ",
        " 00033333000000000000033333000  ",
        "   000000            000000     "
    ],
    idle2: [
        EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE,
        "      000             000       ",
        "     05550           05550      ",
        "    01555500000000000555510     ",
        "    01155111111111111155110     ",
        "    01111111111111111111110     ",
        "   0111111111111111111111110    ",
        "   0111111111111111111111110    ",
        "   0111000111111111000111110    ",
        "   0110444011111110444011110    ",
        "   0110344011111110344011110    ",
        "   0111000111001111000111110    ",
        "   0111111110550111111111110    ",
        "   0111111110011111111111110    ",
        "    01111111103301111111110     ",
        "     011111111111111111110  0   ",
        "     011111113333331111110 010  ",
        "    01111113333333333111110110  ",
        "   011111133333333331111111110  ",
        "   01111113333333333311111110   ",
        "  01111111133333333111111110    ",
        "  0111111111111111111111110     ",
        "  011111111111111111111110      ",
        " 01110001111111111111110001110  ",
        "0111033301111111111111033301110 ",
        "0110333330111111111110333330110 ",
        " 00033333000000000000033333000  ",
        "   000000            000000     "
    ],
    blink: [
        EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE,
        "      000             000       ",
        "     05550           05550      ",
        "    01555500000000000555510     ",
        "    01155111111111111155110     ",
        "    01111111111111111111110     ",
        "   0111111111111111111111110    ",
        "   0111111111111111111111110    ",
        "   0111111111111111111111110    ",
        "   0111000111111111000111110    ",
        "   0111111111111111111111110    ",
        "   0111111111001111111111110    ",
        "   0111111110550111111111110    ",
        "   0111111110330111111111110    ",
        "    01111111100111111111110     ",
        "     011111111111111111110      ",
        "     011111111111111111110      ",
        "    01111111333333111111110     ",
        "   01111113333333333111111100   ",
        "   011111133333333331111111110  ",
        "  01111111333333333311111111110 ",
        "  0111111113333333311111111110  ",
        "  011111111111111111111111100   ",
        " 01110001111111111111110001110  ",
        "0111033301111111111111033301110 ",
        "0110333330111111111110333330110 ",
        " 00033333000000000000033333000  ",
        "   000000            000000     "
    ],
    hat: [
        "            0000000             ",
        "           0HHHHHHH0            ",
        "           0HHHHHHH0            ",
        "           0hhhhhhh0            ",
        "         000HHHHHHH000          ",
        "         0HHHHHHHHHHH0          ",
        "         0000000000000          ",
        ...Array(25).fill(EMPTY_LINE)
    ],
    crown: [
        EMPTY_LINE,
        "          0  0  0               ",
        "         0C00C00C0              ",
        "         0CC0C0CC0              ",
        "         0CE0c0EC0              ",
        "         0CCCCCCC0              ",
        "         000000000              ",
        ...Array(24).fill(EMPTY_LINE)
    ],
    glasses: [
        ...Array(12).fill(EMPTY_LINE),
        "       00000       00000        ",
        "     00GGGGG0000000GGGGG00      ",
        "    0gGGGGGGG0    0gGGGGGGG0    ",
        "    0GGGGGGGG0    0GGGGGGGG0    ",
        "     00000000      00000000     ",
        ...Array(15).fill(EMPTY_LINE)
    ],
    scarf: [
        ...Array(19).fill(EMPTY_LINE),
        "        000000000000000         ",
        "       0SsSsSsSsSsSsSsS0        ",
        "       0SSSSSSSSSSSSSSS0        ",
        "       00000000000S00000        ",
        "                  0S0           ",
        "                  000           ",
        ...Array(7).fill(EMPTY_LINE)
    ],
    bowtie: [
        ...Array(19).fill(EMPTY_LINE),
        "           000   000            ",
        "          0XXX000XXX0           ",
        "          0XXXxXxXXX0           ",
        "          0XXX000XXX0           ",
        "           000   000            ",
        ...Array(8).fill(EMPTY_LINE)
    ],
    collar: [
        ...Array(19).fill(EMPTY_LINE),
        "         00000000000000         ",
        "         0EEEEEEEEEEEE0         ",
        "             00000              ",
        "            0CCCCC0             ",
        "             00000              ",
        ...Array(8).fill(EMPTY_LINE)
    ],
    wings: [
        ...Array(11).fill(EMPTY_LINE),
        "  0000                   0000   ",
        " 0WWWW0                 0WWWW0  ",
        " 0WwwW0                 0wwWW0  ",
        " 0WwwW0                 0wwWW0  ",
        "  0wW0                   0Ww0   ",
        "  000                     000   ",
        ...Array(15).fill(EMPTY_LINE)
    ],
    backpack: [
        ...Array(11).fill(EMPTY_LINE),
        " 00000                   00000  ",
        "0BBbBB0                 0bBBB0 ",
        "0BBbBB0                 0bBBB0 ",
        "0BBbBB0                 0bBBB0 ",
        "0BBBBB0                 0BBBBB0 ",
        " 00000                   00000  ",
        ...Array(15).fill(EMPTY_LINE)
    ]
};

const Z_INDEX: Record<string, string[]> = {
    background: ['wings', 'backpack'],
    foreground: ['scarf', 'collar', 'bowtie', 'glasses', 'hat', 'crown']
};

export default function PixelGrid({ activeAccessories, animFrame }: { activeAccessories: string[], animFrame: string }) {
    const width = 32;
    const height = 32;
    const finalPixels = Array(height).fill(0).map(() => Array(width).fill(' '));

    const applyLayer = (layerData: string[]) => {
        if (!layerData) return;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const char = layerData[y]?.[x] || ' ';
                if (char !== ' ') {
                    finalPixels[y][x] = char;
                }
            }
        }
    };

    // 1. Draw Background Accessories (Wings, Backpack)
    Z_INDEX.background.forEach(acc => {
        if (activeAccessories.includes(acc)) applyLayer(PIXEL_LAYERS[acc as keyof typeof PIXEL_LAYERS]);
    });

    // 2. Draw Cat Base Frame
    applyLayer(PIXEL_LAYERS[animFrame as keyof typeof PIXEL_LAYERS] || PIXEL_LAYERS.idle1);

    // 3. Draw Foreground Accessories (Hats, Scarf, etc.)
    Z_INDEX.foreground.forEach(acc => {
        if (activeAccessories.includes(acc)) applyLayer(PIXEL_LAYERS[acc as keyof typeof PIXEL_LAYERS]);
    });

    return (
        <div
            className="grid gap-0"
            style={{
                gridTemplateColumns: `repeat(${width}, 1fr)`,
                gridTemplateRows: `repeat(${height}, 1fr)`,
                width: '280px',
                height: '280px',
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
