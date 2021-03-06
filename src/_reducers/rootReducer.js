import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import { authentication } from "./authenticationReducer";
import { registration } from "./registrationReducer";
import { ledger } from "./ledgerReducer";

const rootReducer = combineReducers({
  alert: alert,
  authentication: authentication,
  registration: registration,
  ledger: ledger,
});

export default rootReducer;
