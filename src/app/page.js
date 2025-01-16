
import Banner from "../Components/Banner";
import ServicesSection from "../Components/ServicesSection";
import AboutSection from "../Components/AboutSection";
import GallerySection from "../Components/GallerySection";
import TestimonialsSection from "../Components/TestimonialsSection";
import FAQsSection from "../Components/FAQsSection";
import ContactUsSection from "../Components/ContactUsSection";



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
    </div >
  );
};

export default page;
