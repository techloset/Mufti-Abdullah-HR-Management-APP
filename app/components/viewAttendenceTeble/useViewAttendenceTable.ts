"use client";
import { fetchEmployees, updateEmployee } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useViewAttendenceTable() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchEmployees());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    employeeId: string
  ) => {
    const { value } = e.target;

    handleUpdate(employeeId, value);
  };

  const handleUpdate = async (employeeId: string, attendanceValue: string) => {
    try {
      await dispatch(
        updateEmployee({
          id: employeeId,
          data: { attendence: attendanceValue },
        })
      );
      await dispatch(fetchEmployees());
    } catch (error) {
      toast.error("Error updating employee attendance:" + { error });
      console.error("Error updating employee attendance:", error);
    }
  };
  const isEmployeesArray = Array.isArray(employees);
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees =
    isEmployeesArray &&
    employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  return {
    currentEmployees,
    employees,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    handleChange,
  };
}
