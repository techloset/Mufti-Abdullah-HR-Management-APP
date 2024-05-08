import { FormData } from "../../constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import React, { useEffect, useState } from "react";

export default function ViewLeaveTable({ id }: { id: string }) {
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
    const employee = employees && employees.find((e: FormData) => e.id === id);
    if (employee) {
      setEmployeeData({ ...(employee as FormData) });
    }
  }, [employees, id]);

  return (
    <table className="text-sm w-full  text-left   text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-white uppercase ">
        <tr className="text-[16px] border-b-secondry border-b-[1px] font-light text-balance">
          <th scope="col" className="px-5 py-3">
            JoinDate
          </th>
          <th scope="col" className="px-5 py-3">
            Designation
          </th>
          <th scope="col" className="px-5 py-3">
            Name
          </th>
          <th scope="col" className="px-5 py-3">
            Department
          </th>

          <th scope="col" className="px-5 py-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-white border-b-secondry border-b-[1px] ">
          <td className="py-4 px-5 gap-2 font-light text-[16px] whitespace-nowrap text-white">
            {employeeData?.startDate
              ? new Date(employeeData.startDate).toLocaleDateString()
              : ""}
          </td>
          <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
            {employeeData?.designation}
          </td>
          <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
            {employeeData?.userName}
          </td>
          <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
            {employeeData?.department}
          </td>

          <td className="px-5  mx-auto whitespace-nowrap  py-4">
            <h1 className="bg-lightGreeen font-light  text-[12px] w-[66px] rounded-md p-2 text-green">
              On Time
            </h1>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
