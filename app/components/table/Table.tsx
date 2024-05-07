import React from "react";

export default function Table() {
  return (
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
        <tr className="text-white border-b-secondry border-b-[1px] ">
          <td className="py-4 px-6 gap-2 flex flex-row items-center font-light text-[16px] whitespace-pre-wrap text-white"></td>
          <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4"></td>
          <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4"></td>
          <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4"></td>
          <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4"></td>
          <td className="px-6  mx-auto whitespace-pre-wrap  py-4">
            <h1 className="bg-lightGreeen font-light  rounded-lg text-[12px] p-4 text-green"></h1>
          </td>
          <td className="px-6 font-light flex flex-row items-center gap-3 text-[16px] whitespace-pre-wrap text-white py-4"></td>
        </tr>
      </tbody>
    </table>
  );
}
