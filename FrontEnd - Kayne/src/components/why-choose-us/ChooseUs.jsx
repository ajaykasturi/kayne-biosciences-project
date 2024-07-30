import React from "react";
import Card from "./Card";
function ChooseUs() {
  const cards = [
    {
      title: "Top Quality",
      content:
        "We ensure the highest standards in all our products and services.",
    },
    {
      title: "Innovation-Driven",
      content:
        "We leverage the latest technologies for cutting-edge solutions.",
    },
    {
      title: "Sustainable Practice",
      content: "Our operations focus on minimizing environmental impact.",
    },
    {
      title: "Customer-Centric",
      content: "We prioritize your needs and deliver tailored solutions.",
    },
    {
      title: "Expert Team",
      content:
        "Our experienced professionals guarantee exceptional service and support.",
    },
    {
      title: "Extensive Research",
      content:
        "We invest in continuous research to stay ahead in industry advancements.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-10 my-16">
      <div className="flex flex-col gap-y-5 items-center">
        <div className="font-el-messiri font-medium text-4xl">
          Why Choose Us?
        </div>
        <div className="w-3/4 sm:w-4/5 md:w-3/5 lg:w-1/2 text-justify leading-snug">
          With over a decade of industry experience, our team provides top-notch
          solutions tailored to your needs. We deliver exceptional quality and
          excellence in every project, ensuring your satisfaction.
        </div>
      </div>
      <div
        className="flex flex-col gap-y-6 items-center justify-center sm:grid sm:grid-cols-[18rem_18rem] sm:gap-y-8 sm:gap-x-9 sm:justify-items-center 
        md:gap-y-10 md:gap-x-12 lg:gap-y-12 lg:gap-x-14
      xl:grid-cols-[18rem_18rem_18rem] xl:gap-y-14 xl:gap-x-16"
      >
        {cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
    </div>
  );
}

export default ChooseUs;
