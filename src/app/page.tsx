import Image from "next/image";
import HerosSection from "./components/Herosection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCards from "./components/TestimonialCards";
import Instructors from "./components/Instructor";
import Footer from "./components/Footer";

export default function Home() {
  return (
       <main className="min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.02] "  >
    <HerosSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <Instructors/>
    <Footer/>

       </main>
    
  
  );
}
