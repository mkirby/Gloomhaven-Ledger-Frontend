import React, { useState } from "react";
import { connect } from "react-redux";
import { Menu, Dropdown } from "semantic-ui-react";
import "./LedgerControls.css";

function LedgerControls(props) {
  const [activePage, handlePageChange] = useState("");
  const [campaign_id, updateCampaignId] = useState("");
  const [party_id, updatePartyId] = useState("");

  const handleCampaignChange = (e, { value }) => updateCampaignId(value);
  const handlePartyChange = (e, { value }) => updatePartyId(value);

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
            active={activePage === "World"}
            onClick={() => handlePageChange("World")}
            icon="map outline"
          />
          <Menu.Item
            name="City"
            active={activePage === "City"}
            onClick={() => handlePageChange("City")}
            icon="building outline"
          />
          <Menu.Item
            name="Party"
            active={activePage === "Party"}
            onClick={() => handlePageChange("Party")}
            icon="users"
          />
          <Menu.Item
            name="Records"
            active={activePage === "Records"}
            onClick={() => handlePageChange("Records")}
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
  return campaign.parties.map((party) => {
    return {
      key: party.id,
      text: party.name,
      value: party.id,
    };
  });
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  // import action creators as needed
};

export default connect(mapStateToProps, actionCreators)(LedgerControls);
