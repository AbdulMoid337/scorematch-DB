import LineupBuilder from "./LineupBuilder";

export default function LineupPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
          Team Builder
        </h1>
        <LineupBuilder />
      </div>
    </div>
  );
}
