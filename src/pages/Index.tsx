import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { FocusAreasSection } from "@/components/home/FocusAreasSection";
import { WhyPartnerSection } from "@/components/home/WhyPartnerSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ApproachSection />
      <FocusAreasSection />
      <WhyPartnerSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
