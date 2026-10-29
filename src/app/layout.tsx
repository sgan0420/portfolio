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
  metadataBase: new URL("https://shijiegan.com"),
  title: {
    default: "Shijie Gan | Software Engineer",
    template: "%s | Shijie Gan",
  },
  description:
    "Software engineer specializing in full-stack development and AI, building scalable applications in Fintech and Web3. Explore my work, experience, and engineering notes.",
  keywords: ["developer", "portfolio", "react", "nextjs", "web development"],
  authors: [{ name: "Shijie Gan" }],
  // Without these, link previews scrape the first large project screenshot.
  openGraph: {
    type: "website",
    siteName: "Shijie Gan",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    // The PNG comes first for Google Search, which doesn't accept SVG;
    // browsers still pick the SVG.
    icon: [
      { url: "/icon-192.png?v=sg-dot", type: "image/png", sizes: "192x192" },
      { url: "/favicon.svg?v=sg-dot", type: "image/svg+xml", sizes: "any" },
    ],
    apple: {
      url: "/apple-touch-icon.png?v=sg-dot",
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
