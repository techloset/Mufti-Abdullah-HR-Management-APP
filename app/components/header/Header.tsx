import Image from "next/image";
import React, { FC } from "react";
import search from "../../assets/icons/Union.svg";
import notification from "../../assets/icons/Notification.svg";
import DropDown from "../dropdown/Dropdown";

interface HeaderProps {
  mainTitle: string;
  greeting: string;
}
const Header: FC<HeaderProps> = ({ mainTitle, greeting }) => {
  return (
    <>
      <div className=" w-auto">
        <h1 className="text-xl">{mainTitle}</h1>
        <p className="text-balance text-sm">{greeting}</p>
      </div>
      <div className="flex flex-row justify-center items-center w-auto ms-auto">
        <div className="flex flex-row p-2 gap-4 me-5 h-[50px]  border-[1px] border-secondry rounded-md">
          <Image src={search} alt="" />
          <input
            type="text"
            placeholder="search"
            className="p-2  bg-black rounded hover:border-primary active:border-primary focus:border-primary focus:outline-none"
          />
        </div>
        <Image src={notification} alt="notification" className="me-5" />
        <div className="flex flex-row border-[1px] me-3 gap-2 border-secondry  h-[50px] rounded-md p-1">
          <DropDown />
        </div>
      </div>
    </>
  );
};

export default Header;
