import AboutSection from "@/Components/AboutSection";
import Banner from "@/Components/Banner";
import ServicesSection from "@/Components/ServicesSection";
import TestimonialsSection from "@/Components/TestimonialsSection";

import FAQsSection from "@/Components/FAQsSection";
import ContactUsSection from "@/Components/ContactUsSection";
import GallerySection from "@/Components/GallerySection";

const page = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQsSection />
        <ContactUsSection />
      </div>
    </div>
  );
};

export default page;
