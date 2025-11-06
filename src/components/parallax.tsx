"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({
  children,
  speed = 0.5,
  className = "",
}: ParallaxProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const yPos = -(scrolled - elementTop) * speed;
        setOffset(yPos);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
