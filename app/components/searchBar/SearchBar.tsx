import Image from "next/image";
import React from "react";
import search from "../../assets/icons/Union.svg";
export default function SearchBar() {
  return (
    <div className="flex flex-row p-2 gap-4 me-5 h-[50px]  border-[1px] border-secondry rounded-md">
      <Image src={search} alt="" />
      <input
        type="text"
        placeholder="search"
        className="p-2  bg-black rounded hover:border-primary active:border-primary focus:border-primary focus:outline-none"
      />
    </div>
  );
}
