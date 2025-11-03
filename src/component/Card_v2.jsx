import React from "react";
import img from "../assets/react.svg";
function Card_v2() {
  return (
    <div className="grid grid-rows-[1fr_auto_auto_auto] items-center justify-center text-center bg-gray-400 w-full">
      <div className="flex justify-center">
        <img src={img} className="w-full h-auto" />
      </div>
      <div>
        <div>name</div>
        <div>job</div>
        <div>admin</div>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <div>email</div>
        <div>call</div>
      </div>
    </div>
  );
}

export default Card_v2;
