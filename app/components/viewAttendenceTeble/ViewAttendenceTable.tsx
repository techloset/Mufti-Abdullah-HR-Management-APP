"use client";
import { FormData } from "@/app/constants/Types";
import PaginationBar from "../paginationBar/PaginationBar";
import useViewAttendenceTable from "./useViewAttendenceTable";
import Image from "next/image";
import { ADDEMPLOYEE } from "@/app/constants/Images";

export default function ViewAttendenceTable() {
  const {
    currentEmployees,
    employees,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
  } = useViewAttendenceTable();
  return (
    <>
      <table className="text-sm w-full text-left text-lightWhite ">
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
                  {employee.imageUrl == "" || null || undefined ? (
                    <Image
                      src={ADDEMPLOYEE.USER}
                      width={24}
                      height={24}
                      alt="filter"
                    />
                  ) : (
                    <img
                      height={24}
                      width={24}
                      src={employee.imageUrl}
                      className="rounded-lg"
                      alt=""
                    />
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
                  {employee.startDate}
                </td>

                <td className="px-5  mx-auto whitespace-nowrap  py-4">
                  <h1 className="bg-lightGreeen font-light  text-[12px] w-[66px] rounded-md p-2 text-green">
                    On Time
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
