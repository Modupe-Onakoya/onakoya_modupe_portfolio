"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      ring.current?.animate({ transform }, { duration: 0, fill: "forwards" });
      dot.current?.animate({ transform }, { duration: 0, fill: "forwards" });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed top-0 left-0 z-[100] -mt-[19px] -ml-[19px] hidden size-[38px] rounded-full border border-white/50 lg:block" />
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[101] -mt-0.5 -ml-0.5 hidden size-1 rounded-full bg-ember lg:block" />
    </>
  );
}
