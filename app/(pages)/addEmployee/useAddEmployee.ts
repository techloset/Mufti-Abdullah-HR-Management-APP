"use client";
import { FormData } from "@/app/constants/Types";
import { addEmployee } from "@/redux/slices/employee";
import { useAppDispatch } from "@/redux/storeHook";
import { useState } from "react";
import toast from "react-hot-toast";
const initailFormData: FormData = {
  firstName: "",
  imageUrl: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  maritalStatus: "",
  gender: "",
  nationality: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  employeeID: 0,
  userName: "",
  employeeType: "",
  emailAddress: "",
  department: "",
  designation: "",
  workingDays: [],
  officeLocation: "",
  appointmentLetter: "",
  salarySlips: "",
  relivingLetter: "",
  experienceLetter: "",
  stockID: "",
  skypeID: "",
  githubID: "",
  startDate: new Date(),
};
export default function useAddEmployee() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>(initailFormData);
  console.log("formData", formData);
  const [selectedTab, setSelectedTab] = useState(0);
  const show = true;
  const handleFormDataChange: React.Dispatch<React.SetStateAction<FormData>> = (
    updatedFormData
  ) => {
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    const requiredFields: Array<keyof FormData> = [
      "firstName",
      "imageUrl",
      "lastName",
      "email",
      "mobileNumber",
      "maritalStatus",
      "gender",
      "nationality",
      "address",
      "city",
      "state",
      "zip",
      "employeeID",
      "userName",
      "employeeType",
      "emailAddress",
      "department",
      "designation",
      "workingDays",
      "startDate",
      "officeLocation",
      "appointmentLetter",
      "salarySlips",
      "relivingLetter",
      "experienceLetter",
      "email",
      "stockID",
      "skypeID",
      "githubID",
    ];

    const missingFields: Array<string> = requiredFields.filter(
      (field) => !formData[field]
    );

    if (missingFields.length > 0) {
      toast.error(
        `Please fill out all required fields: ${missingFields.join(", ")}`
      );
      return;
    }
    dispatch(addEmployee(formData as FormData))
      .then(() => {
        setFormData(initailFormData);
        toast.success("Employee added successfully");
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        toast.error("Failed to add employee");
      });
  };
  return {
    formData,
    handleFormDataChange,
    handleSubmit,
    setFormData,
    selectedTab,
    show,
    setSelectedTab,
  };
}
