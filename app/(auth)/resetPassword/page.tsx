"use client";
import img from "../../assets/icons/Frame 427320595.svg";
import React, { useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Change = {
  target: {
    name: string;
    value: string;
  };
};
function page() {
  const router = useRouter();
  const form = useRef();
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const email = state.email; // Extract email directly from state

    if (!email) {
      console.error("Email is required");
      return;
    }

    try {
      const res = await axios.put("http://localhost:3000/api/user", {
        email: email,
        form: form,
      });

      const data = res.data;
      console.log("🚀 ~ handleSubmit ~ data:", data);

      if (data.success) {
        router.push("/success");
      } else {
        console.error("Failed to send OTP:", data.error);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <section className="bg-black h-screen flex justify-center items-center w-full text-white ">
      <div className="flex flex-col bg-secondry items-center max-w-[445px] max-h-[561px] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-fullrounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <Link href={"/api/auth/login"}>
            <Image
              src={img}
              alt="Icon"
              width={67}
              height={24}
              className="ms-6"
            />
          </Link>
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold mb-2 md:text-3xl dark:text-white">
              Forgot Password
            </h1>
            <p className="text-base mb-4">
              Enter your registered email address. we’ll send you a code to
              reset your password.
            </p>
            <form
              ref={form}
              className="space-y-4 md:space-y-6 max-w-[445px]"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  className="border-2  text-black sm:text-sm rounded-lg block w-full p-2.5  focus:border-primary focus:outline-none "
                  placeholder="Your email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
