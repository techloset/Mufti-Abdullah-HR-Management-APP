import React, { ChangeEvent } from "react";
import { FormData } from "@/app/constants/Types";

export default function usePersonalInformation(
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) {
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

  return { handleChange, handleDateChange };
}
