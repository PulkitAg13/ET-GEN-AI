"use client";
import { useState } from "react";
import { chatAI } from "../utils/api";

export default function ChatUI({ userId }) {
  const [messages, setMessages] = useState([]);

  const handleAsk = async () => {
    const res = await chatAI(userId);

    setMessages([
      ...messages,
      { role: "ai", text: res.response }
    ]);
  };

  return (
    <div className="p-4 border mt-4">
      <h2 className="text-xl mb-2"></h2>

      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((m, i) => (
          <p key={i}>{m.text}</p>
        ))}
      </div>

      <button onClick={handleAsk} className="bg-green-500 p-2 w-full">
        Ask AI Advice
      </button>
    </div>
  );
}