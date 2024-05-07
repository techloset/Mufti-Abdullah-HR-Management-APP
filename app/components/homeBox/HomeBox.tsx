import React from "react";
import Image from "next/image";
import { HOMEICONS } from "@/app/constants/images";
import { HomeBoxProps } from "@/app/constants/types";

const HomeBox: React.FC<HomeBoxProps> = ({
  iconSrc,
  title,
  totalCount,
  updateDate,
}) => {
  return (
    <div className="border-[1px] border-secondry rounded-lg">
      <div className="flex flex-row items-center px-[26px] pt-4 gap-4 mb-5 text-white">
        <Image src={iconSrc} alt={title} />
        <h2 className="text-[14px]">{title}</h2>
      </div>

      <div className="flex flex-row ps-[26px] pr-[56px] justify-between text-white">
        <h1 className="text-white text-[30px] font-semibold">{totalCount}</h1>
        <Image src={HOMEICONS.GREEEN} alt="green heart" />
      </div>
      <div className="border-t-[1px] text-[12px] px-[26px] py-[10px] text-balance border-danger mt-3">
        <h1>Update: {updateDate}</h1>
      </div>
    </div>
  );
};

export default HomeBox;
