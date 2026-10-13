export function Education() {
  return (
    <section className="flex flex-col gap-3 pb-8">
      <h2 className="text-sm font-semibold text-zinc-50">Education</h2>
      <div className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 text-zinc-400 text-xs font-bold flex-shrink-0">
            SS
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-zinc-200 leading-tight">
              Shri Shankaracharya Institute of Professional Management &amp;
              Technology
            </span>
            <span className="text-xs text-zinc-500">
              B.Tech — Computer Science &amp; Engineering · Raipur, CG
            </span>
          </div>
        </div>
        <span className="text-xs text-zinc-600 whitespace-nowrap font-mono flex-shrink-0">
          2022 – 2026
        </span>
      </div>
    </section>
  );
}
