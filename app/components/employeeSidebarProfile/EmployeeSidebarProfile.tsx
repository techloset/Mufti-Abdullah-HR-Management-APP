import { useEffect, useState } from "react";
import ViewPersonalInformationMian from "../viewPersonalInformation/ViewPersonalInformationMian";
import ViewPersonalInformation from "../viewPersonalInformation/ViewPersonalInformation";
import ViewEmployeeDocument from "../viewEmployeeDocument/ViewEmployeeDocument";
import ViewEmployeeAccess from "../viewEmployeeAccess/ViewEmployeeAccess";
import USER from "../../assets/icons/user white.svg";
import USERORANGE from "../../assets/icons/user orange.svg";
import BREAFCASE from "../../assets/icons/briefcase white.svg";
import BREAFCASEORANGE from "../../assets/icons/briefcase.svg";
import LOCKORANGE from "../../assets/icons/lock.svg";
import LOCK from "../../assets/icons/lock white.svg";
import DOCUMENT from "../../assets/icons/document-text white.svg";
import DOCUMENTORANGE from "../../assets/icons/document-text orange.svg";
import Image from "next/image";
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
            <Image src={USERORANGE} height={24} width={24} alt="USER" />
          ) : (
            <Image src={USER} height={24} width={24} alt="USER" />
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
            <Image
              src={BREAFCASEORANGE}
              height={12}
              width={12}
              alt="BREAFCASE"
            />
          ) : (
            <Image src={BREAFCASE} height={24} width={24} alt="BREAFCASE" />
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
            <Image src={DOCUMENTORANGE} height={24} width={24} alt="document" />
          ) : (
            <Image src={DOCUMENT} height={24} width={24} alt="document" />
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
          {selectedTab === 3 ? (
            <Image src={LOCKORANGE} height={24} width={24} alt="Lock" />
          ) : (
            <Image src={LOCK} height={24} width={24} alt="Lock" />
          )}

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
