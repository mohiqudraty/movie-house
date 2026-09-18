import { Link, } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-700 bg-slate-950/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link to="/" className="text-lg font-bold sm:text-xl">
                    Movie🎬
                    <span className="text-red-500">House</span>
                </Link>

                <div className="flex items-center gap-3 sm:gap-6">
                    <Link
                        to="/movies"
                        className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-red-400 sm:px-4"
                    >
                        Movies
                    </Link>
                </div>
            </nav>
        </header>
    );
}