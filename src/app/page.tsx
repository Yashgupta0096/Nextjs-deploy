import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import AnimatedCards from "@/components/AnimatedCards";
import MeetTheAppSection from "@/components/MeetTheAppSection";
import SelfImprovementSection from "@/components/SelfImprovementSection";
import FeedbackSection from "@/components/FeedbackSection";
import PrivacySection from "@/components/PrivacySection";
import VacanciesSection from "@/components/VacanciesSection";

export default function Home() {
  return (
    <main className="flex min-h-10 flex-col items-center justify-between">
      <Navbar />
      <Header />
      <InfoSection />
      <AnimatedCards />
      <MeetTheAppSection />
      <SelfImprovementSection />
      <FeedbackSection />
      <PrivacySection />  
      <VacanciesSection />
    </main>
  );
}
