"use client";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { useLayout } from "@/app/(pages)/useLayout";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function LayoutContent({
  children,
}: RootLayoutProps): JSX.Element {
  const { headerProps } = useLayout();

  return (
    <div className="flex h-screen bg-black">
      <div className="text-white w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <header className="text-white px-4 py-2 flex justify-between items-center">
          <Header {...headerProps} />
        </header>
        <main className="p-4 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
