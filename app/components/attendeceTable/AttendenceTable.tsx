"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAttendence from "./useAttendence";
import { FormData } from "../../constants/types";
import USER from "../../assets/icons/Ellipse 1192.svg";
export default function AttendenceTable() {
  const { employees } = useAttendence();
  return (
    <div className="relative overflow-x-auto border-[1px] rounded-lg mt-4 border-secondry p-2">
      <div className="flex  mx-5 my-5 flex-row justify-between items-center">
        <h1 className="text-white text-[20px] font-semibold">
          Attendence OverView
        </h1>

        <Link
          href={"/attendance"}
          className="border-[1px] rounded-lg text-white border-secondry p-2"
        >
          View All
        </Link>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase ">
          <tr className="text-[16px] border-b-secondry border-b-[1px] font-light text-balance">
            <th scope="col" className="px-6 py-3">
              Employee Name
            </th>
            <th scope="col" className="px-6 py-3">
              Designation
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Departmnt
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.slice(0, 1).map((employee: FormData) => (
              <tr
                key={employee.id}
                className="text-white border-b-secondry border-b-[1px] "
              >
                <td className="py-4 px-6 gap-2 flex flex-row items-center font-light text-[16px] whitespace-nowrap text-white">
                  {employee.imageUrl ? (
                    <img
                      src={employee.imageUrl}
                      alt="profile"
                      className="w-[36px] h-[36px] rounded-lg"
                    />
                  ) : (
                    <Image
                      src={USER}
                      alt="profile"
                      className="w-[36px] h-[36px] rounded-lg"
                    />
                  )}
                  {employee.userName}
                </td>
                <td className="px-6 font-light text-[16px] whitespace-nowrap text-white py-4">
                  {employee.designation}
                </td>
                <td className="px-6 font-light text-[16px] whitespace-nowrap text-white py-4">
                  {employee.employeeType}
                </td>
                <td className="px-6 font-light text-[16px] whitespace-nowrap text-white py-4">
                  {employee.department}
                </td>
                <td className="px-6  mx-auto whitespace-nowrap  py-4">
                  <h1 className="bg-lightGreeen font-light  text-[12px] w-[66px] rounded-md p-2 text-green">
                    On Time
                  </h1>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
