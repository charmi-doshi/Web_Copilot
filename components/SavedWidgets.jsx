import React, { useState, useEffect } from "react";

const SavedWidgets = ({ fetchAndPlot }) => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const savedWidgets = JSON.parse(localStorage.getItem("copilot_widgets") || "[]");
    setWidgets(savedWidgets);
  }, []);

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2 text-gray-700">Saved Widgets</h3>
      <ul>
        {widgets.map((widget, index) => (
          <li
            key={index}
            onClick={() => fetchAndPlot(widget.type, widget.prompt, true)}
            className="bg-gray-100 p-2 mt-2 cursor-pointer rounded hover:bg-gray-200"
          >
            {widget.label || widget.prompt} ({widget.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedWidgets;
