import React from "react";
import { ICON } from "@/app/constants/Images";
import Image from "next/image";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationBar: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChangeItemsPerPage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="mt-[14px] flex text-white items-center justify-between">
      <div className="flex items-center">
        <div className="me-5">Showing</div>
        <select
          value={itemsPerPage}
          onChange={handleChangeItemsPerPage}
          className="border-[1px] text-white font-light rounded-[10px] border-secondry p-2 bg-transparent "
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>

        {/* <div className="flex items-center">
          <Image className="ms-4" src={ICON.ARROW} alt="iconArrowDown" />
        </div> */}
      </div>
      <div className="text-[14px] font-light">
        Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} out of {totalItems}{" "}
        records
      </div>
      <div className="flex items-center">
        <button onClick={prevPage}>
          <Image
            className="me-[10px] rotate-90"
            src={ICON.ARROW}
            height={24}
            width={24}
            alt="iconArrowLeft"
          />
        </button>
        <div className="flex">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-[7px] mx-[5px] ${
                i + 1 === currentPage ? "bg-primary" : ""
              }`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button onClick={nextPage}>
          <Image
            className="ms-[10px]"
            src={ICON.RIGHTARROW}
            height={24}
            width={24}
            alt="iconArrowRight"
          />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
