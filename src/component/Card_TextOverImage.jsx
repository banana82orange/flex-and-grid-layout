import React from "react";
import img from "../assets/react.svg";
function Card_TextOverImage() {
  return (
    <div className="grid  items-center justify-center text-center bg-gray-400 h-full">
      <div className="col-start-1 row-start-1 flex justify-center h-full">
        <img src={img} className="object-cover" />
      </div>
      <div className="col-start-1 row-start-1">
        <div>name</div>
        <div>job</div>
        <div>admin</div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <div>email</div>
          <div>call</div>
        </div>
      </div>
    </div>
  );
}

export default Card_TextOverImage;
