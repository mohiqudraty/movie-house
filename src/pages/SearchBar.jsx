export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                🔍
            </span>
            <input
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search for a movie..."
                aria-label="Search for a movie"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white placeholder-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            />
        </div>
    );
}