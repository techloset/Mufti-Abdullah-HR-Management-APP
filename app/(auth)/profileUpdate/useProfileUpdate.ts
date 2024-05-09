import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function useProfileUpdate() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("");
  const [eamil, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session: Session | null = await getSession();
      if (session?.user?.email) {
        setEmail(session.user.email);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;

    if (inputName === "name") {
      setName(value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!name) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: eamil,
        name: name,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(
        "http://localhost:3000/api/register",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      router.push("/");
      setLoading(false);
      toast.success("Profile updated successfully.");
    } catch (error: any) {
      setLoading(false);
      console.error("Error updating profile:", error);
      toast.error(`Error updating profile: ${error.message}`);
    }
  };

  return { handleChange, handleSubmit, loading, name };
}
