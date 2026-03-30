"use client";
import { useEffect, useState } from "react";
import FinanceForm from "../../components/FinanceForm";
import ScoreCard from "../../components/ScoreCard";
import ChatUI from "../../components/ChatUI";

// 🆕 New Components
import AskAI from "../../components/AskAI";
import SIPPlanner from "../../components/SIPPlanner";
import TaxCalculator from "../../components/TaxCalculator";

export default function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    if (id) setUserId(id);
  }, []);

  if (!userId) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading user...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          💼 Finance AI Dashboard
        </h1>
        <p className="text-gray-500">
          Manage your finances with AI-powered insights
        </p>
      </div>

      {/* FIRST TIME USER */}
      {!ready ? (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Enter Your Financial Details
          </h2>

          <FinanceForm userId={userId} onDone={() => setReady(true)} />
        </div>
      ) : (
        <>
          {/* GRID LAYOUT */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* SCORE CARD */}
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-3">📊 Your Score</h2>
              <ScoreCard userId={userId} />
            </div>

            {/* CHAT AI */}
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-3">🤖 AI Advisor</h2>
              <ChatUI userId={userId} />
            </div>

            {/* ASK AI */}
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-3">💬 Ask Anything</h2>
              <AskAI />
            </div>

            {/* SIP PLANNER */}
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-3">📈 SIP Planner</h2>
              <SIPPlanner />
            </div>

            {/* TAX CALCULATOR */}
            <div className="bg-white p-5 rounded-2xl shadow-md md:col-span-2">
              <h2 className="text-lg font-semibold mb-3">🧾 Tax Calculator</h2>
              <TaxCalculator />
            </div>

          </div>
        </>
      )}
    </div>
  );
}