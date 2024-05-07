import { FormData } from "@/app/constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import React, { useEffect, useState } from "react";

export default function ViewEmployeeAccess({
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
            <h5 className="text-lightWhite text-sm">Email Address</h5>

            <input
              type="text"
              name="emailAddress"
              value={employeeData.emailAddress}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Stock ID</h5>
            <input
              type="text"
              name="stockID"
              value={employeeData.stockID}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">Skype ID</h5>
            <input
              type="text"
              name="skypeID"
              value={employeeData.skypeID}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
          <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
            <h5 className="text-lightWhite text-sm">GItHub ID</h5>
            <input
              type="text"
              name="githubID"
              value={employeeData.githubID}
              className="text-base bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
