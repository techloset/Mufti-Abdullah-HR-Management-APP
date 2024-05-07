"use client";
import ViewEmployeeSidebar from "@/app/components/viewEmployeeSidebar/ViewEmployeeSidebar";
import ViewLeaveTable from "@/app/components/viewLeaveTable/ViewLeaveTable";
import ViewProjectTable from "@/app/components/viewProjectTable/ViewProjectTable";
import { ADDEMPLOYEE, ICON } from "@/app/constants/images";
import Image from "next/image";
import React, { useState } from "react";
import User from "../../assets/icons/Rectangle 3463328.svg";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/storeHook";
import { updateEmployee } from "@/redux/slices/employee";
import { FormData } from "@/app/constants/types";
import IndividualAttendenceTable from "@/app/components/individualAttendenceTable/individualAttendenceTable";
import EditSidebarProfile from "@/app/components/employeeSidebarProfile/EditSidebarProfile";

export default function ViewEmployee() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setFormData] = useState({});
  const dispatch = useAppDispatch();
  const searchparams = useSearchParams();
  const employee = searchparams.get("user");
  const result = JSON.parse(employee as string);
  console.log("result", result);
  const hanldeUpate = () => {
    const id: FormData = formData.id;
    dispatch(updateEmployee({ id: id, data: formData }));
  };

  return (
    <div className="border-[1px]  border-secondry p-5 rounded-lg ">
      <div className="flex flex-row pb-8 border-b-2 border-b-secondry text-white justify-between">
        <div className="flex flex-row">
          <Image
            src={User}
            alt="user"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="space-y-2 text-sm font-light ms-4">
            <h2 className="text-2xl text-white font-semibold">
              {result.userName}
            </h2>
            <h1 className="flex flex-row gap-2.5">
              <Image
                src={ADDEMPLOYEE.BREAFCASE}
                alt="breafcase"
                height={24}
                width={24}
              />
              {result.department}
            </h1>
            <h2 className="flex flex-row  gap-2.5">
              <Image height={24} width={24} src={ICON.GMAIL} alt="breafcase" />
              {result.email}
            </h2>
          </div>
        </div>
        <div className="mt-auto">
          <button
            onClick={hanldeUpate}
            className="border-[1px] flex bg-primary flex-row items-center justify-center gap-3 rounded-lg text-white border-secondry p-2"
          >
            <Image src={ICON.EDIT} alt="filter" />
            Edit Profile
          </button>
        </div>
      </div>
      <div className="flex gap-4 flex-row mt-7">
        <ViewEmployeeSidebar selectedTab={setSelectedTab} />
        <div className="w-full">
          {selectedTab === 0 && (
            <EditSidebarProfile id={result.id} setFormData={setFormData} />
          )}
          {selectedTab === 1 && <IndividualAttendenceTable id={result.id} />}
          {selectedTab === 2 && <ViewProjectTable id={result.id} />}
          {selectedTab === 3 && <ViewLeaveTable />}
        </div>
      </div>
    </div>
  );
}
