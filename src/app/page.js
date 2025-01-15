
import Banner from "../Components/Banner";
import ServicesSection from "../Components/ServicesSection";
import AboutSection from "../Components/AboutSection";
import GallerySection from "../Components/GallerySection";
import TestimonialsSection from "../Components/TestimonialsSection";
import FAQsSection from "../Components/FAQsSection";
import ContactUsSection from "../Components/ContactUsSection";
import AdBanner from "../Components/AdBanner";
import AdSense from "../Components/AdSense";


const page = () => {

  return (
    <div>
      <div>



        <Banner></Banner>
        <div className="flex w-full justify-center mt-5 items-center gap-4">
          <div>
            <h1>Google Adsense</h1>
            <AdBanner />

          </div>
        </div>

        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <div className="flex w-full justify-center items-center gap-4">
          <div>
            <h1>Google Adsense</h1>
            <AdSense />  
    
          </div>
        </div>
        <FAQsSection />
        <ContactUsSection />
      </div>
    </div >
  );
};

export default page;
