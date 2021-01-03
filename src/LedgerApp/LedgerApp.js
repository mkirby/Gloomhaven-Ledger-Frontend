import React from "react";
import LedgerControls from "./LedgerControls";
import LedgerContainer from "./LedgerContainer";
import "./LedgerApp.css";

function LedgerApp() {
  return (
    <div className="ledger">
      <LedgerControls />
      <LedgerContainer />
    </div>
  );
}

export default LedgerApp;
