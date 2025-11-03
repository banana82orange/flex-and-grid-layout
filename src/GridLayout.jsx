import React from "react";
import "./style/Box.css";
import imgTest from "./assets/react.svg";
import Card from "./component/Card";
function GridLayout() {
  return (
    <div className="bg-black h-auto text-white">
      <h1>gridLayout for bento</h1>
      <div className="grid grid-cols-3 grid-rows-3  gap-5 py-5 mx-5">
        <box className="row-start-1 row-span-2 col-start-1 col-span-1 flex items-center justify-center">
          <div>unit1</div>
        </box>
        <box className="col-start-2 col-span-2">unit2</box>
        <box className="row-start-2 row-span-1 col-start-2 col-span-1">
          unit3
        </box>
        <box className="row-start-2 row-span-2 col-start-3 col-span-1">
          unit4
        </box>
        <box className="row-start-3 row-span-1 col-start-1 col-span-2">
          unit5
        </box>
      </div>
      <h1>text over image</h1>
      <div className="grid items-center justify-center">
        <div className="col-start-1 row-start-1">
          <img src={imgTest} className="h-[250px]"></img>
        </div>
        <div className="col-start-1 row-start-1 text-red-500 text-[2.0rem]">
          testing text in image
        </div>
      </div>

      <h1>Grid wraping example 1</h1>
      <div className="my-5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(0,300px))] gap-5 justify-center justify-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <h1>Grid wraping example 2</h1>
      {/* set number per column per row  */}
      <div className="my-5">
        <div className="grid grid-cols-[repeat(2,minmax(0,300px))] gap-5 justify-center justify-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default GridLayout;
