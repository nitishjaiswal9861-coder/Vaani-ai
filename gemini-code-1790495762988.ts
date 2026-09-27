import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, lang } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Please speak something." }, { status: 400 });
    }

    // OPTION A: If you configure a free GROQ_API_KEY or GEMINI_API_KEY in Vercel
    const groqKey = process.env.GROQ_API_KEY;
    if (groqKey) {
      const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${groqKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `You are Vaani AI, a multilingual voice assistant. Give natural, concise replies (max 2 sentences) in the same language as the prompt (${lang}).`,
            },
            { role: "user", content: message },
          ],
        }),
      });

      const groqData = await groqRes.json();
      const reply = groqData.choices?.[0]?.message?.content;
      if (reply) return NextResponse.json({ reply });
    }

    // OPTION B: Free zero-config default engine
    const langGreetings: Record<string, string> = {
      "hi-IN": `नमस्ते! मैंने सुना: "${message}". वाणी एआई आपकी सेवा में तैयार है।`,
      "bn-IN": `নমস্কার! আমি শুনেছি: "${message}". বাণী এআই সাহায্য করতে প্রস্তুত।`,
      "ta-IN": `வணக்கம்! நீங்கள் கூறியது: "${message}". வாணி AI உங்களுக்கு உதவ தயாராக உள்ளது.`,
      "te-IN": `నమస్కారం! మీరు చెప్పింది: "${message}". వాణి AI సిద్ధంగా ఉంది.`,
      "es-ES": `¡Hola! He escuchado: "${message}". Vaani AI está lista para ayudarte.`,
      "fr-FR": `Bonjour! J'ai bien reçu: "${message}". Vaani AI est à votre service.`,
    };

    const reply =
      langGreetings[lang] ||
      `Hello! I heard: "${message}". Vaani AI is live and responding effortlessly.`;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: "Vaani AI experienced a momentary lag." }, { status: 500 });
  }
}