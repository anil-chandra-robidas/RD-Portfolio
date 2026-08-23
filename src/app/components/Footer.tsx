export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border bg-bg-secondary/50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-text-primary">
            Anil Chandra Robidas
          </p>
          <p className="text-xs text-text-muted mt-0.5">
            Senior WordPress &amp; Front-End Developer • 7.5+ Yrs Exp
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <a
            href="https://www.linkedin.com/in/anil-kumer/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-cyan"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://github.com/anil-chandra-robidas"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-violet-light"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://wa.me/8801838233177"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#25D366]"
          >
            WhatsApp
          </a>
        </div>

        {/* Right */}
        <p className="text-xs text-text-muted">
          &copy; {year} Anil Chandra Robidas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
