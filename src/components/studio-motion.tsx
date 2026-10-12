"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { attachStudioMotion } from "../utils/studio-scroll-motion";

export function StudioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (root.current) return attachStudioMotion(root.current);
  }, []);
  return <div className="studio-site" ref={root}>{children}</div>;
}
