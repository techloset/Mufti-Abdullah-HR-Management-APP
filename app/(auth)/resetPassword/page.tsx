"use client";
import img from "../../assets/icons/Frame 427320595.svg";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

type Change = {
  target: {
    name: string;
    value: string;
  };
};
function Page() {
  const router = useRouter();
  const [state, setState] = useState({ email: "" });
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const otp = Math.floor(100000 + Math.random() * 900000);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID || "",
      template_params: {
        to_email: state.email,
        to_name: state.email,
        from_name: "HR Management",
        user_email: state.email,
        otp: otp,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      localStorage.setItem(
        "otpData",
        JSON.stringify({ email: state.email, otp })
      );
      router.push("/otp");
      console.log(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    setTimeout(function () {
      localStorage.removeItem("otpData");
    }, 60 * 1000);
  }, [otp]);

  return (
    <section className="bg-black h-screen flex justify-center items-center w-full text-white ">
      <div className="flex flex-col bg-secondry items-center max-w-[445px] max-h-[561px] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-fullrounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <Link href={"/login"}>
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

export default Page;
