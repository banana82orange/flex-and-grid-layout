import React from "react";
import "../style/Box.css";
import Card_v2 from "../component/Card_v2";

function FlexLayout() {
  return (
    <div>
      <div className="mx-auto flex flex-col w-full h-auto bg-black text-white gap-y-10">
        {/*  */}
        <div>
          <h1>justify-center</h1>
          <div className="flex flex-row justify-center items-center  h-[300px] bg-white">
            <box>unit1</box>
            <box>unit2</box>
            <box>unit3</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>justify-around</h1>
          <div className="flex flex-row justify-around items-center  h-[300px] bg-white">
            <box>unit1</box>
            <box>unit2</box>
            <box>unit3</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>justify-between</h1>
          <div className="flex flex-row justify-between items-center  h-[300px] bg-white">
            <box>unit1</box>
            <box>unit2</box>
            <box>unit3</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>justify-start</h1>
          <div className="flex flex-row justify-start items-center  h-[300px] bg-white">
            <box>unit1</box>
            <box>unit2</box>
            <box>unit3</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>justify-end</h1>
          <div className="flex flex-row justify-end items-center  h-[300px] bg-white">
            <box>unit1</box>
            <box>unit2</box>
            <box>unit3</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>items-start</h1>
          <div className="flex flex-row justify-center items-start  h-[300px] bg-white">
            <box>unit1</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>items-start</h1>
          <div className="flex flex-row justify-center items-start  h-[300px] bg-white">
            <box className="py-[30px]">unit1</box>
            <box className="py-[40px]">unit1</box>
            <box className="py-[50px]">unit1</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>items-center</h1>
          <div className="flex flex-row justify-center items-center  h-[300px] bg-white">
            <box className="py-[30px]">unit1</box>
            <box className="py-[40px]">unit1</box>
            <box className="py-[50px]">unit1</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>items-end</h1>
          <div className="flex flex-row justify-center items-end  h-[300px] bg-white">
            <box className="py-[30px]">unit1</box>
            <box className="py-[40px]">unit1</box>
            <box className="py-[50px]">unit1</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>items-stretch</h1>
          <div className="flex flex-row justify-center items-center-safe  h-[300px] bg-white">
            <box className="py-[30px]">unit1</box>
            <box className="py-[40px]">unit1</box>
            <box className="py-[50px]">unit1</box>
          </div>
        </div>
        {/*  */}
        <div>
          <h1>items-baseline</h1>
          <div className="flex flex-row justify-center items-baseline  h-[300px] bg-white">
            <box className="py-[30px]">unit1</box>
            <box className="py-[40px]">unit1</box>
            <box className="py-[50px]">unit1</box>
          </div>
        </div>
        {/*  */}
        <h1>flex wrap version</h1>
        <div className="flex flex-wrap mx-[5vw] gap-x-0 gap-y-2 justify-start">
          <div className="w-full min-w-[250px]">
            <Card_v2 />
          </div>
          <div className="w-full sm:w-1/5 min-w-[250px]">
            <Card_v2 />
          </div>
          <div className="w-full sm:w-1/5 min-w-[250px]">
            <Card_v2 />
          </div>
          <div className="w-full sm:w-1/5 min-w-[250px]">
            <Card_v2 />
          </div>
          <div className="w-full sm:w-1/5 min-w-[250px]">
            <Card_v2 />
          </div>
          <div className="w-full sm:w-1/5 min-w-[250px]">
            <Card_v2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexLayout;
