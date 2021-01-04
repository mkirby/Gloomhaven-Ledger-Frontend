import React from "react";
import ScenarioTable from "./ScenarioTable";
import WorldMap from "./WorldMap";
import "./WorldPage.css";

function WorldPage() {
  return (
    <div className="world">
      <WorldMap />
      <ScenarioTable />
    </div>
  );
}

export default WorldPage;
