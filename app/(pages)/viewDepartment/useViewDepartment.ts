import { FormData } from "../../constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useViewDepartment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const searchParams = useSearchParams();
  const employee = searchParams.get("user");
  const result = JSON.parse(employee as string);

  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const filteredEmployees = employees.filter((employee: FormData) =>
    result.includes(employee.id)
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const lastPage = Math.max(1, totalPages);
  const indexOfLastEmployee = Math.min(
    currentPage * itemsPerPage,
    filteredEmployees.length
  );
  const indexOfFirstEmployee = Math.min(
    indexOfLastEmployee - itemsPerPage,
    filteredEmployees.length
  );
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return {
    currentEmployees,
    currentPage,
    setCurrentPage,
    filteredEmployees,
    itemsPerPage,
    setItemsPerPage,
  };
}
