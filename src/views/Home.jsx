import React from "react";
import MainSection from "../components/MainSection";
import RecommendedProducts from "../components/RecommendedProducts";
import MisionVision from "../components/MisionVision";
import Footer from "../components/Footer";
import AllCategories from "../components/AllCategories";

const Home = () => {
  return (
    <div>
      <MainSection />
      <RecommendedProducts />
      <MisionVision />
      <RecommendedProducts />
      <AllCategories />
      <Footer />
    </div>
  );
};

export default Home;
