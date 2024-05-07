import { HOMEICONS, ICON } from "@/app/constants/images";
import Image from "next/image";
import React from "react";

export default function DepartmentEmployee({
  employeename,
  Designation,
}: {
  employeename: string | undefined;
  Designation: string | undefined;
}) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex felx-row gap-4">
          <div>
            <Image
              src={HOMEICONS.USER}
              alt="User"
              className="w-[40px] h-[40px]"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold">{employeename}</h1>
            <p className="text-[12px] text-lightWhite">{Designation}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src={ICON.RIGHTARROW}
            alt="right arrow"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>
    </>
  );
}
