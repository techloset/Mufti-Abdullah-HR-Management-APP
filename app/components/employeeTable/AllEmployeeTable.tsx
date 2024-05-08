// @ts-ignore
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PaginationBar from "../paginationBar/PaginationBar";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import { deleteEmployee, fetchEmployees } from "@/redux/slices/employee";
import { FormData } from "../../constants/types";
import SearchBar from "../searchBar/SearchBar";
import PLUS from "../../assets/icons/add-circle.svg";
import TRASH from "../../assets/icons/trash 01.svg";
import EDIT from "../../assets/icons/edit.svg";
import VIEW from "../../assets/icons/view.svg";

export default function AllEmployeeTable() {
  const dispatch = useAppDispatch();
  const allEmployees = useAppSelector((state) => state.employees.employeeData);

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };
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

  const handleDelete = (id: string) => {
    dispatch(deleteEmployee(id));
  };

  const filteredEmployees = allEmployees.filter(
    (employee: FormData) =>
      (selectedDepartment === "" ||
        employee.department === selectedDepartment) &&
      employee.userName?.toLowerCase().includes(searchValue.toLowerCase())
  );

  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  return (
    <div className="border-[1px] rounded-lg mt-4 border-secondry p-2 w-auto overflow-x-auto ">
      <div className="flex  mx-5 my-5 flex-row justify-between items-center">
        <SearchBar setInputValue={handleInputChange} />
        <div className="flex flex-row gap-5">
          <select
            className="border-[1px] flex bg-primary flex-row items-center justify-center gap-3 rounded-lg text-white border-secondry p-2"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>

            {Array.from(
              new Set(
                allEmployees.map((employee: FormData) => employee.department)
              )
            ).map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
          <Link href="/addEmployee">
            <button className="border-[1px] flex bg-primary flex-row items-center justify-center gap-3 rounded-lg text-white border-secondry p-2">
              <Image src={PLUS} alt="filter" />
              Add New Employee
            </button>
          </Link>
        </div>
      </div>
      <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase ">
          <tr className="text-[16px] border-b-secondry border-b-[1px] font-light text-balance">
            <th scope="col" className="px-6 py-3">
              Employee Name
            </th>
            <th scope="col" className="px-6 py-3">
              Employee ID
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Designation
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee: FormData, index: number) => (
            <tr
              key={index}
              className="text-white border-b-secondry border-b-[1px] "
            >
              <td className="py-4 px-6 gap-2 flex flex-row items-center font-light text-[16px] whitespace-pre-wrap text-white">
                <img
                  src={employee.imageUrl}
                  alt="profile"
                  className="w-[36px] h-[36px] rounded-lg"
                />
                {employee.userName}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.employeeID}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.department}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.designation}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.employeeType}
              </td>
              <td className="px-6  mx-auto whitespace-pre-wrap  py-4">
                <h1 className="bg-lightGreeen font-light  rounded-lg text-[12px] p-4 text-green">
                  Permanent
                </h1>
              </td>
              <td className="px-6 font-light flex flex-row items-center gap-3 text-[16px] whitespace-pre-wrap text-white py-4">
                <div
                  className="w-64 cursor-pointer"
                  onClick={() => handleDelete(employee.id as string)}
                >
                  <Image src={TRASH} alt="" className="h-[24px] w-[24px]" />
                </div>
                <Link
                  href={{
                    pathname: "/editEmployee",
                    query: { user: JSON.stringify(employee) },
                  }}
                >
                  <Image src={EDIT} alt="" width={109} height={120} />
                </Link>

                <Link
                  href={{
                    pathname: "/viewEmployee",
                    query: { user: JSON.stringify(employee) },
                  }}
                >
                  <Image src={VIEW} alt="" width={109} height={120} />
                </Link>
              </td>
            </tr>
          ))}
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
