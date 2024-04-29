import { Change } from "@/app/constants/Types";
import { updateUserPassword } from "@/redux/slices/user";
import { useAppDispatch } from "@/redux/storeHook";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function usePasswordUpdate() {
  const dispatch = useAppDispatch();
  const [oldPassword, setOldPassword] = useState("");
  console.log("🚀 ~ usePasswordUpdate ~ oldPassword:", oldPassword);
  const [newPassword, setNewPassword] = useState("");
  console.log("🚀 ~ usePasswordUpdate ~ newPassword:", newPassword);
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log("🚀 ~ usePasswordUpdate ~ confirmPassword:", confirmPassword);
  const currentUser = useSession();
  const currentUserEmail = currentUser.data?.user?.email;
  console.log("currentUserEmail", currentUserEmail);

  const handleChange = (e: Change) => {
    const { name, value } = e.target;
    if (name === "oldPassword") setOldPassword(value);
    else if (name === "newPassword") setNewPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(oldPassword, newPassword);

    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      await dispatch(
        updateUserPassword({
          email: currentUserEmail || "",
          data: { oldPassword, newPassword },
        })
      );
      console.log("Password changed successfully.");
      toast.success("Password changed successfully.");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(`Error changing password: ${error}`);
    }
  };

  return { handleChange, handleSubmit };
}
