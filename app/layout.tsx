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

export async function generateMetadata(): Promise<Metadata> {
  // Simulate a delay in generating metadata
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    title: "Streaming Metadata Bug | Page 1",
    description: "A bug in Next.js canary",
    icons: {
      icon: "/heart.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Simulate a short delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
