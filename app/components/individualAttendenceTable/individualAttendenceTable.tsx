import { EmployeeData } from "@/app/constants/types";

import useIndividualAttendenceTable from "./useIndividualAttendenceTable";
import Loader from "../loader/Loader";

export default function IndividualAttendenceTable({ id }: { id: string }) {
  const { employeeData, loading } = useIndividualAttendenceTable({ id });
  const employee = employeeData as EmployeeData;

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
          {loading ? (
            <Loader />
          ) : (
            <tr className="text-white border-b-secondry border-b-[1px]">
              <td className="py-4 px-5 gap-2 font-light text-[16px] whitespace-nowrap text-white flex flex-row items-center  ">
                <img
                  src={employee?.imageUrl}
                  alt="profile"
                  className="rounded-2xl w-8 h-8"
                />
                {employee?.userName}
              </td>
              <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
                {employee?.designation}
              </td>
              <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
                {employee?.employeeType}
              </td>
              <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
                {employee?.joinDate}
              </td>

              <td className="px-5  mx-auto whitespace-nowrap  py-4">
                <h1 className="bg-lightGreeen font-light  text-[12px] w-[66px] rounded-md p-2 text-green">
                  On Time
                </h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
