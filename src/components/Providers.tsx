"use client";

import dynamic from "next/dynamic";

const LenisProvider = dynamic(() => import("@/components/LenisProvider"), { ssr: false });

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LenisProvider>{children}</LenisProvider>;
}
