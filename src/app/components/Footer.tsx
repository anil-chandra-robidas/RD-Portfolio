export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50/80 px-6 py-10">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-text-primary">
            Anil Chandra Robidas
          </p>
          <p className="text-xs text-text-muted mt-0.5">
            Senior WordPress &amp; Front-End Developer • 7.5+ Yrs Exp
          </p>
        </div>

        {/* Right */}
        <p className="text-xs text-text-muted text-center sm:text-right">
          &copy; {year} Anil Chandra Robidas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
