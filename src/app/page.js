import AboutSection from "@/Components/AboutSection";
import Banner from "@/Components/Banner";
import FeaturesSection from "@/Components/FeaturesSectio";
import ServicesSection from "@/Components/ServicesSection";
import TestimonialsSection from "@/Components/TestimonialsSection";

const page = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <FeaturesSection />
        <AboutSection />
        <ServicesSection/>
      <TestimonialsSection/>
      </div>
    </div>
  );
};

export default page;
