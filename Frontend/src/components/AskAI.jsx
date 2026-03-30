import { useState } from "react";
import { askAI } from "../utils/api";

function AskAI() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    if (!query) return;

    const res = await askAI(query);

    if (res.response) {
      setResponse(res.response);
    } else {
      setResponse("Error fetching AI response");
    }
  };

  return (
    <div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything..."
      />

      <button onClick={handleAsk}>Ask</button>

      <p>{response}</p>
    </div>
  );
}

export default AskAI;