"use client";
import { useState } from "react";
import { WING_LIMITS, wingTransform } from "@/utils/drawing-pose";
export function DrawingStudy() {
  const [angle, setAngle] = useState<number>(WING_LIMITS.initial);
  return <figure className="drawing-study">
    <div className="study-canvas">
      <svg viewBox="0 0 520 400" role="img" aria-label="Illustrated bird with a movable wing; the wing feathers move together">
        <defs>
          <linearGradient id="bird-wing" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#769af0" /><stop offset="1" stopColor="#3356b5" /></linearGradient>
        </defs>
        <circle cx="370" cy="107" r="45" fill="#f0dba6" />
        <path d="M70 327c83-15 157-12 247-4 43 4 86 3 125-2" fill="none" stroke="#c2cbbb" strokeWidth="2" />
        <path d="M370 322c-7-36 5-62 24-81M402 320c-2-21 10-38 28-45" fill="none" stroke="#9daa98" strokeWidth="2" />
        <path d="M389 254c-27 1-25-24-25-24 24 1 25 24 25 24M396 276c29-5 31-27 31-27-26 0-31 27-31 27" fill="#becab4" />
        <path d="m244 263-5 58M271 267l18 56M228 324h25M278 326h30" stroke="#605851" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M307 226c55 34 69 32 95 28-40 32-79 8-96-28" fill="#5e7098" />
        <path d="M187 199c-11-27-9-41 15-59 13-10 23-22 13-36-8-12-27-17-42-8-22 14-10 42-5 52-19 19-26 36-14 72 10 31 33 57 76 61 50 4 82-19 90-42 7-19-4-37-29-48-35-16-61-8-77 11Z" fill="#f9f8ef" stroke="#d1d3c8" strokeWidth="1.5" />
        <path d="m166 108-48 11 48 5Z" fill="#bd845f" />
        <circle cx="180" cy="108" r="3" fill="#2a3039" />
        <path d="M182 154c-9 26-10 45 1 63" fill="none" stroke="#ccd0c3" strokeWidth="2" />
        <g transform={wingTransform(angle)} data-testid="connected-wing">
          <path d="M267 209c-6-27-43-59-98-69 2 39 21 89 74 106 23 7 38-10 24-37Z" fill="url(#bird-wing)" />
          <path d="M176 146c19 50 41 76 68 86M186 147c20 39 45 67 62 76M202 152c17 27 34 47 48 61" fill="none" stroke="#a9beef" strokeWidth="2" />
          <path d="M259 208 185 155" stroke="#cbd8fa" strokeWidth="1" strokeDasharray="4 5" />
          <circle cx="267" cy="209" r="7" fill="#fff" stroke="#3556a9" strokeWidth="2" />
        </g>
        <path d="M91 304c8-13 17-13 25 0M100 327c-8-26-6-38 2-51" stroke="#abb8a1" strokeWidth="2" fill="none" />
      </svg>
    </div>
    <div className="study-controls">
      <label htmlFor="wing-position">Move the wing</label>
      <input id="wing-position" type="range" min={WING_LIMITS.min} max={WING_LIMITS.max}
        value={angle} onChange={(event) => setAngle(Number(event.target.value))}
        aria-valuetext={angle + " degrees"} />
      <button type="button" onClick={() => setAngle(WING_LIMITS.initial)}>Reset</button>
    </div>
    <figcaption>Concept illustration. The wing and its details move together.</figcaption>
  </figure>;
}
