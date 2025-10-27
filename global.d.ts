// Global ambient declarations for non-code imports (CSS, images)
// Placing this at the repository root and including `**/*.d.ts` in tsconfig
// ensures TypeScript and editors always pick these up.

declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// If you use CSS Modules and want typed class names, consider a generator
// (typed-css-modules) or add more specific declarations. For now we keep
// a simple wildcard which prevents TS errors for global and module imports.

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
