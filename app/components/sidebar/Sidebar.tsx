"use client";
import Image from "next/image";
import SUN from "../../assets/icons/sun.svg";
import React, { useState } from "react";
import ICON from "../../assets/icons/Vector.svg";
import Link from "next/link";
import WEATHER from "../../assets/icons/weather.svg";
import { SIDE_BAR_ICONS } from "@/app/constants/sidebarIcons";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const router = usePathname();
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <aside className=" overflow-auto top-0 left-0 mx-3 my-2 fixed flex flex-col justify-between bg-danger  rounded-3xl text-white max-w-72  h-full">
      <div className="mt-5 mx-auto">
        <Image src={ICON} height={32} width={88} alt={"ICON"} />
        <div className="mt-10">
          <ul className="space-y-2">
            {SIDE_BAR_ICONS.map((link, i: number) => {
              return (
                <Link href={link.path} key={i} className="">
                  <div
                    className={` ${
                      router === link.path
                        ? "border-l-[3px] border-primary flex flex-row gap-4  hover:bg-primary  hover:rounded hover:bg-opacity-5 my-[6px] active:bg-primary focus:outline-none hover:w-full w-full p-2 text-primary bg-[#E253190D]"
                        : "flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:bg-opacity-5 my-[6px]                         active:bg-primary focus:outline-none"
                    }  my-[5px] flex`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      className="my-auto "
                    />
                    <h5>{link.name}</h5>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[220px] mb-4 px-2 h-[50px] flex flex-row mx-auto">
        <button
          className={` rounded-md flex flex-row justify-center items-center gap-2 w-[110px] h-[50px] ${
            mode === "light" ? "bg-primary" : ""
          }`}
          onClick={handleModeChange}
        >
          <Image src={WEATHER} alt={""} width={18} height={18} />
          Light
        </button>
        <button
          className={` justify-center rounded-md items-center flex flex-row gap-2 w-[110px] h-[50px] ${
            mode === "dark" ? "bg-primary" : ""
          }`}
          onClick={handleModeChange}
        >
          <Image src={SUN} alt={"sun"} width={18} height={18} />
          Dark
        </button>
      </div>
    </aside>
  );
}
