"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import search from "../../assets/icons/Union.svg";
interface SearchBarProps {
  setInputValue: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setInputValue }) => {
  console.log("🚀 ~ setInputValue:", setInputValue);
  const [searchValue, setSearchValue] = useState("");
  console.log("🚀 ~ searchValue:", searchValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setInputValue(value);
  };

  return (
    <div className="flex flex-row p-2 gap-4 me-5 h-[50px]  border-[1px] border-secondry rounded-md">
      <Image src={search} alt="search" />
      <input
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={handleChange}
        className="p-2  bg-transparent rounded text-white hover:border-primary active:border-primary focus:border-primary focus:outline-none"
      />
    </div>
  );
};
export default SearchBar;
