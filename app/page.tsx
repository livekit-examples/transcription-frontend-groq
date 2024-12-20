"use client";

import Image from "next/image";

import { RoomComponent } from "@/components/room";
import { ConnectionProvider } from "@/hooks/use-connection";

export default function Home() {
  return (
    <ConnectionProvider>
      <div className="grid place-items-center  min-h-screen h-full w-full">
        <div className="w-full grid grid-rows-[64px_1fr_8px] lg:border border-white/20 h-full min-h-dvh lg:max-w-5xl mx-auto lg:min-h-[640px] lg:max-h-[640px] rounded-2xl px-4">
          <header className="border-b border-white/20">
            <div className="py-4 px-2 flex items-center justify-between">
              <a href="https://groq.com" target="_blank">
                <Image
                  width={122.667}
                  height={64}
                  src="/images/groq-logomark.svg"
                  alt="Groq logo"
                  className="h-8 w-auto"
                />
              </a>
              <div>
                Built with{" "}
                <a
                  href="https://docs.livekit.io/agents"
                  className="pb-[1px] border-b border-white/40 hover:border-white/80 transition-all duration-75 ease-out"
                  target="_blank"
                >
                  LiveKit
                </a>
              </div>
            </div>
          </header>
          <RoomComponent />
        </div>
      </div>
    </ConnectionProvider>
  );
}
