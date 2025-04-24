import React from "react";
import HeroSection from "./HeroSection";
import ToolsSection from "./ToolsSection";
import CompanyLogos from "./CompanyLogos";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";
import TeamSection from "./TeamSection";
import Pricing from "./Pricing";
import FAQS from "./FAQS";
import Products from "./Products";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <Services />
      <Testimonial />
      <Blogs />
      <TeamSection />
      <Pricing />
      <FAQS />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
