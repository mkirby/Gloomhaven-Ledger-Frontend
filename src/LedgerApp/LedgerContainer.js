import React from "react";
import WorldPage from "./World/WorldPage";
import "./LedgerContainer.css";
import { connect } from "react-redux";

function LedgerContainer(props) {
  const { page } = props.ledger;
  return <div className="ledger__container">{renderLedgerPage(page)}</div>;
}

function renderLedgerPage(page) {
  if (page === "World") {
    return <WorldPage />;
  } else if (page === "City") {
    return <h1>City</h1>;
  } else if (page === "Party") {
    return <h1>Party</h1>;
  } else if (page === "Records") {
    return <h1>Records</h1>;
  }
}

function mapStateToProps(state) {
  const { ledger } = state;
  return { ledger };
}

const actionCreators = {
  // import action creators as needed
};

export default connect(mapStateToProps, actionCreators)(LedgerContainer);
