import type { Metadata } from "next";
import { Bricolage_Grotesque, Lexend_Giga, Lexend_Mega, Archivo } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ArkhSpace – Turn your student life into a system that works for you",
  description: "The ultimate space for students to combine multiple tasks, builds systems, build habits, and find your identity.",
};

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  display: "swap",
  subsets: ["latin"],
});

const lexendGiga = Lexend_Giga({
  variable: "--font-lexend-giga",
  display: "swap",
  subsets: ["latin"],
});

const lexendMega = Lexend_Mega({
  variable: "--font-lexend-mega",
  display: "swap",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${lexendGiga.variable} ${lexendMega.variable} ${archivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
