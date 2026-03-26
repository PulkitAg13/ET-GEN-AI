"use client";
import { useState } from "react";
import { createUser } from "../utils/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const router = useRouter();

  const handleCreate = async () => {
    const res = await createUser({ name, age: Number(age) });

    localStorage.setItem("user_id", res.id);

    router.push("/dashboard");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">AI Money Mentor</h1>

      <input
        placeholder="Name"
        className="block p-2 mb-2 text-black"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Age"
        className="block p-2 mb-2 text-black"
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={handleCreate} className="bg-blue-500 p-2">
        Start
      </button>
    </div>
  );
}