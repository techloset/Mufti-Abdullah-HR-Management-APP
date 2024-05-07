import { Change } from "@/app/constants/Types";
import { addUser } from "@/redux/slices/user";
import { useAppDispatch } from "@/redux/storeHook";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
export type State = {
  email: string;
  password: string;
  name: string;
};
export default function useRegister() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [state, setState] = useState({ email: "", password: "", name: "" });
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await dispatch(addUser(state as State));
      toast("You are successfully registered");
      router.push("/login");
    } catch (error) {
      console.error("Error occurred during registration:", error);
      toast(
        `An error occurred during registration. Please try again later.${error}`
      );
      return;
    }
  };
  return { handleChange, handleSubmit };
}
