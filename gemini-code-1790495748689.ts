import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaani AI — Multilingual Voice Intelligence",
  description: "Natural real-time multilingual voice AI in your browser at zero operational cost.",
  openGraph: {
    title: "Vaani AI",
    description: "Multilingual conversational voice engine.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}