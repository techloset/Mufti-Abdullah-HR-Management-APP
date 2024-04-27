"use client";
import { ICON } from "@/app/constants/Images";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
const options: ApexOptions = {
  colors: ["#E25319", "#FEB85B", "#F45B69"],
  chart: {
    type: "bar",
    height: 335,
    width: 50,
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
  responsive: [
    {
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: 12,
            gap: 200,
          },
        },
      },
    },
  ],

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
    categories: ["Mon", "Tue", "Wed", "Thru", "Fri", "Sat", "Sun"],
    axisBorder: { show: false },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: {
      formatter: function (val) {
        return val + "%";
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

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const AttendanceChart: React.FC = () => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Attendance",
        data: [62, 23, 65, 85, 93, 87, 85],
      },
      {
        name: "Employee",
        data: [15, 65, 5, 7, 1, 3, 4],
      },
      {
        name: "PAY",
        data: [23, 12, 30, 8, 6, 10, 11],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;
  return (
    <div className="flex flex-col w-full bg-danger mt-5 h-[534px] border-[1px] border-[#F45B691A] rounded-[10px]">
      <div className="mb-4 justify-between mt-[25px] flex">
        <div>
          <h4 className="text-xl text-white font-semibold ms-8 ">
            Attendance Overview
          </h4>
        </div>
        {/* <div className="relative z-20 flex bg-secondry me-[30px]">
          <select className="relative bg-secondry text-white z-20 inline-flex appearance-none  py-1 pl-3 pr-8 text-sm font-medium outline-none">
            <option className="bg-secondry">This Week</option>
            <option className="bg-secondry">Last Week</option>
          </select>
          <Image src={ICON.ARROW} alt="Arrow Down" />
        </div> */}
      </div>

      <div className=" mx-[33px]">
        <ReactApexChart
          options={options}
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
