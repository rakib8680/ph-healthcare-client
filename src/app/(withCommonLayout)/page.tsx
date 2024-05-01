import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/Ui/HomePage/HowItWorks/HowItWorks";
import Specialties from "@/components/Ui/HomePage/Specialties/Specialties";
import TopRatedDoctors from "@/components/Ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/Ui/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialties />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
    </>
  );
};

export default HomePage;
