import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Purab Sahare — Full Stack Developer",
  description:
    "Backend-focused Full Stack Developer with experience in React Native, Node.js, PostgreSQL, and Prisma. Building GramGains and contributing to food delivery, ride-hailing, and messaging products.",
  keywords: [
    "Purab Sahare",
    "Full Stack Developer",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Backend Developer",
    "GramGains",
  ],
  authors: [{ name: "Purab Sahare", url: "https://github.com/purab107" }],
  openGraph: {
    title: "Purab Sahare — Full Stack Developer",
    description:
      "Backend-focused Full Stack Developer specialising in React Native, Node.js, and PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b]">{children}</body>
    </html>
  );
}
