"use client";
import img from "../../assets/icons/Frame 427320595.svg";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Change } from "../../constants/types";

export default function Page() {
  const router = useRouter();
  const [state, setState] = useState({ otp: "" });
  const [otp, setOtp] = useState({ email: "", otp: "" });
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  useEffect(() => {
    const otpValue = localStorage.getItem("otpData");

    if (otpValue !== null) {
      const parsedOtp = JSON.parse(otpValue);
      if (parsedOtp) {
        setOtp(parsedOtp);
      }
    }
  }, []);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (!otp.otp || otp.otp == "") {
        toast.error("OTP Expired");
        return;
      }

      const matchOtp = otp.otp == state.otp;

      if (!matchOtp) {
        toast.error("OTP not matched");
        return;
      }
      router.push("/newPassword");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    setTimeout(function () {
      localStorage.removeItem("otpData");
    }, 60 * 1000);
  }, []);
  return (
    <section className="bg-black h-screen flex justify-center items-center w-full text-white ">
      <div className="flex flex-col bg-secondry items-center max-w-[445px] max-h-[561px] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-fullrounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <Link href={"/resetPassword"}>
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
              OTP
            </h1>
            <p className="text-base mb-4">
              Check Your email and Enter OTP in one Minute otherwise it will
              expire.
            </p>
            <form
              className="space-y-4 md:space-y-6 max-w-[445px]"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your OTP
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="otp"
                  id="otp"
                  className="border-2  text-black sm:text-sm rounded-lg block w-full p-2.5  focus:border-primary focus:outline-none "
                  placeholder="Your OTP here"
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
