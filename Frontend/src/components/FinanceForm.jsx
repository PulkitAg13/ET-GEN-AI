"use client";
import { useState } from "react";
import { addFinance } from "../utils/api";

export default function FinanceForm({ userId, onDone }) {
  const [form, setForm] = useState({
    income: "",
    expenses: "",
    savings: "",
    debt: ""
  });

  const handleSubmit = async () => {
    await addFinance({
      user_id: userId,
      ...form
    });
    onDone();
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl mb-3">Enter Financial Data</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="block p-2 mb-2 w-full text-black"
          onChange={(e) => setForm({...form, [key]: e.target.value})}
        />
      ))}

      <button onClick={handleSubmit} className="bg-blue-500 p-2 w-full">
        Submit
      </button>
    </div>
  );
}