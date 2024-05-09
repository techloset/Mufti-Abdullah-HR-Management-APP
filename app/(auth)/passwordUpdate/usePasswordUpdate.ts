import { Change } from "../../constants/types";
import { updateUserPassword } from "@/redux/slices/user";
import { useAppDispatch } from "@/redux/storeHook";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function usePasswordUpdate() {
  const dispatch = useAppDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const currentUser = useSession();
  const currentUserEmail = currentUser.data?.user?.email;

  const handleChange = (e: Change) => {
    const { name, value } = e.target;
    if (name === "oldPassword") setOldPassword(value);
    else if (name === "newPassword") setNewPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

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

      toast.success("Password changed successfully.");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(`Error changing password: ${error}`);
    }
  };

  return { handleChange, handleSubmit };
}
