"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
  slideFrom?: "bottom" | "left" | "right";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  blur = true,
  slideFrom = "bottom",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translate-y-0 translate-x-0";
    switch (slideFrom) {
      case "left":
        return "-translate-x-8 translate-y-0";
      case "right":
        return "translate-x-8 translate-y-0";
      default:
        return "translate-y-8 translate-x-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()} ${blur && !isVisible ? "blur-sm" : "blur-0"} ${className}`}
    >
      {children}
    </div>
  );
}
