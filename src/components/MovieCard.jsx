const FALLBACK = "https://placehold.co/210x295/1e293b/64748b?text=No+Image";

export default function MovieCard({ movie, onSelect }) {
    const poster = movie.image?.medium || FALLBACK;
    const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
    const rating = movie.rating?.average ?? "N/A";

    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-red-500/60 hover:shadow-xl">
            <img
                src={poster}
                alt={`${movie.name} poster`}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-72"
            />

            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="line-clamp-2 font-semibold text-white">{movie.name}</h3>

                <p className="text-sm text-slate-400">
                    <span aria-label="Rating">⭐ {rating}</span>
                    <span className="mx-2">•</span>
                    <span aria-label="Release year">📅 {year}</span>
                </p>

                <button
                    type="button"
                    onClick={() => onSelect(movie)}
                    className="mt-auto rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    See Details
                </button>
            </div>
        </article>
    );
}