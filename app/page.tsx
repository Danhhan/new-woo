import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CoursesSection from "@/components/courses-section";
import TeachingMethods from "@/components/teaching-methods";
import WhyChooseUs from "@/components/why-choose-us";
import CourseRoadmap from "@/components/course-roadmap";
import LearningApproaches from "@/components/learning-approaches";
import Footer from "@/components/footer";
import RoadmapSection from "@/components/road-map-section";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<HeroSection />
			<AboutSection />
			<RoadmapSection />
			<CoursesSection />
			<TeachingMethods />
			<WhyChooseUs />
			<CourseRoadmap />
			<LearningApproaches />
			<Footer />
		</main>
	);
}
