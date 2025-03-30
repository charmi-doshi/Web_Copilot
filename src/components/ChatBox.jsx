// import React, { useState } from "react";

// const Chatbox = ({ sendQuery }) => {
//   const [query, setQuery] = useState("");

//   return (
//     <div className="flex items-center mt-4">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Ask anything..."
//         className="flex-1 p-2 border rounded-full"
//       />
//       <button onClick={() => sendQuery(query, false)} className="ml-2 p-2 border rounded">📊</button>
//       <button onClick={() => sendQuery(query, true)} className="ml-2 p-2 border rounded">JSON</button>
//       <button onClick={() => setQuery("")} className="ml-2 p-2 border rounded">❌</button>
//     </div>
//   );
// };

// export default Chatbox;

import React, { useState } from "react";
import { Send, Search, BarChart2, Mic, Plus } from "lucide-react";

const Chatbox = ({ sendQuery }) => {
  const [query, setQuery] = useState("");

  const handleSaveWidget = () => {
    if (!query.trim()) return;

    const label = prompt("Enter a name for this widget:");
    if (!label) return;

    const newWidget = {
      type: "custom",
      prompt: query,
      label,
    };

    const existing = JSON.parse(localStorage.getItem("copilot_widgets") || "[]");
    existing.push(newWidget);
    localStorage.setItem("copilot_widgets", JSON.stringify(existing));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendQuery(query, false);
        setQuery("");
      }}
      className="border-t border-gray-200 p-4 bg-white"
    >
      <div className="flex items-center gap-4 max-w-4xl mx-auto relative">
        <div className="absolute left-4 flex items-center gap-2">
          <Search size={20} className="text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search or enter a prompt..."
          className="flex-1 pl-12 pr-32 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <div className="absolute right-4 flex items-center gap-2">
          <button type="button" onClick={handleSaveWidget} className="p-2 text-blue-500 hover:text-blue-600">
            <Plus size={20} />
          </button>
          <button type="button" className="p-2 text-gray-400 hover:text-gray-600">
            <BarChart2 size={20} />
          </button>
          <button type="button" className="p-2 text-gray-400 hover:text-gray-600">
            <Mic size={20} />
          </button>
          <button
            type="submit"
            disabled={!query.trim()}
            className="p-2 text-green-500 hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Chatbox;

