import React from "react";

function MissionCard({ card }) {
  return (
    <div className="w-full self-stretch bg-[#FF9E67] flex flex-col gap-y-4 px-10 py-10 rounded-3xl sm:gap-y-6 sm:px-11 sm:py-16">
      <div className="font-semibold text-4xl font-el-messiri">{card.title}</div>
      <div className="font-normal text-justify leading-7 font-poppins">
        {card.content}
      </div>
    </div>
  );
}

export default MissionCard;
