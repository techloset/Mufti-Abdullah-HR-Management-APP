import { FormProps } from "@/app/constants/Types";
import React, { ChangeEvent } from "react";

const EmployeeAccess: React.FC<FormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Enter Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Enter Stock ID"
        name="stockID"
        value={formData.stockID}
        onChange={handleChange}
      />
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Enter Skype ID"
        name="skypeID"
        value={formData.skypeID}
        onChange={handleChange}
      />

      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Enter Github ID"
        name="githubID"
        value={formData.githubID}
        onChange={handleChange}
      />
    </div>
  );
};
export default EmployeeAccess;
