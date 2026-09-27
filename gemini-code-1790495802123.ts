"use client";

import { useState } from "react";
import { Check, Shield, Cpu, Mic, Radio, Zap } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 border-t border-slate-800/60 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">How Vaani AI Works For Free</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Mic, title: "1. Device-Edge Speech", desc: "Transforms speech to text locally on the client browser with zero API latency and zero cost." },
          { icon: Cpu, title: "2. Fast Free LLM", desc: "Routes intelligent prompts to free tier high-throughput models (Groq or Gemini Free)." },
          { icon: Radio, title: "3. Native Voice Synthesis", desc: "Speaks back fluently in Hindi, Tamil, English, and 30+ regional dialects without voice subscription fees." },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { title: "No Credit Card Required", desc: "Designed to operate permanently within standard free-tier allowances." },
          { title: "Ultra Low Latency", desc: "Sub-200ms processing with client-side synthesis and edge routing." },
          { title: "Native Mobile Support", desc: "Fully compatible with Android and iOS web views." },
          { title: "Privacy First", desc: "Audio is converted directly on the user's device without storing raw voice files." },
        ].map((feat, i) => (
          <div key={i} className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 flex gap-4">
            <Zap className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-medium mb-1">{feat.title}</h4>
              <p className="text-slate-400 text-sm">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Languages() {
  const langs = ["English", "Hindi", "Bengali", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", "Spanish", "French", "German", "Japanese"];
  return (
    <section className="py-16 px-4 text-center max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Supported Regional & Global Tongues</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {langs.map((l) => (
          <span key={l} className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-medium text-slate-300">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="py-12 border-y border-slate-800/60 bg-slate-900/20 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-3 text-center gap-4">
        <div>
          <div className="text-3xl font-extrabold text-white">$0</div>
          <div className="text-xs text-slate-400 mt-1">Hosting Cost</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-indigo-400">100+</div>
          <div className="text-xs text-slate-400 mt-1">Free Voices</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white">&lt;250ms</div>
          <div className="text-xs text-slate-400 mt-1">Response Time</div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <blockquote className="text-lg italic text-slate-300">
        "Vaani AI gives us instantaneous voice feedback in Indian languages without needing a five-figure cloud audio budget."
      </blockquote>
      <div className="mt-4 text-sm font-semibold text-indigo-400">— Open Source AI Community</div>
    </section>
  );
}

export function SecurityStrip() {
  return (
    <div className="py-6 bg-slate-950 flex justify-center items-center gap-2 text-xs text-slate-400">
      <Shield className="w-4 h-4 text-emerald-400" />
      <span>Encrypted WebRTC & Device-Level Audio Processing</span>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 max-w-md mx-auto text-center">
      <div className="p-8 rounded-3xl border border-indigo-500/50 bg-gradient-to-b from-indigo-950/20 to-slate-900">
        <h3 className="text-xl font-bold text-white">Community Free Tier</h3>
        <div className="my-4">
          <span className="text-4xl font-extrabold text-white">$0</span>
          <span className="text-slate-400 text-sm"> / forever</span>
        </div>
        <ul className="text-left space-y-3 text-sm text-slate-300 mb-6">
          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Client-Side Speech-to-Text</li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Browser Speech Synthesis</li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Free Vercel Edge Hosting</li>
        </ul>
        <a href="#demo" className="block w-full py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition text-sm">
          Start Talking
        </a>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4 text-sm">
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
          <div className="font-semibold text-white">Is it really 100% free?</div>
          <div className="text-slate-400 mt-1">Yes. By utilizing browser speech synthesis and free tier edge APIs, this architecture runs without cloud costs.</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
          <div className="font-semibold text-white">Which browsers support this?</div>
          <div className="text-slate-400 mt-1">Google Chrome, Microsoft Edge, Brave, Safari, and modern mobile browsers with Web Speech APIs.</div>
        </div>
      </div>
    </section>
  );
}

export function WaitlistCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Joining...");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("You're on the list! 🎉");
        setEmail("");
      } else {
        setStatus("Failed to submit.");
      }
    } catch {
      setStatus("Submission error.");
    }
  };

  return (
    <section className="py-20 px-4 text-center max-w-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Get Early Access to New Voices</h2>
      <p className="text-slate-400 text-sm mb-6">Join hundreds of builders experimenting with conversational voice AI.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm outline-none focus:border-indigo-500"
        />
        <button type="submit" className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition text-sm">
          Join Waitlist
        </button>
      </form>
      {status && <p className="mt-3 text-xs text-indigo-300">{status}</p>}
    </section>
  );
}