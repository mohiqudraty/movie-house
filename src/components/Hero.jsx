import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            />

            <div className="absolute inset-0 bg-slate-950/70" />

            <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    Your favorite movies, all in one place
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
                    Discover, explore, and enjoy a curated collection of movies from all genres. Find your next favorite film today!
                </p>
                <Link
                    to="/movies"
                    className="mt-9 inline-block rounded-xl bg-red-500 px-8 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-red-300 hover:shadow-red-400/30"
                >
                    All Movies
                </Link>
            </div>
        </section>
    );
}