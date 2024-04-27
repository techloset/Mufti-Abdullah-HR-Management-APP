"use client";
import { HOMEICONS, ICON } from "@/app/constants/Images";
import { User } from "@/app/constants/Types";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getSession();
      setUser(userData as User);
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    signOut();
    return redirect("/login");
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-[184px] focus:outline-none"
        onClick={toggleDropdown}
      >
        <div className="flex">
          <Image src={HOMEICONS.USER} alt="Profile pic" />
          <div className="flex flex-col items-start ms-[5px]">
            {user && (
              <>
                <div className="text-sm font-semibold">{user.user.email}</div>
                <div className="text-[12px] text-[#A2A1A8]">Hr Manager</div>
              </>
            )}
          </div>
        </div>
        <Image
          src={ICON.ARROW}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500`}
          alt="Arrow Down"
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-[184px] border-grayBorder border-[1px] bg-customDark rounded shadow-lg">
          <ul>
            <li
              className="px-4 py-3 hover:bg-primary cursor-pointer"
              onClick={handleLogout}
            >
              Sign out
            </li>
            <Link href={"/passwordUpdate"}>
              <li className="px-4 py-3 hover:bg-primary cursor-pointer">
                Change Password
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
