"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2, Sparkles, Globe } from "lucide-react";

const SUPPORTED_LANGUAGES = [
  { code: "en-US", name: "English (US)" },
  { code: "en-IN", name: "English (India)" },
  { code: "hi-IN", name: "Hindi (हिन्दी)" },
  { code: "bn-IN", name: "Bengali (বাংলা)" },
  { code: "ta-IN", name: "Tamil (தமிழ்)" },
  { code: "te-IN", name: "Telugu (తెలుగు)" },
  { code: "es-ES", name: "Spanish (Español)" },
  { code: "fr-FR", name: "French (Français)" },
];

export function VoiceAssistantDemo() {
  const [selectedLang, setSelectedLang] = useState("en-IN");
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = selectedLang;

      recognition.onresult = async (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        setIsListening(false);
        await processAIResponse(text, selectedLang);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [selectedLang]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setResponse("");
      recognitionRef.current.lang = selectedLang;
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const processAIResponse = async (userText: string, lang: string) => {
    setIsProcessing(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, lang }),
      });
      const data = await res.json();
      const reply = data.reply || "Sorry, I could not process that.";
      setResponse(reply);
      speakText(reply, lang);
    } catch {
      const fallback = "Network error. Please try again.";
      setResponse(fallback);
      speakText(fallback, lang);
    } finally {
      setIsProcessing(false);
    }
  };

  const speakText = (text: string, lang: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find((v) => v.lang.startsWith(lang.slice(0, 2)));
    if (matchedVoice) utterance.voice = matchedVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-slate-900/80 border border-slate-800 rounded-3xl backdrop-blur-xl shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span className="font-semibold text-white tracking-wide">Live Vaani Interactive Voice Engine</span>
        </div>

        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
          <Globe className="w-4 h-4 text-slate-400" />
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="bg-transparent text-sm text-slate-200 outline-none cursor-pointer"
          >
            {SUPPORTED_LANGUAGES.map((l) => (
              <option key={l.code} value={l.code} className="bg-slate-900 text-white">
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-6">
        <button
          onClick={toggleListening}
          className={`relative group p-6 rounded-full transition-all duration-300 shadow-xl ${
            isListening
              ? "bg-red-500 shadow-red-500/50 scale-105 animate-pulse"
              : isSpeaking
              ? "bg-emerald-500 shadow-emerald-500/50 scale-105"
              : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30"
          }`}
        >
          {isListening ? (
            <MicOff className="w-8 h-8 text-white" />
          ) : isSpeaking ? (
            <Volume2 className="w-8 h-8 text-white animate-bounce" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </button>
        <span className="mt-3 text-xs tracking-wider uppercase font-medium text-slate-400">
          {isListening
            ? "Listening... Speak now"
            : isProcessing
            ? "Vaani is thinking..."
            : isSpeaking
            ? "Vaani is speaking..."
            : "Tap mic to talk"}
        </span>
      </div>

      <div className="space-y-4">
        {transcript && (
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-sm">
            <span className="text-xs uppercase text-indigo-400 font-bold block mb-1">You said</span>
            <p className="text-slate-200">{transcript}</p>
          </div>
        )}

        {response && (
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/50 text-sm">
            <span className="text-xs uppercase text-emerald-400 font-bold block mb-1">Vaani Response</span>
            <p className="text-indigo-100">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}