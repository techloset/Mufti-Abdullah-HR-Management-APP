import React from "react";
import DepartmentEmployee from "../departmentEmployee/DepartmentEmployee";
import Link from "next/link";
import { FormData } from "../../constants/types";

export default function Departmentsection({
  department,
  employees,
  employeeIds,
}: {
  department: string;
  employees: FormData[];
  employeeIds: string[];
}) {
  return (
    <div className=" sm:w-full lg:w-[48%] md:w-full border-[1px] border-secondry px-3 py-2 rounded-lg">
      <div className="flex flex-row  my-3 justify-between">
        <div className="flex flex-col  text-white">
          <h2 className="text-[20px] text-white">{department}</h2>
          <h5 className="text-[14px] text-balance">members</h5>
        </div>
        <div className=" flex items-center text-center">
          <Link
            href={{
              pathname: "/viewDepartment",
              query: { user: JSON.stringify(employeeIds) },
            }}
          >
            <h2 className="text-primary text-[16px]">View All</h2>
          </Link>
        </div>
      </div>
      <div className="space-y-3">
        <hr className="h-px  border-0 bg-secondry" />
        {employees &&
          employees.map((employee: FormData, index) => (
            <DepartmentEmployee
              key={index}
              employeename={employee.userName}
              Designation={employee.designation}
            />
          ))}
      </div>
    </div>
  );
}
