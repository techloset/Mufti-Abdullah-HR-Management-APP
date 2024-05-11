"use client";
import React, { useEffect } from "react";
import ApexChart from "../chart/Chart";
import HomeBox from "../homeBox/HomeBox";
import AttendenceTable from "../attendeceTable/AttendenceTable";
import useDashboard from "./useDashboard";
import employee from "../../assets/icons/Button.svg";
import APPLICANT from "../../assets/icons/Button (1).svg";
import ATTENDENCE from "../../assets/icons/Button (2).svg";
import PROJECT from "../../assets/icons/Button (3).svg";

export default function Dashboard() {
  const { numberOfEmployees } = useDashboard();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.console.log("window.alert from client component");
    }
  }, []);

  return (
    <div className="w-auto">
      <div className="flex flex-wrap gap-y-5 gap-x-8">
        <div className="sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={employee}
            title={"All Employee"}
            totalCount={numberOfEmployees}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className="sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={PROJECT}
            title={"All Projects"}
            totalCount={numberOfEmployees}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className="sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={ATTENDENCE}
            title={"Attendance"}
            totalCount={numberOfEmployees}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className="sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={APPLICANT}
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
