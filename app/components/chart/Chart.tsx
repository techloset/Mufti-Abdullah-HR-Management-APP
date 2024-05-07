import ReactApexChart from "react-apexcharts";
import { FormData } from "@/app/constants/types";
import { fetchEmployees } from "@/redux/slices/employee";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import { useEffect } from "react";

const AttendanceChart: React.FC = () => {
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

  if (!employees || employees.length === 0) {
    return <div>No data available</div>;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const maleCounts = Array.from({ length: 12 }, () => 0);
  const femaleCounts = Array.from({ length: 12 }, () => 0);

  employees.forEach((employee: FormData) => {
    const startDate = new Date(employee.startDate);
    const monthIndex = startDate.getMonth();
    if (employee.gender === "Male") {
      maleCounts[monthIndex]++;
    } else if (employee.gender === "Female") {
      femaleCounts[monthIndex]++;
    }
  });

  const seriesData = [
    {
      name: "Male",
      data: maleCounts,
    },
    {
      name: "Female",
      data: femaleCounts,
    },
  ];

  const state = {
    series: seriesData,
  };

  const options = {
    colors: ["#2E86C1", "#E74C3C"],
    chart: {
      type: "bar",
      height: 335,
      width: "100%",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: 12,
        borderRadiusWhenStacked: "all",
        borderRadiusApplication: "around",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: months,
      axisBorder: { show: false },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      labels: {
        formatter: function (val: string) {
          return val;
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Lexend",
      fontWeight: 500,
      fontSize: "14px",
      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col w-full bg-danger mt-5 h-[534px] border-[1px] border-[#F45B691A] rounded-[10px]">
      <div className="mb-4 justify-between mt-[25px] flex">
        <div>
          <h4 className="text-xl text-white font-semibold ms-8 ">
            Employees Started by Month
          </h4>
        </div>
      </div>

      <div className=" mx-[33px]">
        <ReactApexChart
          options={options as {}}
          series={state.series}
          type="bar"
          height={452}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default AttendanceChart;
