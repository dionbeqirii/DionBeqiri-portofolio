import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dion Beqiri — NetSuite Consultant & Full-Stack Developer",
  description:
    "Portfolio of Dion Beqiri — NetSuite Technical Consultant and Full-Stack Software Developer specializing in SuiteScript, React, Next.js, and enterprise ERP integrations.",
  keywords: [
    "Dion Beqiri",
    "NetSuite Consultant",
    "Full-Stack Developer",
    "SuiteScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Dion Beqiri" }],
  openGraph: {
    title: "Dion Beqiri — NetSuite Consultant & Full-Stack Developer",
    description:
      "Bridging the gap between enterprise ERP architecture and modern, user-focused web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0f1e] text-slate-200 antialiased">{children}</body>
    </html>
  );
}
