export default function SearchFilterCheck() {
  return (
    <div className="w-[70vw] max-w-[700px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-slate-700 to-stone-800 text-white shadow-lg">
      <input
        className="bg-transparent text-black/90 dark:text-white/90 placeholder:text-default-700/50 dark:placeholder:text-white/60"
        placeholder="Type to search..."
      />
    </div>
  );
}
