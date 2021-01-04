import React, { useState } from "react";
import { connect } from "react-redux";
import { Menu, Dropdown } from "semantic-ui-react";
import "./LedgerControls.css";

import { ledgerAction } from "../_actions/ledgerActions";

function LedgerControls(props) {
  // get the current ledger details from Redux store
  const ledger = props.ledger;
  const currentCampaign = ledger.campaign ? ledger.campaign : "";
  const currentParty = ledger.party ? ledger.party : "";
  const currentPage = ledger.page ? ledger.page : "";

  // these variables control the active effect on the menu items
  const [activeItem, handleItemChange] = useState(currentPage);
  // as well as the conditional disabling and default setting of the campaign and party dropdowns
  const [campaign_id, updateCampaignId] = useState(currentCampaign);
  const [party_id, updatePartyId] = useState(currentParty);

  // console.log({ ledger, currentCampaign, currentParty, currentPage });
  // console.log({ activeItem, campaign_id, party_id });

  // handleCampaignChange and handlePartyChange update menu dropdowns
  // but also call a ledgerAction to update Redux store
  const handleCampaignChange = (e, { value }) => {
    updateCampaignId(value);
    props.changeCampaign(value, props.ledger);
  };
  const handlePartyChange = (e, { value }) => {
    updatePartyId(value);
    props.changeParty(value, props.ledger);
  };

  return (
    <div className="ledger__controls">
      <Menu attached stackable size="tiny" borderless>
        <Menu.Menu position="left">
          <Menu.Item>
            <Dropdown
              disabled={!props.user}
              placeholder="Select Campaign"
              search
              selection
              options={props.user ? renderCampaignOptions(props.user) : []}
              value={campaign_id}
              onChange={handleCampaignChange}
              noResultsMessage="No User Campaigns"
            />
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              disabled={campaign_id === ""}
              placeholder="Select Party"
              search
              selection
              options={
                campaign_id === ""
                  ? []
                  : renderPartyOptions(props.user, campaign_id)
              }
              value={party_id}
              onChange={handlePartyChange}
              noResultsMessage="No Campaign Parties"
            />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right" style={{ paddingRight: "16.2857px" }}>
          <Menu.Item
            name="World"
            active={activeItem === "World"}
            onClick={() => {
              handleItemChange("World");
              props.changePage("World", props.ledger);
            }}
            icon="map outline"
          />
          <Menu.Item
            name="City"
            active={activeItem === "City"}
            onClick={() => {
              handleItemChange("City");
              props.changePage("City", props.ledger);
            }}
            icon="building outline"
          />
          <Menu.Item
            name="Party"
            active={activeItem === "Party"}
            onClick={() => {
              handleItemChange("Party");
              props.changePage("Party", props.ledger);
            }}
            icon="users"
          />
          <Menu.Item
            name="Records"
            active={activeItem === "Records"}
            onClick={() => {
              handleItemChange("Records");
              props.changePage("Records", props.ledger);
            }}
            icon="book"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
}

function renderCampaignOptions(user) {
  return user.campaigns.map((campaign) => {
    return {
      key: campaign.id,
      text: campaign.name,
      value: campaign.id,
    };
  });
}

function renderPartyOptions(user, campaign_id) {
  const campaign = user.campaigns.find(
    (campaign) => campaign.id === campaign_id
  );
  if (campaign) {
    return campaign.parties.map((party) => {
      return {
        key: party.id,
        text: party.name,
        value: party.id,
      };
    });
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  const { ledger } = state;
  return { user, ledger };
}

const actionCreators = {
  changePage: ledgerAction.changePage,
  changeCampaign: ledgerAction.changeCampaign,
  changeParty: ledgerAction.changeParty,
};

export default connect(mapStateToProps, actionCreators)(LedgerControls);
