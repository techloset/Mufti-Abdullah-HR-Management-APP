import VIEW from "../../assets/icons/view.svg";
import DOWNLOAD from "../../assets/icons/download 01.svg";
import { FormData } from "@/app/constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function EditEmployeeDocument({
  EmployeeId,
  setData,
}: {
  EmployeeId: string;
  setData: any;
}) {
  const [employeeData, setEmployeeData] = useState<FormData>();
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchEmployees());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(employees) && employees.length > 0) {
      const employee = employees.find((e: FormData) => e.id === EmployeeId);
      if (employee) {
        setEmployeeData({ ...(employee as FormData) });
      }
    }
  }, [employees]);
  const handleDownload = (documentName: string) => {
    const anchor = document.createElement("a");
    anchor.href = `${documentName}`;
    anchor.download = documentName;
    anchor.click();
  };

  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Appointment Letter.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image
            src={VIEW}
            alt="view"
            className="cursor-pointer"
            onClick={() =>
              window.open(employeeData?.appointmentLetter, "_blank")
            }
          />
          <Image
            src={DOWNLOAD}
            alt="download"
            className="cursor-pointer"
            onClick={() =>
              handleDownload(employeeData?.appointmentLetter as string)
            }
          />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Salary Slip.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image
            src={VIEW}
            alt="view"
            className="cursor-pointer"
            onClick={() => window.open(employeeData?.salarySlips, "_blank")}
          />
          <Image
            src={DOWNLOAD}
            alt="Download your image"
            className="cursor-pointer"
            onClick={() => handleDownload(employeeData?.salarySlips as string)}
          />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Reliving Letter.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image
            src={VIEW}
            alt="view"
            className="cursor-pointer"
            onClick={() => window.open(employeeData?.relivingLetter, "_blank")}
          />
          <Image
            src={DOWNLOAD}
            alt="download"
            className="cursor-pointer"
            onClick={() =>
              handleDownload(employeeData?.relivingLetter as string)
            }
          />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Experience Letter.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image
            src={VIEW}
            alt="view"
            className="cursor-pointer"
            onClick={() =>
              window.open(employeeData?.experienceLetter, "_blank")
            }
          />
          <Image
            src={DOWNLOAD}
            alt="download"
            className="cursor-pointer"
            onClick={() =>
              handleDownload(employeeData?.experienceLetter as string)
            }
          />
        </div>
      </div>
    </div>
  );
}
