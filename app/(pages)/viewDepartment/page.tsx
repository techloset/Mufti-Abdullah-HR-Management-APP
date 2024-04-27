"use client";
import PaginationBar from "@/app/components/paginationBar/PaginationBar";
import { ICON } from "@/app/constants/Images";
import { FormData } from "@/app/constants/Types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const EMPLOYEE_TABLE_HEAD = [
  { heading: "Employee ID" },
  { heading: "Employee Name" },
  { heading: "Department" },
  { heading: "Designation" },
  { heading: "Type" },
  { heading: "Status" },
  { heading: "Action" },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const searchParams = useSearchParams();
  const employee = searchParams.get("user");
  const result = JSON.parse(employee as string);

  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const filteredEmployees = employees.filter((employee: FormData) =>
    result.includes(employee.id)
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const lastPage = Math.max(1, totalPages);
  const indexOfLastEmployee = Math.min(
    currentPage * itemsPerPage,
    filteredEmployees.length
  );
  const indexOfFirstEmployee = Math.min(
    indexOfLastEmployee - itemsPerPage,
    filteredEmployees.length
  );
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <div className="mt-[30px] shadow-md ">
      <table className="w-full font-light text-sm  text-left rtl:text-right ">
        <thead className="text-[16px] text-[#A2A1A8] font-light">
          <tr>
            {EMPLOYEE_TABLE_HEAD.map((item, i) => {
              return (
                <th
                  scope="col"
                  className="py-[10px] border-b-[1px] border-grayBorder"
                  key={i}
                >
                  {item.heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((data: FormData, i: number) => {
            return (
              <tr className="border-b-[1px] text-white border-secondry" key={i}>
                <td className="pt-[10px]">{data.id}</td>
                <th scope="row" className=" flex items-center pt-[10px] ">
                  <img
                    src={data.imageUrl}
                    height={36}
                    width={36}
                    className="rounded-[18px]"
                    alt="Photo"
                  />
                  <div className="text-[16px] ms-[10px] ">{data.userName}</div>
                </th>
                <td className="pt-[10px]">{data.department}</td>
                <td className="pt-[10px]">{data.designation}</td>
                <td className="pt-[10px]">{data.employeeType}</td>
                <td className="pt-[10px]">
                  <div className=" w-fit text-[12px] bg-[#E253191A] text-customOrange rounded-[4px] px-[9px] py-[3px] font-light">
                    Permanent
                  </div>
                </td>
                <td className="pt-[10px] flex">
                  <button>
                    <Image src={ICON.VIEW} alt="iconView" />
                  </button>
                  <button>
                    <Image src={ICON.EDIT} alt="iconEdit" />
                  </button>
                  <button>
                    <Image src={ICON.TRASH} alt="iconTrash" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <PaginationBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filteredEmployees.length}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
}
