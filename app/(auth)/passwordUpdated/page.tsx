"use client";
import React from "react";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Change = {
  target: {
    name: string;
    value: string;
  };
};
function page() {
  const router = useRouter();
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (event: any) => {
    event.preventDefault();
    signIn("credentials", {
      ...state,
      redirect: false,
    });
    router.push("/");
  };
  return (
    <section className="bg-black h-screen flex justify-center items-center w-full text-white ">
      <div className="flex flex-col bg-secondry items-center max-w-[445px] max-h-[561px] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-fullrounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6  sm:p-8 text-center">
            <h1 className="text-2xl mx-auto font-bold  mb-2 md:text-3xl dark:text-white">
              Password Update Successfully
            </h1>
            <p className="text-base mx-auto text-center mb-4">
              Your password has been update successfully
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
