// app/layout.js (Next.js 13+ RootLayout)
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// High SEO optimized metadata
export const metadata = {
  title: "Sadekul Islam (Lì Ào) - Software Engineer Portfolio",
  description:
    "I am Sadekul Islam (Lì Ào), a Software Engineering student at Wuxi University of Technology, China. Passionate about Full-Stack development, React, and building impactful digital solutions.",
 keywords: [
  "Sadekul Islam",
  "Sadekul Islam Sadik",
  "Lì Ào",
  "利奥",
  "Software Engineer",
  "Bangladeshi Software Engineer",
  "Software Engineer Portfolio",
  "Software Engineering student in China",
  "Wuxi University of Technology",
  "Gesture Controlled AI",
  "Human Computer Interaction",
  "HCI System",
  "Lì Ào Engine",
  "Computer Vision Project",
  "sadekul-me",
  "sadekulislam.me"
],
  authors: [{ name: "Sadekul Islam" }],
  creator: "Sadekul Islam",
  publisher: "Sadekul Islam",
  // Google Search Console Verification
  verification: {
    google: "qHQ0OYPUhMTRuAO8OeJkL3rMVxRX5RP5ls8WgLaJuSY",
  },
  openGraph: {
    title: "Sadekul Islam | Software Engineer Portfolio",
    description: "Creative Full-Stack Developer & Software Engineering student at Wuxi University of Technology.",
    url: "https://sadekulislam.netlify.app",
    siteName: "Sadekul Islam Portfolio",
    images: [
      {
        url: "/Sadekul Islam.png",
        width: 1280,
        height: 640,
        alt: "Sadekul Islam - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadekul Islam | Software Engineer",
    description: "Software Engineering student at Wuxi University of Technology, China.",
    images: ["/Sadekul Islam.png"],
    creator: "@SadekulDev",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sadekul Islam",
              url: "https://sadekulislam.netlify.app",
              sameAs: [
                "https://github.com/SadekulDev",
                "https://linkedin.com/in/SadekulIslam",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Wuxi University of Technology",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Toasts for notifications */}
        <ToastContainer />

        {/* Main layout */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>

        <Footer />

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
