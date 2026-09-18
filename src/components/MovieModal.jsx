import { useEffect } from "react";

export default function MovieModal({ movie, onClose }) {
    // ---- Escape key + body scroll lock ----
    useEffect(() => {
        if (!movie) return;

        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [movie, onClose]);


    if (!movie) return null;

    const image = movie.image?.original || movie.image?.medium;
    const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
    const rating = movie.rating?.average ?? "N/A";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute right-3 top-3 z-10 rounded-full bg-slate-950/80 px-3 py-1 text-lg leading-none text-white transition hover:bg-red-500 hover:text-white"
                >
                    ✕
                </button>


                {image && (
                    <img
                        src={image}
                        alt={`${movie.name} poster`}
                        className="h-64 w-full object-cover object-top sm:h-80"
                    />
                )}


                <div className="space-y-5 p-6">
                    <h2 id="modal-title" className="text-2xl font-bold text-white sm:text-3xl">
                        {movie.name}
                    </h2>

                    <p className="text-sm text-red-500">
                        ⭐ Rating: {rating}
                        <span className="mx-2 text-slate-600">|</span>
                        📅 Release: {year}
                    </p>


                    {movie.genres?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}


                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-400 sm:grid-cols-3">
                        <p>
                            <span className="text-slate-500">Status:</span>{" "}
                            {movie.status || "N/A"}
                        </p>
                        <p>
                            <span className="text-slate-500">Language:</span>{" "}
                            {movie.language || "N/A"}
                        </p>
                        <p>
                            <span className="text-slate-500">Runtime:</span>{" "}
                            {movie.runtime ? `${movie.runtime} min` : "N/A"}
                        </p>
                    </div>


                    <div>
                        <h3 className="mb-1 font-semibold text-white">Overview</h3>
                        {movie.summary ? (
                            <div
                                className="space-y-2 text-sm leading-relaxed text-slate-300 [&_p]:mb-2"
                                dangerouslySetInnerHTML={{ __html: movie.summary }}
                            />
                        ) : (
                            <p className="text-sm text-slate-400">No summary available.</p>
                        )}
                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full rounded-lg bg-slate-800 px-4 py-3 font-medium text-white transition hover:bg-red-500 sm:w-auto"
                    >
                        ❌ Close
                    </button>
                </div>
            </div>
        </div>
    );
}