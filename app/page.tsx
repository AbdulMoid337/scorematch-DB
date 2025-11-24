import { players } from "./data";
import PlayerCard from "./components/PlayerCard";

export default function Home() {
  // The data structure in data.ts is an array containing a single object with all players as keys
  const allPlayers = players[0];
  const playerList = Object.entries(allPlayers);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-black sm:px-6 lg:px-8">
      <header className="mx-auto max-w-7xl text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Score Match <span className="text-blue-600">Collection</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-500 dark:text-gray-400">
          Explore the detailed attributes, statistics, and behaviors of every
          player in your squad.
        </p>
      </header>

      <main className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
          {playerList.map(([name, data]) => (
            <PlayerCard key={name} name={name} data={data} />
          ))}
        </div>
      </main>
    </div>
  );
}
