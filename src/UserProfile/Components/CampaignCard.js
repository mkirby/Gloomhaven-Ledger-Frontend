import React from "react";
import dateFormat from "dateformat";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { campaignAction } from "../../_actions/campaignActions";
import EditModal from "../Modals/EditModal";

function CampaignCard(props) {
  const { campaign } = props;
  const { username } = props.user;
  const { id } = campaign;
  const isOwner = campaign.owner.id === props.user.id;

  return (
    <div className="index-card campaign-card">
      <h3>{campaign.name}</h3>
      <p>Campaign Started: {dateFormat(campaign.created_at, "m/d/yy")}</p>
      <p>Role: {isOwner ? "Owner" : "Player"}</p>
      {isOwner && (
        <Menu widths={3} fluid size="mini">
          <Menu.Item
            link
            name="View"
            as={NavLink}
            to={`/${username}/campaigns/${id}`}
          />
          <EditModal model="campaign" trigger="menu" campaign={campaign} />
          <Menu.Item
            link
            name="Delete"
            onClick={() => {
              props.delete(campaign);
            }}
          />
        </Menu>
      )}
      {!isOwner && (
        <Menu widths={3} fluid>
          <Menu.Item
            link
            name="View"
            as={NavLink}
            to={`/${username}/campaigns/${id}`}
          />
        </Menu>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  delete: campaignAction.deleteCampaign,
};

export default connect(mapStateToProps, actionCreators)(CampaignCard);
