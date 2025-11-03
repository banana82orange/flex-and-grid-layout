import React from "react";
import img from "../assets/react.svg";
function Card() {
  return (
    <div className="flex flex-col items-center bg-gray-500 w-full">
      <div>
        <img src={img} />
      </div>
      <div>
        <div>name</div>
        <div>job</div>
        <div>admin</div>
      </div>
      <div className="flex flex-row gap-5">
        <div>email</div>
        <div>call</div>
      </div>
    </div>
  );
}

export default Card;
