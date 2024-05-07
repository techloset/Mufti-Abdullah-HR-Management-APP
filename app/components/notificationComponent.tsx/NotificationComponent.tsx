import USER from "../../assets/icons/Ellipse 1192.svg";
import Image from "next/image";
import React from "react";

export default function NotificationComponent() {
  return (
    <div className="flex flex-row py-3 justify-between">
      <div className="flex felx-row gap-4">
        <div className="w-[40px] h-[40px]">
          <Image src={USER} alt="User" className="w-[40px] h-[40px]" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[16px] font-bold text-white">
            Department Employee
          </h1>
          <p className="text-[12px] text-lightWhite">
            This is the department employee page.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <h1 className="text-lightWhite text-[16px]">time</h1>
      </div>
    </div>
  );
}
