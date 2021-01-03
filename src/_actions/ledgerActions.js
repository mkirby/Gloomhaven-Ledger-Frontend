import { ledgerConstants } from "../_constants/ledgerConstants";
// import { alertActions } from "./alertActions";

// alerts have been commented out for all ledger actions
// to get test notifications when implementing fucntionality uncomment alertActions

export const ledgerAction = {
  changePage,
  changeCampaign,
  changeParty,
};

function changePage(newPage, currentLedger) {
  return (dispatch) => {
    dispatch(success(newPage));
    // dispatch(alertActions.success(`Page Changed to ${newPage}`));
    localStorage.setItem(
      "ledger",
      JSON.stringify({ ...currentLedger, page: newPage })
    );
  };

  function success(page) {
    return { type: ledgerConstants.CHANGE_PAGE, page };
  }
}

function changeCampaign(campaign_id, currentLedger) {
  return (dispatch) => {
    dispatch(success(campaign_id));
    // dispatch(alertActions.success(`Campaign Changed to ${campaign_id}`));
    localStorage.setItem(
      "ledger",
      JSON.stringify({ ...currentLedger, campaign: campaign_id, party: "" })
    );
  };

  function success(id) {
    return { type: ledgerConstants.CHANGE_CAMPAIGN, id };
  }
}

function changeParty(party_id, currentLedger) {
  return (dispatch) => {
    dispatch(success(party_id));
    // dispatch(alertActions.success(`Party Changed to ${party_id}`));
    localStorage.setItem(
      "ledger",
      JSON.stringify({ ...currentLedger, party: party_id })
    );
  };

  function success(id) {
    return { type: ledgerConstants.CHANGE_PARTY, id };
  }
}
