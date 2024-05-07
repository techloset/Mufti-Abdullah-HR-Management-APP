import { FormData } from "@/app/constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import React, { useEffect, useState } from "react";

export default function ViewPersonalInformation({
  EmployeeId,
}: {
  EmployeeId: string;
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

  return (
    <>
      {employeeData && (
        <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Employee Id</h5>
            <input
              type="text"
              name="employeeID"
              value={employeeData.employeeID}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">User Name</h5>
            <input
              type="text"
              name="userName"
              value={employeeData.userName}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Employee Type</h5>
            <input
              type="text"
              name="employeeType"
              value={employeeData.employeeType}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Email Address</h5>
            <input
              type="text"
              name="emailAddress"
              value={employeeData.emailAddress}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Department </h5>
            <input
              type="text"
              name="department"
              value={employeeData.department}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Designation</h5>
            <input
              type="text"
              name="designation"
              value={employeeData.designation}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Working Days</h5>
            <input
              type="text"
              name="workingDays"
              value={employeeData.workingDays}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Joining Date</h5>
            <input
              type="text"
              name="joinDate"
              value={employeeData.joinDate}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Office Location</h5>
            <input
              type="text"
              name="officeLocation"
              value={employeeData.officeLocation}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
