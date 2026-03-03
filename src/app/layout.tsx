import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Papyde — Organize. Think. Create.",
  description:
    "Papyde is your all-in-one workspace for notes, docs, and ideas. Beautiful, fast, and built for flow.",
  openGraph: {
    title: "Papyde — Organize. Think. Create.",
    description:
      "Your all-in-one workspace for notes, documents, and creative ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
