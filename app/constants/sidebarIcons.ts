import { SIDEBAR } from "./images";
import Icon from "../assets/icons/Vector.svg";
import DASHBOARD from "../assets/icons/dashboard.svg";
import EMPLOYEE from "../assets/icons/users 01.svg";
import DEAPRTMENT from "../assets/icons/community.svg";
import ATTENDENCE from "../assets/icons/calendar-check.svg";
import PAYROL from "../assets/icons/coin-dollar.svg";
import JOBS from "../assets/icons/briefcase 04.svg";
import CANDIATE from "../assets/icons/users 01.svg";
import LEAVE from "../assets/icons/notepad.svg";
import HOLIDAY from "../assets/icons/notes 01.svg";
import SETTING from "../assets/icons/setting.svg";

export const SIDE_BAR_ICONS = [
  {
    name: "Dashboard",
    path: "/",
    icon: DASHBOARD,
    alt: "iconApps",
  },
  {
    name: "All Employees",
    path: "/employees",
    icon: EMPLOYEE,
    alt: "iconUsers",
  },
  {
    name: "All Department",
    path: "/departments",
    icon: DEAPRTMENT,
    alt: "iconUsers",
  },
  {
    name: "Attendance",
    path: "/attendance",
    icon: ATTENDENCE,
    alt: "iconCalender",
  },
  // {
  //   name: "Leaves",
  //   path: "/leaves",
  //   icon:LEAVE,
  //   alt: "iconNotepad",
  // },
  // {
  //   name: "Pay Roll",
  //   path: "/payrol",
  //   icon: PAYROL,
  //   alt: "payroll",
  // },
  // {
  //   name: "Jobs",
  //   path: "/jobs",
  //   icon: JOBS,
  //   alt: "jobs",
  // },
  // {
  //   name: "Candidates",
  //   path: "/candidates",
  //   icon: CANDIATE,
  //   alt: "candidates",
  // },
  // {
  //   name: "Holidays",
  //   path: "/holidays",
  //   icon: HOLIDAY,
  //   alt: "holidays",
  // },
  {
    name: "Settings",
    path: "/settings",
    icon: SETTING,
    alt: "iconSettings",
  },
];
