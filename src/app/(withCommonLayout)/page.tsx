import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";
import Specialties from "@/components/Ui/HomePage/Specialties/Specialties";
import TopRatedDoctors from "@/components/Ui/HomePage/TopRatedDoctors/TopRatedDoctors";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialties />
      <TopRatedDoctors />
    </>
  );
};

export default HomePage;
