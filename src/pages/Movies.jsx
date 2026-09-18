import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Loader from "../components/Loader";


// ---- API ----
const BASE_URL = "https://api.tvmaze.com";

async function getAllMovies() {
    const res = await fetch(`${BASE_URL}/shows`);
    if (!res.ok) throw new Error(`Failed to load movies (${res.status})`);
    return res.json();
}

async function searchMovies(movieName) {
    const res = await fetch(
        `${BASE_URL}/search/shows?q=${encodeURIComponent(movieName)}`
    );
    if (!res.ok) throw new Error(`Search failed (${res.status})`);
    const data = await res.json();
    return data.map((item) => item.show);
}
// --------------

export default function Movies() {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const trimmed = search.trim();

    useEffect(() => {
        let isCurrent = true;

        async function load() {
            setLoading(true);
            setError(null);

            try {
                const result = trimmed
                    ? await searchMovies(trimmed)
                    : await getAllMovies();

                if (isCurrent) setMovies(result);
            } catch (err) {
                if (isCurrent) setError(err);
            } finally {
                if (isCurrent) setLoading(false);
            }
        }

        load();

        return () => {
            isCurrent = false;
        };
    }, [trimmed]);

    return (
        <section className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Browse Movies</h1>

            <SearchBar value={search} onChange={setSearch} />

            <div className="mt-8">
                {loading && <Loader />}

                {error && (
                    <p className="rounded-lg border border-red-800 bg-red-950/50 p-4 text-red-300">
                        Something went wrong: {error.message}
                    </p>
                )}

                {!loading && !error && movies.length === 0 && (
                    <p className="py-16 text-center text-slate-400">
                        No movies found for “{trimmed}”.
                    </p>
                )}

                {!loading && !error && movies.length > 0 && (
                    <>
                        <p className="mb-4 text-sm text-slate-500">
                            Showing {movies.length} result{movies.length !== 1 && "s"}
                        </p>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {movies.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    onSelect={setSelected}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <MovieModal movie={selected} onClose={() => setSelected(null)} />
        </section>
    );
}