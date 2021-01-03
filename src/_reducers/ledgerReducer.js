import { ledgerConstants } from "../_constants/ledgerConstants";

// pull ledger details from local storage once they are in there for initial state
let ledgerState = JSON.parse(localStorage.getItem("ledger"));
const initialState = ledgerState ? { ...ledgerState } : {};

export function ledger(state = initialState, action) {
  switch (action.type) {
    case ledgerConstants.CHANGE_PAGE:
      return { ...state, page: action.page };
    case ledgerConstants.CHANGE_CAMPAIGN:
      return { ...state, campaign: action.id, party: "" };
    case ledgerConstants.CHANGE_PARTY:
      return { ...state, party: action.id };
    default:
      return state;
  }
}
