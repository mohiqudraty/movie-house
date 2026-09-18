import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t border-slate-700 bg-slate-950">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center text-sm text-slate-500 sm:flex-row sm:justify-between">
                <Link to="/" className="text-lg font-bold sm:text-xl">
                    Movie🎬
                    <span className="text-red-500">House</span>
                </Link>
                <p>© 2026 Movie🎬House. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="https://github.com/mohiqudraty" target="_blank" className="hover:text-red-500">GitHub</a>
                </div>
            </div>
        </footer>
    );
}