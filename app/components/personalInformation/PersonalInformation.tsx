"use client";
import RIGHTARROW from "../../assets/icons/direction-right 01.svg";
import ATTENDENCE from "../../assets/icons/calendar-check.svg";
import Image from "next/image";
import DatePicker from "react-datepicker";
import React, { ChangeEvent } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FormData } from "@/app/constants/types";

interface PersonalInformationMainProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PersonalInformation: React.FC<PersonalInformationMainProps> = ({
  formData,
  setFormData,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevData) => ({
      ...prevData,
      joinDate: date,
    }));
  };

  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
        name="employeeID"
        value={formData.employeeID}
        onChange={handleChange}
      />
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="User Name"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
      />
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent w-full focus:outline-none"
          placeholder="select  Employee type"
          name="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
        />
        <Image
          src={RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Email Address"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
      />
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className="bg-transparent w-full focus:outline-none"
          placeholder="Select Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        <Image
          src={RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Enter designation"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
      />
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none">
        <input
          type="text"
          className="bg-transparent w-full focus:outline-none"
          placeholder="Selet working days"
          name="workingDays"
          value={formData.workingDays}
          onChange={handleChange}
        />
        <Image
          src={RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg  p-2.5  border-secondry focus:outline-none ">
        <DatePicker
          selected={formData.joinDate}
          onChange={handleDateChange}
          className="bg-transparent focus:outline-none"
        />
        Selet Joinig Date
        <Image src={ATTENDENCE} alt="sidebar" width={20} height={20} />
      </div>
      <div className="flex w-[99%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none  ">
        <input
          type="text"
          className=" bg-transparent w-full focus:outline-none"
          placeholder="Select Office Location"
          name="officeLocation"
          value={formData.officeLocation}
          onChange={handleChange}
        />
        <Image
          src={RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
export default PersonalInformation;
