import Link from "next/link";
import { players } from "./data";
import PlayerCard from "./components/PlayerCard";

export default function Home() {
  const allPlayers = players[0];
  const playerList = Object.entries(allPlayers);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-[100%] blur-[100px] pointer-events-none" />

      <header className="relative mx-auto max-w-7xl text-center mb-24 z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
            Official Database
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 drop-shadow-2xl">
          SCORE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600">
            MATCH
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-medium">
          Explore the detailed attributes, statistics, and behaviors of every
          player in your squad.
        </p>

        <div className="flex justify-center">
          <Link
            href="/lineup"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-10 font-bold text-white shadow-2xl transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
            <span className="mr-2 text-sm uppercase tracking-widest">
              Build Lineup
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
          {playerList.map(([name, data]) => (
            <PlayerCard key={name} name={name} data={data} />
          ))}
        </div>
      </main>
    </div>
  );
}
