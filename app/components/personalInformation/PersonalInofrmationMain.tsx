"use client";

import RIGHTARROW from "../../assets/icons/direction-right 01.svg";
import Image from "next/image";
import ATTENDENCE from "../../assets/icons/calendar-check.svg";
import PROFILE from "../../assets/icons/Profile Photo.svg";
import DatePicker from "react-datepicker";
import React, { ChangeEvent } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { UploadButtonForImage } from "@/utils/uploadthing";
import { FormData } from "../../constants/types";
import InputDropDown from "../inputDropDown/InputDropDown";

interface PersonalInformationMainProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PersonalInformationMain: React.FC<PersonalInformationMainProps> = ({
  formData,
  setFormData,
}) => {
  console.log("formData", formData);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevData) => ({
      ...prevData,
      startDate: date,
    }));
  };

  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
      <div className="w-full flex flex-col">
        {formData.imageUrl ? (
          <img
            src={formData.imageUrl}
            alt="profile"
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        ) : (
          <Image src={PROFILE} alt="profile" className="w-[100px] h-[100px]" />
        )}
        <UploadButtonForImage
          className="w-[100px] outline-none"
          appearance={{
            button: {
              background: "transparent",
              color: "#E25319",
            },
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res[0].url);
            handleImageUpload(res[0].url);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="First name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Mobile Number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
      />
      <div className="flex w-[49%]  border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <InputDropDown
          options={[
            { label: "Marital Status", value: "none" },
            { label: "Signle", value: "Single" },
            { label: "Married", value: "Married" },
          ]}
          onSelect={(selectedOption) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              maritalStatus: selectedOption.value,
            }));
          }}
        />
      </div>
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg  p-2.5  border-secondry focus:outline-none ">
        <DatePicker
          selected={formData.startDate}
          onChange={handleDateChange}
          className="bg-transparent focus:outline-none"
        />
        <Image src={ATTENDENCE} alt="sidebar" width={20} height={20} />
      </div>
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <InputDropDown
          options={[
            { label: "Gender", value: "none" },
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          onSelect={(selectedOption) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              gender: selectedOption.value,
            }));
          }}
        />
      </div>

      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <InputDropDown
          options={[
            { label: "Nationality", value: "Pakistan" },
            { label: "Pakistan", value: "Pakistan" },
          ]}
          onSelect={(selectedOption) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              nationality: selectedOption.value,
            }));
          }}
        />
      </div>

      <div className="flex w-[99%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent w-full focus:outline-none"
          placeholder="Address"
          name="address"
          value={formData.address}
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
      <div className="flex w-[32%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent w-full focus:outline-none"
          placeholder="City"
          name="city"
          value={formData.city}
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
      <div className="flex w-[32%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent w-full focus:outline-none"
          placeholder="State"
          name="state"
          value={formData.state}
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
      <div className="flex w-[32%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent w-full focus:outline-none"
          placeholder="Zip"
          name="zip"
          value={formData.zip}
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

export default PersonalInformationMain;
