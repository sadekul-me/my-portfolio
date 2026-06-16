import { personalData } from "@/utils/data/personal-data";

import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// ==============================
// Fetch Latest Blogs
// ==============================
async function getBlogs() {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`,
      {
        next: {
          revalidate: 3600, // 1 hour cache
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs (${response.status})`);
    }

    const articles = await response.json();

    return articles.filter((article) => article?.cover_image).slice(0, 6);
  } catch (error) {
    console.error("Blog Fetch Error:", error);

    return [];
  }
}

// ==============================
// Home Page
// ==============================
export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main suppressHydrationWarning>
      <HeroSection />

      <AboutSection />

      <Experience />

      <Skills />

      <Projects />

      <Education />

      <Blog blogs={blogs} />

      <ContactSection />
    </main>
  );
}
