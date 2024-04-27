"use client";
import img from "../../assets/icons/Vector.svg";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/app/components/loader/Loader";

type Change = {
  target: {
    name: string;
    value: string;
  };
};
function Login() {
  const router = useRouter();
  const [state, setState] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      console.log("Submitting with state:", state);
      const user = await signIn("credentials", {
        ...state,
        redirect: false,
      });
      console.log("signIn response:", user);

      if (user && user.ok) {
        toast("You Are successfully Login");
        router.push("/");
      } else {
        if (user && user.error === "CredentialsSignin") {
          toast("Invalid email or password");
        } else {
          toast("An error occurred while logging in");
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error:", error);
      toast("An error occurred while logging in");
    }
  };

  // const handleloginwithGoogle = () => {
  //   signIn("google", { callbackUrl: "/" });
  //   router.push("/");
  // };
  return (
    <section className="bg-black  h-auto flex p-4 justify-center items-center text-white ">
      <div className="flex flex-col md:w-[445px] w-full justify-center py-8 items-center  lg:py-0">
        <div className="w-full rounded-lg shadow ">
          <Image
            src={img}
            alt="Icon"
            className="md:w-[409px] md:h-[166px] h-full w-9/12"
          />
          <div className="md:w-[445px]  my-8 w-auto">
            <h1 className="text-2xl font-bold mb-2 md:text-3xl dark:text-white">
              Wellcome
            </h1>
            <p className="text-base mb-4">Please login heres</p>
            <form
              className="space-y-4 md:space-y-6 w-full"
              onSubmit={handleSubmit}
            >
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center  h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-primary   rounded accent-primary"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-primary dark:text-primary">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href="resetPassword"
                  className="text-sm font-medium text-primary hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <Loader />
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
              <p className="text-sm font-light text-white-500 dark:text-white-400">
                Don’t have an account yet?
                <Link
                  href={"/register"}
                  className="font-medium ms-1 text-primary hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign wiht Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
