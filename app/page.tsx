import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CoursesSection from "@/components/courses-section";
import RoadmapSection from "@/components/road-map-section";
import TeachingMethods from "@/components/teaching-methods";
import WhyChooseUs from "@/components/why-choose-us";
import LearningApproaches from "@/components/learning-approaches";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero - Landing Section */}
      <HeroSection />

      {/* About - Company Introduction */}
      <AboutSection />

      {/* Courses - Available Programs */}
      <CoursesSection />

      {/* Roadmap - Teen Learning Journey (Main Feature) */}
      <RoadmapSection />

      {/* Teaching Methods - How We Teach */}
      <TeachingMethods />

      {/* Why Choose Us - Competitive Advantages */}
      <WhyChooseUs />

      {/* Learning Approaches - Methodologies */}
      <LearningApproaches />

      {/* Footer - Contact & Info */}
      <Footer />
    </main>
  );
}
