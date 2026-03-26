"use client";
import { useEffect, useState } from "react";
import { getScore } from "../utils/api";

export default function ScoreCard({ userId }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function load() {
      const res = await getScore(userId);
      setScore(res.score);
    }
    load();
  }, []);

  return (
    <div className="p-4 border mt-4">
      <h2 className="text-xl">Money Health Score</h2>
      <p className="text-3xl mt-2">{score ?? "Loading..."}</p>
    </div>
  );
}