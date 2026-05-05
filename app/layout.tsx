import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://elevation100.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Custom Home Builder Utah | Park City Contractor | Elevation 100",
    template: "%s | Elevation 100 LLC",
  },
  description:
    "Elevation 100 LLC is a Utah custom home builder serving Park City, Deer Valley, Heber Valley, and Utah County. Custom homes, architectural plans, framing, remodels, and steel.",
  keywords: [
    "custom home builder Utah",
    "Park City contractor",
    "Deer Valley custom homes",
    "Heber Valley home builder",
    "Utah County contractor",
    "home framing contractor Utah",
    "architectural plan design Utah",
    "remodeling contractor Park City",
    "steel installation Utah",
    "Elevation 100",
  ],
  applicationName: "Elevation 100 LLC",
  authors: [{ name: "Elevation 100 LLC" }],
  creator: "Elevation 100 LLC",
  publisher: "Elevation 100 LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Elevation 100 LLC",
    title:
      "Custom Home Builder Utah | Park City Contractor | Elevation 100",
    description:
      "Utah custom home builder serving Park City, Deer Valley, Heber Valley, and Utah County. Custom homes, framing, remodels, and steel installation. Where Building Begins.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elevation 100 LLC — Custom Home Builder in Utah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elevation100",
    creator: "@elevation100",
    title:
      "Custom Home Builder Utah | Park City Contractor | Elevation 100",
    description:
      "Utah custom home builder serving Park City, Deer Valley, Heber Valley, and Utah County.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Construction",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/logo.png"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main id="main" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
