// import React from "react";
// import SavedWidgets from "./SavedWidgets";

// const Sidebar = ({ fetchAndPlot }) => (
//   <div className="w-64 bg-gray-200 p-4 border-r overflow-y-auto">
//     <h2 className="text-xl font-bold mb-4">API Widget</h2>
//     <img src="./Widgets.png" alt="Widgets" className="w-44 mx-auto" />
//     <div className="flex flex-col gap-3 mt-4">
//       <button onClick={() => fetchAndPlot("gdp")} className="p-2 bg-white border rounded">WorldBank</button>
//       <button onClick={() => fetchAndPlot("co2")} className="p-2 bg-white border rounded">CO2</button>
//       <button onClick={() => fetchAndPlot("agri")} className="p-2 bg-white border rounded">Agri</button>
//     </div>
//     <SavedWidgets fetchAndPlot={fetchAndPlot} />
//   </div>
// );

// export default Sidebar;
import React from "react";
import { Plus, Globe, Database, Cloud } from "lucide-react";
import SavedWidgets from "./SavedWidgets";


const Sidebar = ({ fetchAndPlot, widgets }) => (
  <div className="w-80 bg-white border-r border-gray-200 flex flex-col p-4">
    <button className="m-3 flex items-center gap-2 p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
      <Plus size={20} />
      <span>New Chat</span>
    </button>
    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">API Widgets</h2>
    <div className="space-y-2">
      {widgets.map((widget, index) => (
        <button
          key={index}
          onClick={() => fetchAndPlot(widget.type)}
          className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {widget.icon} {widget.label}
        </button>
      ))}
    </div>
    <div className="mt-4">
    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Saved Widgets</h2>
    <SavedWidgets fetchAndPlot={fetchAndPlot} />
    </div>
  </div>
);

export default Sidebar;
