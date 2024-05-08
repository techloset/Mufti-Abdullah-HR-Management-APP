"use client";

import { FormData } from "../../constants/types";
import PaginationBar from "../paginationBar/PaginationBar";
import useViewAttendenceTable from "./useViewAttendenceTable";
import Image from "next/image";
import USER from "../../assets/icons/user white.svg";
import React from "react";

export default function ViewAttendenceTable() {
  const {
    currentEmployees,
    employees,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    handleChange,
  } = useViewAttendenceTable();

  return (
    <>
      <table className="text-sm w-full text-left text-lightWhite">
        <thead className="text-xs text-white uppercase">
          <tr className="text-[16px] border-b-secondry border-b-[1px] font-light text-balance">
            <th scope="col" className="px-5 py-3">
              Employee Name
            </th>
            <th scope="col" className="px-5 py-3">
              Designation
            </th>
            <th scope="col" className="px-5 py-3">
              Type
            </th>
            <th scope="col" className="px-5 py-3">
              Check In Type
            </th>
            <th scope="col" className="px-5 py-3">
              Mark Attendance
            </th>
            <th scope="col" className="px-5 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees &&
            currentEmployees.map((employee: FormData) => (
              <tr
                key={employee.id}
                className="text-white border-b-secondry border-b-[1px]"
              >
                <td className="py-4 px-5 gap-2 font-light text-[16px] whitespace-nowrap text-white flex flex-row items-center ">
                  {employee.imageUrl ? (
                    <img
                      height={24}
                      width={24}
                      src={employee.imageUrl}
                      className="rounded-lg"
                      alt=""
                    />
                  ) : (
                    <Image src={USER} width={24} height={24} alt="filter" />
                  )}
                  {employee.userName}
                </td>
                <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
                  {employee.designation}
                </td>
                <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
                  {employee.employeeType}
                </td>
                <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
                  {employee.joinDate
                    ? new Date(employee.joinDate).toLocaleDateString()
                    : ""}
                </td>

                <td className="px-5  mx-auto whitespace-nowrap  py-4">
                  <h1 className="bg-lightGreen font-light text-[12px]  rounded-md p-2">
                    <select
                      className="bg-transparent"
                      onChange={(e) => handleChange(e, employee.id ?? "")}
                    >
                      <option value="" className="bg-black">
                        Select Attendence
                      </option>
                      <option value="On Time" className=" bg-black">
                        On Time
                      </option>
                      <option value="Late" className="  bg-black">
                        Late
                      </option>
                    </select>
                  </h1>
                </td>
                <td
                  className={`px-5 mx-auto whitespace-nowrap rounded-md p-2 text-[12px]`}
                >
                  <h1
                    className={` rounded-md p-2 text-[12px] ${
                      employee.attendence === "Late"
                        ? "bg-lightRed text-Red"
                        : employee.attendence === "On Time" &&
                          "bg-lightGreeen text-green"
                    }`}
                  >
                    {employee.attendence}
                  </h1>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {employees.length > 0 && (
        <PaginationBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={employees.length}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      )}
    </>
  );
}
