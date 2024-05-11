import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import { useEffect } from "react";

export default function useDashboard() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchEmployees());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  const numberOfEmployees: number = employees.length;

  return { numberOfEmployees };
}
