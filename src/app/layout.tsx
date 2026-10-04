import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const googleSans = localFont({
  src: "./fonts/google-sans-flex-latin.woff2",
  variable: "--font-google-sans",
  weight: "100 1000",
  style: "normal",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: "Arial",
  display: "swap",
});

const googleCode = localFont({
  src: "./fonts/google-sans-code-latin.woff2",
  variable: "--font-google-code",
  weight: "300 700",
  style: "normal",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shijie Gan | Software Engineer",
    template: "%s | Shijie Gan",
  },
  description:
    "Software engineer specializing in full-stack development and AI, building scalable applications in Fintech and Web3. Explore my work, experience, and engineering notes.",
  keywords: ["developer", "portfolio", "react", "nextjs", "web development"],
  authors: [{ name: "Shijie Gan" }],
  icons: {
    icon: {
      url: "/favicon.svg?v=split-s",
      type: "image/svg+xml",
      sizes: "any",
    },
    shortcut: "/favicon.svg?v=split-s",
    apple: {
      url: "/apple-touch-icon.png?v=split-s",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Runs before paint so a saved dark theme doesn't flash light first.
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${googleCode.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased min-h-screen">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
