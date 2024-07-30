import React from "react";
import MissionCard from "../components/mission-card/MissionCard";
import MissionVisionLayout from "../components/mission-card/MissionVisionLayout";
import OurSucess from "../components/our-success/OurSucess";
import ChooseUs from "../components/why-choose-us/ChooseUs";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MissionVisionLayout />
      <ChooseUs />
      <OurSucess />
    </div>
  );
}

export default Layout;
