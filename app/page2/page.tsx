import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // Simulate a delay in generating metadata
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    title: "Streaming Metadata Bug | Page 2",
    description: "A bug in Next.js canary",
    icons: {
      icon: "/star.png",
    },
  };
}

export default async function Page() {
  // Simulate a short delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/"
          >
            Go back home
          </Link>
        </div>
      </main>
    </div>
  );
}
