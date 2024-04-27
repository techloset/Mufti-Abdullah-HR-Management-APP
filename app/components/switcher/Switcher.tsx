"use client";
import React, { useState } from "react";

export default function Switcher() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray ${
          isChecked ? "peer-checked:bg-green" : ""
        } peer-focus:ring-4 peer-focus:ring-green dark:peer-focus:ring-green peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray `}
      ></div>
    </label>
  );
}
