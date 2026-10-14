export const PAW_JOINT = Object.freeze({ x: 472, y: 218 });

export function pawTransform(angle) {
  const finite = Number.isFinite(angle) ? angle : 0;
  const clamped = Math.max(-32, Math.min(0, finite));
  return `rotate(${clamped} ${PAW_JOINT.x} ${PAW_JOINT.y})`;
}

export function researchDrawing() {
  return `<svg viewBox="30 75 640 320" role="img" aria-label="Bear drawing study with separately grouped strokes in the front leg and paw">
    <g class="unchanged-strokes" fill="none" stroke="#626970" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M96 290C78 222 115 162 177 129C240 91 337 96 423 121C466 135 491 115 516 124"/>
      <path d="M108 296C144 291 165 283 186 265M203 268C269 289 352 283 402 253M447 238L470 230"/>
      <path d="M112 282C91 310 74 333 65 355C50 358 49 370 56 371L120 371C133 371 136 362 125 358L110 351C132 324 156 309 175 273"/>
      <path d="M184 273C202 308 223 331 236 352C255 353 266 368 254 369L194 369C183 369 179 361 177 354L158 306"/>
      <path d="M407 251C405 298 396 324 394 350C379 356 376 370 388 371L444 371C458 371 458 360 448 357L426 352L440 249"/>
      <path d="M489 144C495 130 507 115 524 111M525 117C517 95 526 89 537 92C550 97 551 108 548 119"/>
      <path d="M548 123C574 120 590 139 594 157L612 177C626 181 634 187 633 194C632 205 616 207 599 200C583 222 562 230 550 230L517 217"/>
      <path d="M506 147L484 181L494 214M515 156L502 188L514 213M581 167L602 184L621 190"/>
      <path d="M91 270L108 239L129 217M111 274L131 241L156 218M140 252L164 218L194 196" stroke="#89949f" stroke-width="5"/>
      <path d="M170 193L204 169L239 160M211 210L251 180L291 166M272 232L310 197L348 184M336 221L372 184L405 171" stroke="#89949f" stroke-width="4"/>
      <path d="M405 158L430 182L447 208M435 145L465 171L477 197M451 139L484 150"/>
      <path d="M132 302L116 327M190 300L212 337M418 296L408 338M514 133L522 150" stroke-width="4"/>
      <path d="M56 365L67 362M74 369L82 362M93 369L99 362M390 365L399 359M411 366L418 359M432 366L439 359"/>
      <path d="M38 382C215 375 418 377 664 382" stroke="#d3d9db" stroke-width="1.5"/>
    </g>
    <circle cx="580" cy="161" r="3" fill="#404950"/>
    <path d="M624 182C636 184 637 195 629 198L620 196L619 188Z" fill="#626970"/>
    <g data-paw-group transform="${pawTransform(0)}" fill="none" stroke="#3659a0" stroke-linecap="round" stroke-linejoin="round">
      <path d="M472 218C477 249 489 276 510 303C526 324 536 342 539 353L561 357L571 370L565 379L513 377L502 366C489 336 463 308 452 269C447 253 447 236 455 222" stroke-width="4"/>
      <path d="M459 232L465 260L481 287M472 242L481 269L498 293M486 280L506 310L520 339M504 309L526 340L535 361" stroke-width="5"/>
      <path d="M515 371L521 362M532 374L537 365M549 375L553 366M562 374L564 367" stroke-width="3"/>
      <path d="M459 240L458 258L468 282M488 304L503 331L510 346" stroke="#6884b6" stroke-width="2"/>
    </g>
  </svg>`;
}
