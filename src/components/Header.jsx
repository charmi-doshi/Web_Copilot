import React from "react";
import { Bot } from "lucide-react";

const Header = () => (
  <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
      <Bot size={20} /> Web UI Copilot
    </button>
  </div>
);

export default Header;
