import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RolesSection from "@/components/sections/RolesSection";
import FlowSection from "@/components/sections/FlowSection";
import MockupsSection from "@/components/sections/MockupsSection";
import PricingSection from "@/components/sections/PricingSection";
import CompareSection from "@/components/sections/CompareSection";
import DemoSection from "@/components/sections/DemoSection";
import TimelineSection from "@/components/sections/TimelineSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main style={{ background: "var(--cream)", overflowX: "hidden" }}>
      <HeroSection />
      <AboutSection />
      <RolesSection />
      <FlowSection />
      <MockupsSection />
      <DemoSection />
      <PricingSection />
      <CompareSection />
      <TimelineSection />
      <FaqSection />
      <ContactSection />
      <footer
        className="text-center py-8 px-10 text-[0.78rem] border-t"
        style={{
          color: "var(--muted-brand)",
          borderColor: "var(--border-brand)",
          fontFamily: "var(--font-body)",
        }}
      >
        <p>
          Tài liệu được chuẩn bị bởi{" "}
          <strong style={{ color: "var(--dark)", fontWeight: 500 }}>
            Huỳnh Ngọc Sơn
          </strong>{" "}
          · Freelancer phát triển web · 2026
        </p>
      </footer>
    </main>
  );
}
