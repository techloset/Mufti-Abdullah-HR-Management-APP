"use client";
import ARROW from "../../assets/icons/direction-down.svg";
import Image from "next/image";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface InputDropDownProps {
  options: Option[];
  onSelect: (selectedOption: Option) => void;
}

const InputDropDown: React.FC<InputDropDownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleInputDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        className="flex flex-row items-center justify-between w-full "
        onClick={toggleInputDropdown}
      >
        <div className="flex ">
          <div className="flex flex-col ">
            <div className="text-[12px] text-[#A2A1A8] ">
              {selectedOption.label}
            </div>
          </div>
        </div>
        <Image
          src={ARROW}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500 `}
          alt="Arrow Down"
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full border-secondry border-[1px] bg-black   rounded ">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-secondry cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputDropDown;
