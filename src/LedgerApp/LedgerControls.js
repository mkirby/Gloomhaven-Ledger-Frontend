import React, { useState } from "react";
import { connect } from "react-redux";
import { Menu, Dropdown } from "semantic-ui-react";

function LedgerControls(props) {
  const [activeItem, handleItemClick] = useState("");
  const [campaign_id, updateCampaignId] = useState("");
  const [party_id, updatePartyId] = useState("");

  const handleCampaignChange = (e, { value }) => updateCampaignId(value);
  const handlePartyChange = (e, { value }) => updatePartyId(value);

  return (
    <div className="ledger__controls">
      <Menu attached stackable size="tiny">
        <Menu.Menu position="left">
          <Menu.Item header>Campaign Controls</Menu.Item>
          <Menu.Item>
            <Dropdown
              disabled={!props.user}
              placeholder="Select Campaign"
              selection
              options={props.user ? renderCampaignOptions(props.user) : []}
              value={campaign_id}
              onChange={handleCampaignChange}
              noResultsMessage="Start a New Campaign"
            />
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              disabled={campaign_id === ""}
              placeholder="Select Party"
              selection
              options={
                campaign_id === ""
                  ? []
                  : renderPartyOptions(props.user, campaign_id)
              }
              value={party_id}
              onChange={handlePartyChange}
            />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            name="World"
            active={activeItem === "World"}
            onClick={() => handleItemClick("World")}
            icon="map outline"
          />
          <Menu.Item
            name="City"
            active={activeItem === "City"}
            onClick={() => handleItemClick("City")}
            icon="building outline"
          />
          <Menu.Item
            name="Party"
            active={activeItem === "Party"}
            onClick={() => handleItemClick("Party")}
            icon="users"
          />
          <Menu.Item
            name="Records"
            active={activeItem === "Records"}
            onClick={() => handleItemClick("Records")}
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
