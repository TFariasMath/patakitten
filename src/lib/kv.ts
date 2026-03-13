import { promises as fs } from 'fs';
import path from 'path';

// Local JSON file to mock Vercel KV for free dev/local
const DB_FILE = path.join(process.cwd(), 'local_kv.json');

type KVStore = {
    global_last_pat_by: string;
    global_accessories: string[];
    ranking: Record<string, number>;
    cooldowns: Record<string, number>;
};

const defaultData: KVStore = {
    global_last_pat_by: 'Anónimo',
    global_accessories: [],
    ranking: {},
    cooldowns: {}
};

let dbCache: KVStore | null = null;

async function getDB(): Promise<KVStore> {
    if (dbCache) return dbCache;
    try {
        const data = await fs.readFile(DB_FILE, 'utf-8');
        dbCache = JSON.parse(data);
        return dbCache!;
    } catch (e) {
        dbCache = JSON.parse(JSON.stringify(defaultData));
        return dbCache!;
    }
}

let writeLock = false;
async function saveDB(data: KVStore) {
    dbCache = data;
    if (writeLock) return;
    writeLock = true;
    try {
        await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e) {
        // Ignore concurrency bugs on Windows
    } finally {
        writeLock = false;
    }
}

export const kv = {
    get: async (key: string) => {
        const db = await getDB();
        if (key === 'global_last_pat_by') return db.global_last_pat_by;
        if (key === 'global_accessories') return db.global_accessories;
        return null;
    },
    set: async (key: string, value: any) => {
        const db = await getDB();
        if (key === 'global_last_pat_by') db.global_last_pat_by = value;
        if (key === 'global_accessories') db.global_accessories = value;
        await saveDB(db);
    },
    hgetall: async (key: string) => {
        const db = await getDB();
        if (key === 'ranking') return db.ranking;
        return null;
    },
    hincrby: async (key: string, field: string, increment: number) => {
        const db = await getDB();
        if (key === 'ranking') {
            db.ranking[field] = (db.ranking[field] || 0) + increment;
            await saveDB(db);
            return db.ranking[field];
        }
    },
    getCooldown: async (name: string) => {
        const db = await getDB();
        return db.cooldowns[name] || 0;
    },
    setCooldown: async (name: string, timestamp: number) => {
        const db = await getDB();
        db.cooldowns[name] = timestamp;
        await saveDB(db);
    }
};
