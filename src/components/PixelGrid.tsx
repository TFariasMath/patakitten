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
    // Bowtie
    'X': '#3b82f6', // bow color
    'x': '#93c5fd',
    // Collar
    'L': '#10b981', // collar base
    'l': '#fbbf24', // collar bell
};

const EMPTY_LINE = "                                ";

export const PIXEL_LAYERS = {
    idle1: [
        EMPTY_LINE, EMPTY_LINE,
        "        0000        0000        ",
        "       055550      055550       ",
        "      05555550000005555550      ",
        "      01555511111111555510      ",
        "     0111111111111111111110     ",
        "     0111111111111111111110     ",
        "    011100011111111110001110    ",
        "    011044401110011104440110    ",
        "    011034401105501103440110    ",
        "    011100011100001110001110    ",
        "     0111111111111111111110     ",
        "     0111111111111111111110     ",
        "      00111111111111111100      ",
        "        0011111111111100        ",
        "       01111111111111110        ",
        "      0111111111111111110       ",
        "     011111111333311111110      ",
        "    01111110033333300111110     ",
        "    01111003333333333001110     ",
        "   0111103333333333333301110    ",
        "   0111103003333333300301110    ",
        "   0111030110333333011030110    ",
        "  011103301110333301110330110   ",
        "  0110333011110000111103330110  ",
        "  0100000111111111111110000010  ",
        "   00   0000000000000000   00   ",
        EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE
    ],
    idle2: [
        EMPTY_LINE, EMPTY_LINE,
        "        0000        0000        ",
        "       055550      055550       ",
        "      05555550000005555550      ",
        "      01555511111111555510      ",
        "     0111111111111111111110     ",
        "     0111111111111111111110     ",
        "    011100011111111110001110    ",
        "    011044401110011104440110    ",
        "    011034401105501103440110    ",
        "    011100011100001110001110    ",
        "     0111111111111111111110     ",
        "     0111111111111111111110     ",
        "      00111111111111111100      ",
        "        0011111111111100        ",
        "       01111111111111110        ",
        "      0111111111111111110       ",
        "     011111111333311111110      ",
        "    01111110033333300111110     ",
        "    01111003333333333001110     ",
        "   0111103333333333333301110  0 ",
        "   0111103003333333300301110 010",
        "   0111030110333333011030110 010",
        "  011103301110333301110330110010",
        "  01103330111100001111033301100 ",
        "  0100000111111111111110000010  ",
        "   00   0000000000000000   00   ",
        EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE
    ],
    blink: [
        EMPTY_LINE, EMPTY_LINE,
        "        0000        0000        ",
        "       055550      055550       ",
        "      05555550000005555550      ",
        "      01555511111111555510      ",
        "     0111111111111111111110     ",
        "     0111111111111111111110     ",
        "    011111111111111111111110    ",
        "    011100011110011110001110    ",
        "    011111111105501111111110    ",
        "    011111111100001111111110    ",
        "     0111111111111111111110     ",
        "     0111111111111111111110     ",
        "      00111111111111111100      ",
        "        0011111111111100        ",
        "       01111111111111110        ",
        "      0111111111111111110       ",
        "     011111111333311111110      ",
        "    01111110033333300111110     ",
        "    01111003333333333001110     ",
        "   0111103333333333333301110    ",
        "   0111103003333333300301110    ",
        "   0111030110333333011030110    ",
        "  011103301110333301110330110   ",
        "  0110333011110000111103330110  ",
        "  0100000111111111111110000010  ",
        "   00   0000000000000000   00   ",
        EMPTY_LINE, EMPTY_LINE, EMPTY_LINE, EMPTY_LINE
    ],
    hat: [
        EMPTY_LINE,
        "            000000              ",
        "           0HHHHHH0             ",
        "           0HHHHHH0             ",
        "           0hhhhhh0             ",
        "         000hhhhhh000           ",
        "         0HHHHHHHHHH0           ",
        "         000000000000           ",
        ...Array(24).fill(EMPTY_LINE)
    ],
    crown: [
        EMPTY_LINE, EMPTY_LINE,
        "           0  0  0              ",
        "          0C00C00C0             ",
        "          0CC0C0CC0             ",
        "          0CE0c0EC0             ",
        "          0CCCCCCC0             ",
        "          000000000             ",
        ...Array(24).fill(EMPTY_LINE)
    ],
    glasses: [
        ...Array(8).fill(EMPTY_LINE),
        "    00000           00000       ",
        "  00GGGGG00000000000GGGGG00     ",
        " 0gGGGGGGG0       0gGGGGGGG0    ",
        " 0GGGGGGGG0       0GGGGGGGG0    ",
        "  00000000         00000000     ",
        ...Array(19).fill(EMPTY_LINE)
    ],
    scarf: [
        ...Array(13).fill(EMPTY_LINE),
        "       000000000000000000       ",
        "      0SsSsSsSsSsSsSsSsSs0      ",
        "      0SSSSSSSSSSSSSSSSSS0      ",
        "      000000000000000S0000      ",
        "                     0S0        ",
        "                     000        ",
        ...Array(13).fill(EMPTY_LINE)
    ],
    bowtie: [
        ...Array(14).fill(EMPTY_LINE),
        "             00 00              ",
        "            0XX0XX0             ",
        "            0XxXxX0             ",
        "            0XX0XX0             ",
        "             00 00              ",
        ...Array(13).fill(EMPTY_LINE)
    ],
    collar: [
        ...Array(14).fill(EMPTY_LINE),
        "         00000000000000         ",
        "         0LLLLLLLLLLLL0         ",
        "             00000              ",
        "            0ll0ll0             ",
        "            0lllll0             ",
        "             00000              ",
        ...Array(12).fill(EMPTY_LINE)
    ]
};

const Z_INDEX: Record<string, string[]> = {
    background: [],
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

    // 1. Draw Background Accessories
    Z_INDEX.background.forEach(acc => {
        if (activeAccessories.includes(acc)) applyLayer(PIXEL_LAYERS[acc as keyof typeof PIXEL_LAYERS]);
    });

    // 2. Draw Cat Base Frame
    applyLayer(PIXEL_LAYERS[animFrame as keyof typeof PIXEL_LAYERS] || PIXEL_LAYERS.idle1);

    // 3. Draw Foreground Accessories
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
