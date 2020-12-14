import React from 'react'
import dateFormat from 'dateformat';
import { Menu } from 'semantic-ui-react';

function CampaignCard({user_campaign}) {
  return (
    <div className='index-card'>
      <h3>{user_campaign.campaign.name}</h3>
      <p>Campaign Started: {dateFormat(user_campaign.campaign.created_at, "m/d/yy")}</p>
      <p>Role: {user_campaign.owner ? "Owner" : "Player"}</p>
      {user_campaign.owner && 
        <Menu widths={3} fluid>
          <Menu.Item link>
            View
          </Menu.Item>
          <Menu.Item link>
            Edit
          </Menu.Item>
          <Menu.Item link>
            Delete
          </Menu.Item>
        </Menu>}
      {!user_campaign.owner &&
        <Menu widths={3} fluid>
          <Menu.Item link>
            View
          </Menu.Item>
        </Menu>}
    </div>
  )
}

// connect to Redux to access dispatch actions

export default CampaignCard