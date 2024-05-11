"use client";
import React, { useEffect } from "react";
import ApexChart from "../../components/chart/Chart";
import HomeBox from "../../components/homeBox/HomeBox";
import AttendenceTable from "../../components/attendeceTable/AttendenceTable";
import useDashboard from "./useDashboard";
import employee from "../../assets/icons/Button.svg";
import APPLICANT from "../../assets/icons/Button (1).svg";
import ATTENDENCE from "../../assets/icons/Button (2).svg";
import PROJECT from "../../assets/icons/Button (3).svg";
import dynamic from "next/dynamic";
const ClientDashboard = dynamic(
  () => import(".././../components/dashboard/Dashboard"),
  {
    loading: () => <p>Loading...</p>,
  }
);
export default function Dashboard() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.alert("window.alert from client component");
    }
  }, []);

  return ClientDashboard;
}
