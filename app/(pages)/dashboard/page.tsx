import React from "react";
import ApexChart from "../../components/chart/Chart";
import HomeBox from "../../components/homeBox/HomeBox";
import { HOMEICONS } from "../../constants/Images";
import AttendenceTable from "../../components/attendeceTable/AttendenceTable";
import useDashboard from "./useDashboard";

export default function Dashboard() {
  const { numberOfEmployees } = useDashboard();
  return (
    <div className="w-auto">
      <div className="flex flex-wrap gap-y-5 gap-x-8">
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.EMPLOYEE}
            title={"All Employee"}
            totalCount={numberOfEmployees}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.PROJECT}
            title={"All Projects"}
            totalCount={numberOfEmployees}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.ATTENDENCE}
            title={"Attendence"}
            totalCount={numberOfEmployees}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.APPLICANT}
            title={"All Applications"}
            totalCount={numberOfEmployees}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
      </div>

      <ApexChart />
      <AttendenceTable />
    </div>
  );
}
