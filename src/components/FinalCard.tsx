"use client";
import React from "react";
import html2canvas from "html2canvas";
import { Button } from "./ui/button";
import Image from "next/image";
import icon from "../app/favicon.ico";
import luffy from "../../public/luffy.jpeg"
import { useAppContext } from "@/context";
const FinalCard = () => {
  const { state, setState } = useAppContext();
  ;
  const takeShot = () => {
    const element = document.getElementById("takeShot") as HTMLElement;
    html2canvas(element).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = img;
      link.click();
    });
  };
  //console.log(state)
  return (
    <div className="flex items-center border border-gray-600 h-auto flex-col">
      <div className={`${state.theme==='Dark' ? "bg-black text-white" :"bg-white text-black"}   p-5 w-[90%] mt-5`} id="takeShot">
        <div className="flex gap-x-5 items-center">
          <div className="rounded-full object-contain w-[50px] h-[50px] flex items-center justify-center">
            <Image
              src={state.image ? state.image : luffy}
              className="w-full h-full rounded-full object-cover"
              width={50}
              height={50}
              alt="icon"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-bold">{state.name}</p>
            <p className="text-sm text-gray-400">@{state.username}</p>
          </div>
        </div>
        <div>
            <p className="text-xl mt-3">{state.thoughts} </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 font-bold text-xl text-[#0077B5]">
          {
            state.hashtags.map((tag:string)=>(
              <p>#{tag}</p>
            ))
          }
            
         
        </div>
      </div>
      <Button className="items-end bg-black text-white hover:bg-gray-700 mt-5 mb-3" onClick={takeShot}>Download</Button>
    </div>
  );
};

export default FinalCard;
