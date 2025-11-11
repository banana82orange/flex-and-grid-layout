import React from "react";
import Card_TextOverImage from "../component/Card_TextOverImage";

function MixLayout() {
  return (
    <div className="bg-black text-white text-3xl">
      This layout use grid and flex layout
      {/* use grid layout for overall*/}
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[minmax(200px,500px)]  gap-4">
        <div className="w-full row-start-1 row-span-1 ">
          <Card_TextOverImage />
        </div>
        {/* usr flex layout for right side */}
        <div className="w-full flex flex-col gap-4">
          <div className="h-1/2">
            <Card_TextOverImage />
          </div>
          <div className="h-1/2 flex flex-row gap-4">
            <div className="w-1/2">
              <Card_TextOverImage />
            </div>
            <div className="w-1/2">
              <Card_TextOverImage />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black opacity-80 h-[600px]"></div>
    </div>
  );
}

export default MixLayout;
