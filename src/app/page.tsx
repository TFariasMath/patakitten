'use client';

import { useState, useEffect } from 'react';
import KittenContainer from '@/components/KittenContainer';

export default function Home() {
  const [lastPat, setLastPat] = useState('...');
  const [ranking, setRanking] = useState<[string, number][]>([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [accessories, setAccessories] = useState<string[]>([]);

  // Did the user modify accessories locally? (Prevents constant override by fetch interval)
  const [modifiedLocally, setModifiedLocally] = useState(false);

  const fetchData = async () => {
    const res = await fetch('/api/pat');
    if (res.ok) {
      const data = await res.json();
      setLastPat(data.lastPat);
      setRanking(data.ranking);
    }
  };

  useEffect(() => {
    const initFetch = async () => {
      const res = await fetch('/api/pat');
      if (res.ok) {
        const data = await res.json();
        setLastPat(data.lastPat);
        setRanking(data.ranking);
        if (!modifiedLocally) {
          setAccessories(data.accessories || []);
        }
      }
    };
    initFetch();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [modifiedLocally]);

  const toggleAccessory = (acc: string, category: string) => {
    setModifiedLocally(true);
    setAccessories(prev => {
      let filtered = prev;

      // Mutually exclusive groupings based on category
      const headwear = ['hat', 'crown'];
      const neckwear = ['bowtie', 'collar'];

      if (headwear.includes(acc)) {
        filtered = filtered.filter(a => !headwear.includes(a));
      }
      if (neckwear.includes(acc)) {
        filtered = filtered.filter(a => !neckwear.includes(a));
      }

      if (prev.includes(acc)) {
        return prev.filter(a => a !== acc); // Just toggle off if it was already on
      } else {
        return [...filtered, acc];
      }
    });
  };

  const handlePat = async (isAnonymous: boolean) => {
    if (!isAnonymous && !name.trim()) {
      setMsg('⚠️ Escribe tu nombre o haz pat anónimo');
      return;
    }

    setLoading(true);
    setMsg('');
    const res = await fetch('/api/pat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, isAnonymous, accessories }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMsg(`💖 ${data.message}`);
      setModifiedLocally(false); // Reset to allow future global changes if any
      fetchData();
    } else {
      setMsg(`❌ ${data.error}`);
    }
  };

  const handleKittenClick = () => {
    if (name.trim()) {
      handlePat(false);
    } else {
      handlePat(true);
    }
  };

  return (
    <main className="min-h-screen pb-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-md mt-10 space-y-8 flex flex-col items-center">

        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-pink-600 mb-2">Pat a Kitten 🐾</h1>
          <p className="text-lg font-medium text-pink-800 bg-pink-100 rounded-full px-4 py-2 inline-block shadow-sm ring-2 ring-pink-200">
            Último pat: <span className="font-bold">{lastPat}</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <KittenContainer onPat={handleKittenClick} accessories={accessories} />

          <div className="w-full mt-8 bg-white/60 p-4 rounded-3xl border border-pink-100 shadow-sm">
            <h3 className="text-sm font-bold text-center text-pink-500 mb-3">🎩 Cabeza</h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-xs mb-4 mx-auto">
              <button
                onClick={() => toggleAccessory('hat', 'head')}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-transform active:scale-95 ${accessories.includes('hat') ? 'bg-purple-500 text-white border-purple-600 shadow-md' : 'bg-white text-purple-500 border-purple-200 hover:bg-purple-50'}`}
              >🎩 Sombrero</button>
              <button
                onClick={() => toggleAccessory('crown', 'head')}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-transform active:scale-95 ${accessories.includes('crown') ? 'bg-yellow-500 text-white border-yellow-600 shadow-md' : 'bg-white text-yellow-600 border-yellow-200 hover:bg-yellow-50'}`}
              >👑 Corona</button>
            </div>

            <h3 className="text-sm font-bold text-center text-pink-500 mb-3">🎀 Cuello</h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-xs mb-4 mx-auto">
              <button
                onClick={() => toggleAccessory('bowtie', 'neck')}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-transform active:scale-95 ${accessories.includes('bowtie') ? 'bg-blue-500 text-white border-blue-600 shadow-md' : 'bg-white text-blue-500 border-blue-200 hover:bg-blue-50'}`}
              >🎀 Corbatín</button>
              <button
                onClick={() => toggleAccessory('collar', 'neck')}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-transform active:scale-95 ${accessories.includes('collar') ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : 'bg-white text-emerald-500 border-emerald-200 hover:bg-emerald-50'}`}
              >🔔 Collar</button>
            </div>

            <h3 className="text-sm font-bold text-center text-pink-500 mb-3">🕶 Cara</h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-xs mx-auto">
              <button
                onClick={() => toggleAccessory('glasses', 'face')}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-transform active:scale-95 ${accessories.includes('glasses') ? 'bg-red-500 text-white border-red-600 shadow-md' : 'bg-white text-red-500 border-red-200 hover:bg-red-50'}`}
              >🕶 Lentes</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl w-full border border-pink-100 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-pink-100 rounded-bl-full -z-10 opacity-50"></div>
          <div>
            <label className="block text-sm font-semibold text-pink-700 mb-1">
              Tu Nombre (Rankeado)
            </label>
            <input
              type="text"
              className="w-full border-2 border-pink-200 rounded-xl p-3 focus:outline-none focus:border-pink-500 bg-pink-50 text-pink-900 transition-colors placeholder-pink-300 font-medium"
              placeholder="Ej. Maria..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={15}
            />
            <p className="text-xs text-pink-500 mt-1 font-medium">* 1 pat cada 4 horas por nombre.</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handlePat(false)}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 rounded-xl transition-transform active:scale-95 shadow-lg flex justify-center items-center gap-1"
            >
              ¡Hacer Pat! 💖
            </button>
            <button
              onClick={() => handlePat(true)}
              disabled={loading}
              className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:text-gray-900 font-bold py-3 rounded-xl transition-transform active:scale-95 shadow-sm hover:bg-gray-50 flex justify-center items-center gap-1"
            >
              Anónimo 👻
            </button>
          </div>

          {msg && (
            <div className={`p-3 rounded-xl text-center font-bold text-sm ${msg.includes('❌') ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-green-100 text-green-700 border border-green-200'}`}>
              {msg}
            </div>
          )}
        </div>

        <div className="w-full bg-white p-6 rounded-3xl shadow-xl border border-pink-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-100 rounded-br-full opacity-50"></div>
          <h2 className="text-2xl font-bold text-center text-pink-600 mb-4 flex items-center justify-center gap-2 relative z-10">
            🏆 Ranking de Pats
          </h2>
          {ranking.length === 0 ? (
            <p className="text-center text-pink-400 font-medium">Aún no hay pats en el ranking...</p>
          ) : (
            <ul className="space-y-3 relative z-10">
              {ranking.map(([rName, score], idx) => (
                <li key={idx} className="flex justify-between items-center bg-gradient-to-r from-pink-50 to-white border border-pink-100 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-bold text-pink-800 flex items-center gap-2">
                    {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : <span className="w-6 inline-block text-center text-pink-400">{idx + 1}.</span>}
                    {rName}
                  </span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-black shadow-inner">
                    {score} pats
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </main>
  );
}
