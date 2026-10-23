import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesStrip from "@/components/FeaturesStrip";
import FeaturedSnacks from "@/components/FeaturedSnacks";
import BundlesBanner from "@/components/BundlesBanner";
import WhyFamilies from "@/components/WhyFamilies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Same purple — header + hero connected */}
      <div className="bg-[#6916D4]">
        <Header />
        <Hero />
      </div>
      <main className="flex-1">
        <FeaturesStrip />
        <FeaturedSnacks />
        <BundlesBanner />
        <WhyFamilies />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
