import React from "react";
import Card_TextOverImage from "../component/Card_TextOverImage";

function MixLayout() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[minmax(150px,250px)]  gap-4">
        <div className="w-full row-start-1 row-span-1 ">
          <Card_TextOverImage />
        </div>
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
