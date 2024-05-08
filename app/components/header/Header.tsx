import Image from "next/image";
import React, { FC } from "react";
import search from "../../assets/icons/Union.svg";
import notification from "../../assets/icons/Notification.svg";
import DropDown from "../dropdown/Dropdown";
import SearchBar from "../searchBar/SearchBar";

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
        <SearchBar setInputValue={() => search} />
        <Image src={notification} alt="notification" className="me-5" />
        <div className="flex flex-row border-[1px] me-3 gap-2 border-secondry  h-[50px] rounded-md p-1">
          <DropDown />
        </div>
      </div>
    </>
  );
};

export default Header;
