"use client";
import { useEffect, useState } from "react";
import FinanceForm from "../../components/FinanceForm";
import ScoreCard from "../../components/ScoreCard";
import ChatUI from "../../components/ChatUI";

export default function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    if (id) setUserId(id);
  }, []);

  if (!userId) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      {!ready ? (
        <FinanceForm userId={userId} onDone={() => setReady(true)} />
      ) : (
        <>
          <ScoreCard userId={userId} />
          <ChatUI userId={userId} />
        </>
      )}
    </div>
  );
}