import React from "react";
import MissionCard from "./MissionCard";
function MissionVisionLayout() {
  const cards = [
    {
      title: "Our Mission",
      content:
        "Our mission is to champion sustainable living by providing state-of-the-art solutions in essential oils, phytochemical extraction, agro-processing, regenerative agriculture, renewable energy, and hydroponics. We are committed to delivering the highest standards of quality and customer satisfaction while reducing our ecological footprint.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to be at the forefront of sustainable practices and biotechnological innovation, setting new benchmarks for quality and environmental integrity. We aspire to empower communities and industries globally with our eco-conscious products and services, fostering a healthier and more sustainable future for all.",
    },
  ];
  return (
    <div className="bg-[#F2FBE0] flex flex-col justify-center items-center gap-y-4 py-12 px-8 md:flex-row md:gap-x-6">
      {cards.map((card) => (
        <MissionCard card={card} key={card.title} />
      ))}
    </div>
  );
}
// flex flex-row gap-x-7 justify-center py-16 px-20
export default MissionVisionLayout;
