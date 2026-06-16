// app/layout.js

import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/helper/scroll-to-top";

import "react-toastify/dist/ReactToastify.css";
import "./css/globals.scss";
import "./css/card.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sadekulislam.netlify.app";
const siteName = "Sadekul Islam Portfolio";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sadekul Islam (Li Ao) | Software Engineer",
    template: "%s | Sadekul Islam",
  },

  description:
    "Sadekul Islam (Li Ao) is a Software Engineering student in China, CTO & Shareholder at AnyWin Human Tech Limited, and a Full-Stack Developer specializing in AI systems, Human-Computer Interaction (HCI), automation, scalable web applications, and digital product engineering.",

  keywords: [
    "Sadekul Islam",
    "Sadik",
    "Li Ao",
    "利奥",

    "Software Engineer",
    "Software Engineering Student",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",

    "CTO",
    "Chief Technology Officer",
    "Shareholder",

    "AnyWin Human Tech Limited",

    "AI Developer",
    "AI Engineer",
    "Artificial Intelligence",
    "AI Systems",
    "AI Automation",

    "Human Computer Interaction",
    "HCI",

    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",

    "Web Application Developer",
    "Software Architect",

    "InWuxi",
    "InChina",
    "Wuxi University of Technology",

    "Bangladeshi Developer",
    "Developer in China",
  ],

  authors: [
    {
      name: "Sadekul Islam",
      url: siteUrl,
    },
  ],

  creator: "Sadekul Islam",
  publisher: "Sadekul Islam",

  verification: {
    google: "qHQ0OYPUhMTRuAO8OeJkL3rMVxRX5RP5ls8WgLaJuSY",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sadekul Islam (Li Ao) | Software Engineer",
    description:
      "Software Engineering student, CTO, and Full-Stack Developer focused on AI systems, automation, HCI, and scalable web technologies.",
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/Sadekul Islam.png",
        width: 1280,
        height: 640,
        alt: "Sadekul Islam (Li Ao) Software Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sadekul Islam (Li Ao) | Software Engineer",
    description:
      "CTO, Software Engineering Student, and Full-Stack Developer specializing in AI systems, automation, and HCI.",
    creator: "@SadekulDev",
    images: ["/Sadekul Islam.png"],
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Sadekul Islam",

  alternateName: [
    "Sadik",
    "Li Ao",
    "利奥",
  ],

  url: siteUrl,

  image: `${siteUrl}/Sadekul Islam.png`,

  description:
    "Software Engineering student in China, CTO & Shareholder at AnyWin Human Tech Limited, and Full-Stack Developer focused on AI systems, HCI, automation, and scalable web applications.",

  jobTitle: [
    "Software Engineer",
    "Chief Technology Officer",
  ],

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Wuxi University of Technology",
  },

  worksFor: {
    "@type": "Organization",
    name: "AnyWin Human Tech Limited",
  },

  memberOf: {
    "@type": "Organization",
    name: "InWuxi",
  },

  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "AI Systems",
    "Human-Computer Interaction",
    "Automation Systems",
    "Computer Vision",
    "Full Stack Development",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "C++",
    "Python",
    "C#",
    "SQL Server",
  ],

  sameAs: [
    "https://github.com/sadekul-me",
    "https://www.linkedin.com/in/sadekulislam-dev/",
    "https://www.facebook.com/sadekulislam.me",
    "https://x.com/sadekul_me",
    "https://dev.to/sadekul-me",
    "https://www.wikidata.org/wiki/Q138819606",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
        />

        <main className="relative mx-auto min-h-screen px-6 text-white sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>

        <Footer />

        {process.env.NEXT_PUBLIC_GTM && (
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GTM}
          />
        )}
      </body>
    </html>
  );
}