import { useEffect, useState } from "react";
import ViewPersonalInformationMian from "../viewPersonalInformation/ViewPersonalInformationMian";
import ViewPersonalInformation from "../viewPersonalInformation/ViewPersonalInformation";
import ViewEmployeeDocument from "../viewEmployeeDocument/ViewEmployeeDocument";
import ViewEmployeeAccess from "../viewEmployeeAccess/ViewEmployeeAccess";
import { BREAFCASE, DOCUMENT, LOCK, USERICON } from "@/app/constants/SvgIcons";

export default function EmployeeSidebarProfile({ id }: { id: string }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const show = true;

  return (
    <>
      <div className="flex flex-row gap-4 text-white  max-w-full">
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 0
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(0)}
        >
          {selectedTab === 0 ? (
            <USERICON color="orange" />
          ) : (
            <USERICON color="white" />
          )}

          <h1>Personal Information</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 1
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(1)}
        >
          {selectedTab === 1 ? (
            <BREAFCASE color="orange" />
          ) : (
            <BREAFCASE color="white" />
          )}

          <h1>Personal Information</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 2
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(2)}
        >
          {selectedTab === 2 ? (
            <DOCUMENT color="orange" />
          ) : (
            <DOCUMENT color="white" />
          )}
          <h1>Documents</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 3
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(3)}
        >
          {selectedTab === 3 ? <LOCK color="orange" /> : <LOCK color="white" />}

          <h1>Account Access</h1>
        </div>
      </div>
      <hr className="h-px  border-0 bg-secondry" />

      {show && selectedTab === 0 ? (
        <ViewPersonalInformationMian EmployeeId={id} />
      ) : (
        ""
      )}
      {show && selectedTab === 1 ? (
        <ViewPersonalInformation EmployeeId={id} />
      ) : (
        ""
      )}
      {show && selectedTab === 2 ? (
        <ViewEmployeeDocument EmployeeId={id} />
      ) : (
        ""
      )}
      {show && selectedTab === 3 ? <ViewEmployeeAccess EmployeeId={id} /> : ""}
    </>
  );
}
