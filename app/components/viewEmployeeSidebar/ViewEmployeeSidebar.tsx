"use client";
import USER from "../../assets/icons/user white.svg";
import BREAFCASE from "../../assets/icons/briefcase white.svg";
import LOCK from "../../assets/icons/lock white.svg";
import DOCUMENT from "../../assets/icons/document-text white.svg";
import Image from "next/image";
import React, { useState } from "react";
interface ViewEmployeeSidebarProps {
  selectedTab: (tab: number) => void;
}

const ViewEmployeeSidebar: React.FC<ViewEmployeeSidebarProps> = ({
  selectedTab,
}) => {
  const [localSelectedTab, setLocalSelectedTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setLocalSelectedTab(tabIndex);
    selectedTab(tabIndex);
  };

  return (
    <div className="flex flex-col  text-white h-[224px]  max-w-[242px] border-[1px] border-secondry rounded-lg ">
      <div
        className={`flex flex-row cursor-pointer px-5 py-4 w-full h-[56px] rounded-lg items-center ${
          localSelectedTab === 0 ? "bg-primary " : ""
        } `}
        onClick={() => handleTabClick(0)}
      >
        <Image src={USER} alt="user" />

        <h1 className="p-3">Profile</h1>
      </div>
      <div
        className={`flex flex-row cursor-pointer px-5 py-4 w-full h-[56px] rounded-lg items-center  ${
          localSelectedTab === 1 ? "bg-primary " : ""
        } `}
        onClick={() => handleTabClick(1)}
      >
        <Image src={BREAFCASE} alt="user" />

        <h1 className="p-3">Attendence</h1>
      </div>
      <div
        className={`flex flex-row cursor-pointer px-5 py-4 w-full h-[56px] rounded-lg items-center ] ${
          localSelectedTab === 2 ? "bg-primary" : ""
        } `}
        onClick={() => handleTabClick(2)}
      >
        <Image src={DOCUMENT} alt="user" />
        <h1 className="p-3">Projects</h1>
      </div>
      <div
        className={`flex flex-row cursor-pointer px-5 py-4 h-[56px] w-full rounded-lg items-center  ${
          localSelectedTab === 3 ? "bg-primary " : ""
        } `}
        onClick={() => handleTabClick(3)}
      >
        <Image src={LOCK} alt="user" />

        <h1 className="p-3">Leave</h1>
      </div>
    </div>
  );
};
export default ViewEmployeeSidebar;
