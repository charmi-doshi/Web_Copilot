import React, { useState } from "react";
import Chart from "chart.js/auto";
import Sidebar from "./components/Sidebar";

import Chatbox from "./components/ChatBox";
import ChartDisplay from "./components/ChartDisplay";
import { Globe, Database, Cloud, BarChart2 } from "lucide-react";

const apiUrls = {
  gdp: "https://api.worldbank.org/v2/country/WLD/indicator/NY.GDP.MKTP.KD.ZG?format=json",
  co2: "https://api.worldbank.org/v2/country/WLD/indicator/EN.GHG.CO2.AG.MT.CE.AR5?format=json",
  agri: "https://api.worldbank.org/v2/country/WLD/indicator/AG.LND.AGRI.ZS?format=json",
};

const App = () => {
  const [chart, setChart] = useState(null);

  const fetchAndPlot = (
    type,
    prompt = null,
    fromWidget = false,
    jsonOnly = false
  ) => {
    fetch(apiUrls[type])
      .then((res) => res.json())
      .then((data) => {
        if (jsonOnly) {
          alert(JSON.stringify(data, null, 2));
          return;
        }

        const entries = data[1].filter((d) => d.value !== null);
        const labels = entries.map((d) => d.date).reverse();
        const values = entries.map((d) => d.value).reverse();

        if (chart) chart.destroy();

        const ctx = document.getElementById("apiChart").getContext("2d");
        const newChart = new Chart(ctx, {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: `${type.toUpperCase()} Data`,
                data: values,
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            scales: { x: { display: true }, y: { display: true } },
          },
        });

        setChart(newChart);
      })
      .catch((err) => alert("Error fetching data: " + err));
  };

  const widgets = [
    { label: "WorldBank", icon: <Globe size={20} />, type: "gdp" },
    { label: "CO2", icon: <Database size={20} />, type: "co2" },
    { label: "Agriculture", icon: <Cloud size={20} />, type: "agri" },
    // { label: "Custom Chart", icon: <BarChart2 size={20} />, type: "custom-chart" }, // Dynamically added widget
  ];
  return (
    <div className="flex h-screen">
      <Sidebar fetchAndPlot={fetchAndPlot} widgets={widgets} />
      <div className="flex-1 flex flex-col p-4">
        {/* <Header /> */}
        <ChartDisplay />

        <div className="mt-auto">
          <Chatbox sendQuery={fetchAndPlot} />
        </div>
      </div>
    </div>
  );
};

export default App;
