import React from "react";

function OurSucess() {
  const successConfig = [
    { name: "Clients", content: "15K+" },
    { name: "Total Success", content: "75%" },
    { name: "Chief Experts", content: "26" },
    { name: "Years of Experience", content: "16" },
  ];
  return (
    <div className="bg-[#FF9E67] py-16 flex flex-col gap-y-12 justify-center items-center px-10">
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="text-[#442220] font-el-messiri text-5xl font-medium">
          Our Success
        </div>
        <div className="font-poppins font-normal text-base md:w-1/2 text-justify">
          We have achieved significant milestones in our journey, thanks to the
          dedication and hard work of our team. Our commitment to excellence
          continues to drive us forward. Our commitment to excellence continues
          to drive us forward.
        </div>
      </div>
      <div className="flex flex-row gap-x-16 justify-center items-center flex-wrap">
        {successConfig.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center mb-4"
          >
            <div className="text-[#F2FBE0] font-light text-7xl drop-shadow-sm">
              {item.content}
            </div>
            <div className="font-poppins font-normal text-xl drop-shadow-sm">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurSucess;
