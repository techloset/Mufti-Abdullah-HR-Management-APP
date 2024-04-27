"use client";
import img from "../../assets/icons/Vector.svg";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
type Change = {
  target: {
    name: string;
    value: string;
  };
};
function page() {
  const router = useRouter();
  const [state, setState] = useState({ email: "", password: "", name: "" });
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password, name } = state;
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });
    toast("You Are successfully registered");

    router.push("/login");
  };
  return (
    <section className="bg-black  h-auto flex p-4 justify-center items-center text-white  ">
      <div className="flex flex-col md:w-[445px] w-full justify-center py-8 items-center  lg:py-0">
        <div className="w-full rounded-lg shadow ">
          <Image
            src={img}
            alt="Icon"
            className="md:w-[409px] md:h-[166px] h-full w-9/12"
          />
          <div className="md:w-[445px]  my-8 w-auto">
            <p className="text-2xl font-bold mb-2 md:text-3xl dark:text-white">
              Wellcome
            </p>
            <p className="text-base mb-4">Please Register here</p>
            <form
              className="space-y-4 md:space-y-6 w-full"
              onSubmit={handleSubmit}
            >
              <div className="w-auto border-[1px] border-primary rounded-lg p-2">
                <label className="block mb-2 text-sm font-medium text-primary dark:text-primary">
                  Your Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  id="name"
                  className="outline-none bg-transparent  text-white sm:text-sm block w-full p-2.5  focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-auto border-[1px] border-primary rounded-lg p-2">
                <label className="block mb-2 text-sm font-medium text-primary dark:text-primary">
                  Your email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  className="outline-none bg-transparent  text-white sm:text-sm block w-full p-2.5  focus:outline-none"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="w-auto border-[1px] border-primary rounded-lg p-2">
                <label className="block mb-2 text-sm font-medium text-primary dark:text-primary">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="outline-none bg-transparent  text-white sm:text-sm block w-full p-2.5  focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                SignUp
              </button>

              <p className="text-sm font-light text-white-500 dark:text-white-400">
                If You are Registered
                <Link
                  href={"/login"}
                  className="font-medium ms-1 text-primary hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
