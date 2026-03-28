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
// Fetch Blogs with Fallback
// ==============================
async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

    if (!res.ok) {
      throw new Error(`Dev.to API returned status ${res.status}`);
    }

    const data = await res.json();

    // Filter only blogs with cover_image & shuffle randomly
    const filtered = data
      .filter(item => item?.cover_image)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5); // optional: limit to 5 blogs

    return filtered;
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return []; // fallback: empty array
  }
}

// ==============================
// Home Component
// ==============================
export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}