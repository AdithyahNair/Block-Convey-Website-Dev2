export {};

declare global {
  interface Window {
    dataLayer: unknown[]; // or: any[] if you're being flexible
    gtag: (...args: any[]) => void;
  }
}
