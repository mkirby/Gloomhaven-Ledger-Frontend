import React from 'react'
import dateFormat from 'dateformat';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function CampaignCard(props) {
  const { user_campaign } = props
  const { username } = props.user
  const { id } = user_campaign.campaign
  return (
    <div className='index-card campaign-card'>
      <h3>{user_campaign.campaign.name}</h3>
      <p>Campaign Started: {dateFormat(user_campaign.campaign.created_at, "m/d/yy")}</p>
      <p>Role: {user_campaign.owner ? "Owner" : "Player"}</p>
      {user_campaign.owner && 
        <Menu widths={3} fluid>
          <Menu.Item
            link
            name='View'
            as={NavLink}
            to={`/${username}/campaigns/${id}`}
          />
          <Menu.Item link>
            Edit
          </Menu.Item>
          <Menu.Item link>
            Delete
          </Menu.Item>
        </Menu>}
      {!user_campaign.owner &&
        <Menu widths={3} fluid>
          <Menu.Item
            link
            name='View'
            as={NavLink}
            to={`/${username}/campaigns/${id}`}
          />
        </Menu>}
    </div>
  )
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // add dispatch actions as needed
}

export default connect(mapStateToProps, actionCreators)(CampaignCard)