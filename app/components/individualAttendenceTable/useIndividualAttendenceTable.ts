"use client";
import { EmployeeData, FormData } from "@/app/constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import React, { useEffect, useState } from "react";

export default function useIndividualAttendenceTable({ id }: { id: string }) {
  const [employeeData, setEmployeeData] = useState<EmployeeData | null>(null);
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);
  const loading = useAppSelector((state) => state.employees.isLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchEmployees());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    const employee = employees && employees.find((e: FormData) => e.id === id);
    if (employee) {
      setEmployeeData({ ...(employee as FormData) });
    }
  }, [employees, id]);

  return {
    employeeData,
    loading,
  };
}
