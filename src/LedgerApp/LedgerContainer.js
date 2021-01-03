import React from "react";
import WorldMap from "./WorldMap";
import "./LedgerContainer.css";

function LedgerContainer() {
  return (
    <div className="ledger__container">
      {/* need to conditionally render content based on menu selection of ledger app */}
      <WorldMap />
    </div>
  );
}

export default LedgerContainer;
