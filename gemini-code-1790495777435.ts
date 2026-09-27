import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            V
          </div>
          <span className="font-bold text-lg text-white">Vaani AI</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
          <a href="#pricing" className="hover:text-white transition">Free Tier</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <a
          href="#demo"
          className="rounded-full bg-white text-slate-950 px-4 py-2 text-xs font-semibold hover:bg-slate-200 transition"
        >
          Try Live Demo
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/60 py-8 bg-slate-950 text-center text-xs text-slate-500">
      <p>© {new Date().getFullYear()} Vaani AI. Multilingual Voice Intelligence. Built with 100% free stack.</p>
    </footer>
  );
}