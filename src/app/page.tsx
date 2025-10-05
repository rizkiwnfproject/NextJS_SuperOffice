import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import BenefitSection from "@/features/benefits/sections/BenefitSection";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSection from "@/features/offices/sections/FreshSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CitiesSection /> 
      <BenefitSection />
      <FreshSection />
    </>
  );
}
