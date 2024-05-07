"use client";
import EmployeeAccess from "@/app/components/employeeAccess/EmployeeAccess";
import Employeedocument from "@/app/components/employeeDocument/Employeedocument";
import PersonalInformation from "@/app/components/personalInformation/PersonalInformation";
import PersonalInformationMain from "@/app/components/personalInformation/PersonalInofrmationMain";
import { ADDEMPLOYEE } from "@/app/constants/images";

import Image from "next/image";
import React from "react";
import useAddEmployee from "./useAddEmployee";

export default function AddEmployee() {
  const {
    formData,
    handleFormDataChange,
    handleSubmit,
    show,
    selectedTab,
    setSelectedTab,
  } = useAddEmployee();
  return (
    <div className="border-[1px] border-secondry p-4 rounded-lg">
      <div className="flex flex-row gap-4 text-white  max-w-full">
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 0
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(0)}
        >
          {selectedTab === 0 ? (
            <Image src={ADDEMPLOYEE.USERORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.USER} alt="user" />
          )}

          <h1>Personal Information</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 1
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(1)}
        >
          {selectedTab === 1 ? (
            <Image src={ADDEMPLOYEE.BREAFCASEORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.BREAFCASE} alt="user" />
          )}

          <h1>Personal Information</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 2
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(2)}
        >
          {selectedTab === 2 ? (
            <Image src={ADDEMPLOYEE.DOCUMENTORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.DOCUMENT} alt="user" />
          )}
          <h1>Documents</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 3
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(3)}
        >
          {selectedTab === 3 ? (
            <Image src={ADDEMPLOYEE.LOCKORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.LOCK} alt="user" />
          )}

          <h1>Account Access</h1>
        </div>
      </div>
      <hr className="h-px  border-0 bg-secondry" />

      {show && selectedTab === 0 ? (
        <PersonalInformationMain
          formData={formData}
          setFormData={handleFormDataChange}
        />
      ) : (
        ""
      )}
      {show && selectedTab === 1 ? (
        <PersonalInformation
          formData={formData}
          setFormData={handleFormDataChange}
        />
      ) : (
        ""
      )}
      {show && selectedTab === 2 ? (
        <Employeedocument
          formData={formData}
          setFormData={handleFormDataChange}
        />
      ) : (
        ""
      )}
      {show && selectedTab === 3 ? (
        <EmployeeAccess
          formData={formData}
          setFormData={handleFormDataChange}
        />
      ) : (
        ""
      )}
      <div className="flex flex-row ms-auto justify-end mt-6 me-6 gap-5">
        <button className="border-[1px] flex flex-row items-center justify-center  rounded-lg text-white border-secondry h-[50px] w-[91px]">
          Cancel
        </button>

        {selectedTab < 3 ? (
          <button
            onClick={() => setSelectedTab(selectedTab + 1)}
            className="border-[1px] flex bg-primary flex-row items-center justify-center rounded-lg text-white border-secondry h-[50px] w-[91px]"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="border-[1px] flex bg-primary flex-row items-center justify-center rounded-lg text-white border-secondry h-[50px] w-[91px]"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
