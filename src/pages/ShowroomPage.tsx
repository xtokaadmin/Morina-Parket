import React from "react";
import ShowroomHeroSection from "../components/sections/showroom/ShowroomHeroSection";
import ShowroomSection from "../components/sections/showroom/ShowroomSection";

const ShowroomPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ShowroomHeroSection />
      <ShowroomSection images={{ main: "/assets/showroom/main.jpg" }} />
    </div>
  );
};

export default ShowroomPage;
