import { useState, useEffect } from "react";
import { calculateSIP } from "../utils/api";

function SIPPlanner() {
  const [result, setResult] = useState(null);

  const userId = localStorage.getItem("user_id");

  const handleFetch = async () => {
    const res = await calculateSIP(userId);
    setResult(res);
  };

  return (
    <div>
      <h2></h2>

      <button onClick={handleFetch}>
        Generate SIP Plan
      </button>

      {result && (
        <div>
          <p>Monthly Investment: ₹{result.monthly_investment}</p>
          <p>Future Value: ₹{result.future_value}</p>
        </div>
      )}
    </div>
  );
}

export default SIPPlanner;