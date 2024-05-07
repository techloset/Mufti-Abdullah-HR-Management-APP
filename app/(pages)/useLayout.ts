"use client";

import { getSession, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export const useLayout = () => {
  let headerProps: { mainTitle: string; greeting: string } = {
    mainTitle: "",
    greeting: "",
  };
  const router = usePathname();

  const data = getSession();
  switch (router) {
    case "/":
      headerProps = { mainTitle: "HELLO Lucifer", greeting: "Good morning" };
      break;
    case "/dashboard":
      headerProps = { mainTitle: "HELLO Lucifer", greeting: "Good morning" };
      break;
    case "/employees":
      headerProps = {
        mainTitle: "All Employees",
        greeting: "All Employee information",
      };
      break;
    case "/addEmployee":
      headerProps = {
        mainTitle: "Add Employee",
        greeting: "All Employee > Add New Employee",
      };
      break;
    case "/viewEmployee":
      headerProps = {
        mainTitle: "User Name",
        greeting: "All Employee > User Name",
      };
      break;
    case "/departments":
      headerProps = {
        mainTitle: "All Departments",
        greeting: "All Departments Information",
      };
      break;
    case "/viewDepartment":
      headerProps = {
        mainTitle: "Design Department",
        greeting: "All Departments > Design Department",
      };
      break;
    case "/attendence":
      headerProps = {
        mainTitle: "Attendence",
        greeting: "All Employee Attendence",
      };
      break;
    case "/setting":
      headerProps = {
        mainTitle: "Settings",
        greeting: "All system Settings",
      };
      break;
    case "/notification":
      headerProps = {
        mainTitle: "Notifications",
        greeting: "All Notification",
      };
      break;
    default:
      headerProps = { mainTitle: "Home", greeting: "Hello" };
      break;
  }

  return { headerProps };
};
