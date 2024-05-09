import { Change } from "../../constants/types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Uselogin() {
  const router = useRouter();
  const [state, setState] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const user = await signIn("credentials", {
        ...state,
        redirect: false,
      });

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
    } catch (error: any) {
      toast("An error occurred while logging in" + error);
    }
  };
  return {
    handleSubmit,
    handleChange,
    isLoading,
  };
}
