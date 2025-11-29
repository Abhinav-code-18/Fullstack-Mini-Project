import { useState } from "react";
import api from "../API";

export default function AISuggestions() {
  const [items, setItems] = useState([]);

  const fetchSuggestions = async () => {
  if (items.length > 0) {
    setItems([]);
    return;
  }
  const res = await api.get("/ai/suggestions");
  setItems(res.data.suggestions);
};

  return (
    <div className="card p-3 text-left">
      <button className="btn btn-secondary mb-1 d-block mx-auto" onClick={fetchSuggestions}>
        Get AI Suggestions
      </button>

        {items.length > 0 ? (
        <ul>
          {items.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        )
      : null}
    </div>
  );
}
