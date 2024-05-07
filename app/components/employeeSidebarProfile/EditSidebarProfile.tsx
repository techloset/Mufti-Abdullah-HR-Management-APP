import { useEffect, useState } from "react";
import { BREAFCASE, DOCUMENT, LOCK, USERICON } from "../../constants/svgIcons";
import EditPersonalInformationMain from "../editPersonalInformation/EditPersonalInformationMain";
import EditPersonalInformation from "../editPersonalInformation/EditPersonalInformation";
import EditEmployeeDocument from "../editEmployeeDocument/EditEmployeeDocument";
import EditEmployeeAccess from "../editEmployeeAccess/EditEmployeeAccess";

export default function EditSidebarProfile({
  id,
  setFormData,
}: {
  id: string;
  setFormData: any;
}) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState();

  const show = true;
  useEffect(() => {
    setFormData(data);
  }, [data]);

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
        <EditPersonalInformationMain EmployeeId={id} setData={setData} />
      ) : (
        ""
      )}
      {show && selectedTab === 1 ? (
        <EditPersonalInformation setData={setData} EmployeeId={id} />
      ) : (
        ""
      )}
      {show && selectedTab === 2 ? (
        <EditEmployeeDocument setData={setData} EmployeeId={id} />
      ) : (
        ""
      )}
      {show && selectedTab === 3 ? (
        <EditEmployeeAccess setData={setData} EmployeeId={id} />
      ) : (
        ""
      )}
    </>
  );
}
