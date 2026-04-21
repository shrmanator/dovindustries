"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
  slideFrom?: "bottom" | "left" | "right";
  withDepth?: boolean;
  withScale?: boolean;
  initiallyVisible?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  blur = true,
  slideFrom = "bottom",
  withDepth = false,
  withScale = false,
  initiallyVisible = false,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initiallyVisible || isVisible) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const scheduleVisibility = () => {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scheduleVisibility();

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scheduleVisibility();
            observer.unobserve(entry.target);
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
      observer.disconnect();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay, initiallyVisible, isVisible]);

  const getTransform = () => {
    const scale = withScale && !isVisible ? "scale-95" : "scale-100";
    if (isVisible) return `translate-y-0 translate-x-0 ${scale}`;

    switch (slideFrom) {
      case "left":
        return `-translate-x-8 translate-y-0 ${scale}`;
      case "right":
        return `translate-x-8 translate-y-0 ${scale}`;
      default:
        return `translate-y-8 translate-x-0 ${scale}`;
    }
  };

  const depthStyle = withDepth && !isVisible
    ? "shadow-none"
    : withDepth
    ? "shadow-md"
    : "";

  return (
    <div
      ref={ref}
      style={{ willChange: isVisible ? undefined : "opacity, transform" }}
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:blur-0 motion-reduce:opacity-100 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()} ${blur && !isVisible ? "blur-sm" : "blur-0"} ${depthStyle} ${className}`}
    >
      {children}
    </div>
  );
}
