import React from "react";
import relume from "../../assets/icons/relume.svg";
function Card({ card }) {
  return (
    <div className="bg-[#BEEE62] flex flex-col justify-start size-[18rem] gap-y-5 px-6 py-10 rounded-3xl">
      <div className="w-[3.125rem]">
        <img src={relume} className="w-full h-full object-cover" />
      </div>
      <div className="font-el-messiri font-bold text-2xl">{card.title}</div>
      <div className="font-poppins font-normal text-base">{card.content}</div>
    </div>
  );
}

export default Card;
