import { useState } from "react";
import { calculateTax } from "../utils/api";

function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await calculateTax({ income });
    setResult(res);
  };

  return (
    <div>

      <input
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Enter Income"
      />

      <button onClick={handleSubmit}>Calculate Tax</button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}

export default TaxCalculator;