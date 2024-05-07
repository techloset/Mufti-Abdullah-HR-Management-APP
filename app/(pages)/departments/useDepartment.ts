"use client";
import { DepartmentEmployeeIds, FormData } from "@/app/constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import React, { useEffect, useState } from "react";

export default function UseDepartment() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);
  const [departments, setDepartments] = useState<string[]>([]);
  const [departmentEmployeeIds, setDepartmentEmployeeIds] =
    useState<DepartmentEmployeeIds>({});

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

  useEffect(() => {
    const departmentIds: DepartmentEmployeeIds = {};

    employees.forEach((employee: FormData) => {
      const department = employee.department;
      if (!departmentIds[department as string]) {
        departmentIds[department as string] = [employee.id as string];
      } else {
        departmentIds[department as string].push(employee.id as string);
      }
    });

    const uniqueDepartments = Object.keys(departmentIds);
    setDepartments(uniqueDepartments);
    setDepartmentEmployeeIds(departmentIds);
  }, [employees]);

  const filterEmployeesByDepartment = (department: string) => {
    return employees.filter(
      (employee: FormData) => employee.department === department
    );
  };

  return {
    filterEmployeesByDepartment,
    departments,
    setDepartments,
    departmentEmployeeIds,
    setDepartmentEmployeeIds,
  };
}
