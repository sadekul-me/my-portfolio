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

// 🚀 HIGHLY OPTIMIZED SEO METADATA
export const metadata = {
  title: "Sadekul Islam (Lì Ào) - Software Engineering Student & HCI Enthusiast",
  description:
    "Sadekul Islam (Lì Ào) is a Software Engineering student in China focused on Human-Computer Interaction, AI systems, and computer vision projects. Creator of the Lì Ào Engine.",
  keywords: [
    "Sadekul Islam",
    "Sadekul Islam Sadik",
    "Lì Ào",
    "利奥",
    "Software Engineering Student",
    "HCI Developer",
    "Bangladeshi Developer",
    "Software Engineering student in China",
    "Wuxi University of Technology",
    "Gesture Controlled AI",
    "Human Computer Interaction",
    "Computer Vision Project",
    "AI Developer Student",
    "sadekul-me",
    "sadekulislam.me"
  ],
  authors: [{ name: "Sadekul Islam" }],
  creator: "Sadekul Islam",
  publisher: "Sadekul Islam",

  verification: {
    google: "qHQ0OYPUhMTRuAO8OeJkL3rMVxRX5RP5ls8WgLaJuSY",
  },

  openGraph: {
    title: "Sadekul Islam | Software Engineering Student",
    description:
      "Creative developer focused on AI, HCI, and computer vision systems.",
    url: "https://sadekulislam.netlify.app",
    siteName: "Sadekul Islam Portfolio",
    images: [
      {
        url: "/Sadekul Islam.png",
        width: 1280,
        height: 640,
        alt: "Sadekul Islam - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sadekul Islam | Developer Portfolio",
    description:
      "Software Engineering student focused on AI, HCI & Computer Vision.",
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
        {/* 🔥 JSON-LD Structured Data (Google Identity Graph Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Sadekul Islam",
              alternateName: ["Sadik", "Lì Ào", "利奥"],

              url: "https://sadekulislam.netlify.app",

              sameAs: [
                "https://www.wikidata.org/wiki/Q138819606",
                "https://github.com/sadekul-me",
                "https://www.linkedin.com/in/sadekulislam-me/",
                "https://www.facebook.com/sadekulislam.me",
                "https://x.com/sadekul_me",
                "https://dev.to/sadekul-me"
              ],

              jobTitle: "Software Engineering Student & HCI Enthusiast",

              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Wuxi University of Technology",
              },

              "knowsAbout": [
                "Software Engineering",
                "Human-Computer Interaction",
                "Artificial Intelligence",
                "Computer Vision",

                "C",
                "C++",
                "JavaScript",
                "Python",

                "React",
                "C#",
                "SQL",

                "HTML",
                "CSS",
                "Tailwind CSS"
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {/* 🔔 Toast Notifications */}
        <ToastContainer />

        {/* 📱 Main Layout */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>

        <Footer />

        {/* 📊 Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}