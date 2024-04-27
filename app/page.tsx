"use client";

import { useState, useEffect } from "react";
import Dashboard from "./(pages)/dashboard/page";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session: Session | null = await getSession();
      if (session?.user?.name) {
        setUserName(session.user.name);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-black">
      <div className=" text-white w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <header className="text-white px-4 py-2 flex justify-between items-center">
          <Header
            mainTitle={userName ? userName : "Loading..."}
            greeting={"Good morning"}
          />
        </header>
        <main className="p-4 flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
