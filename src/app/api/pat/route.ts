import { NextResponse } from 'next/server';
import { kv } from '@/lib/kv';

export async function GET() {
    const lastPat = await kv.get('global_last_pat_by') || 'Anónimo';
    const accessories = await kv.get('global_accessories') || [];
    const ranking = await kv.hgetall('ranking') || {};

    // Sort ranking
    const sortedRanking = Object.entries(ranking)
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .slice(0, 10);

    return NextResponse.json({ lastPat, accessories, ranking: sortedRanking });
}

export async function POST(req: Request) {
    try {
        const { name, isAnonymous, accessories } = await req.json();

        if (isAnonymous) {
            await kv.set('global_last_pat_by', 'Anónimo');
            await kv.set('global_accessories', accessories || []);
            return NextResponse.json({ success: true, message: 'Pat anónimo registrado!' });
        }

        if (!name || name.trim() === '') {
            return NextResponse.json({ success: false, error: 'Nombre inválido' }, { status: 400 });
        }

        const cleanName = name.trim();
        const now = Date.now();
        const lastTime = await kv.getCooldown(cleanName);

        // 4 hours cooldown
        const fourHours = 4 * 60 * 60 * 1000;

        if (lastTime && (now - lastTime) < fourHours) {
            const remainingMs = fourHours - (now - lastTime);
            const hours = Math.floor(remainingMs / 3600000);
            const mins = Math.floor((remainingMs % 3600000) / 60000);
            return NextResponse.json({
                success: false,
                error: `¡Ups! ${cleanName} ya hizo pat. Debes esperar ${hours}h ${mins}m.`
            }, { status: 429 });
        }

        // Success! Update ranking, cooldown, and accessories
        await kv.set('global_last_pat_by', cleanName);
        await kv.set('global_accessories', accessories || []);
        await kv.hincrby('ranking', cleanName, 1);
        await kv.setCooldown(cleanName, now);

        return NextResponse.json({ success: true, message: `Pat de ${cleanName} registrado!` });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Error del servidor' }, { status: 500 });
    }
}
