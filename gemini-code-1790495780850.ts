import { VoiceAssistantDemo } from "../voice-assistant";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
          Zero Cost • 100% Free Serverless Voice Stack
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Voice Intelligence, Spoken in{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Your Language.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Vaani AI brings high-speed multilingual voice interaction directly to your users without expensive cloud computing bills.
        </p>

        <div id="demo">
          <VoiceAssistantDemo />
        </div>
      </div>
    </section>
  );
}