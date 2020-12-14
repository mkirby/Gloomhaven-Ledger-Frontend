import React from 'react'
import { connect } from 'react-redux'
import CampaignCard from '../Components/CampaignCard'

function CampaignsContainer(props) {
  console.log("campaigns container", props)
  return (
    <div className="campaigns-container">
      {props.user.campaigns.length > 0 ? renderCampaignCards(props.user) : <h4>No Campaigns to Display</h4>}
    </div>
  )
}

function renderCampaignCards(user) {
  // add in the campaign card
  return user.campaigns.map(campaign => <CampaignCard campaign={campaign} userCampaigns={user.user_campaigns}/>)
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // TODO add functions for the profile controls buttons
}

export default connect(mapStateToProps, actionCreators)(CampaignsContainer)