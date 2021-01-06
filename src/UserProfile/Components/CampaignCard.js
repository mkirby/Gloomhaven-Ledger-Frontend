import React, { useState } from "react";
import dateFormat from "dateformat";
import { Menu, Segment, Confirm } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { campaignAction } from "../../_actions/campaignActions";
import EditModal from "../Modals/EditModal";

function CampaignCard(props) {
  const { campaign } = props;
  const { username } = props.user;
  const { id } = campaign;
  const isOwner = campaign.owner.id === props.user.id;
  const [open, openConfirm] = useState(false);

  return (
    <Segment
      className="index-card campaign-card"
      style={{ margin: "0 10px 10px 0" }}
    >
      <Confirm
        open={open}
        cancelButton="Cancel"
        confirmButton="Delete"
        onCancel={() => openConfirm(false)}
        onConfirm={() => props.delete(campaign)}
      />
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
              openConfirm(true);
              // props.delete(campaign);
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
    </Segment>
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
