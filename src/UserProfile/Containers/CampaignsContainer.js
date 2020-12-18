import React from 'react'
import { connect } from 'react-redux'
import CampaignCard from '../Components/CampaignCard'

function CampaignsContainer(props) {
  return (
    <div className="index-container">
      {props.user.campaigns.length > 0 ? renderCampaignCards(props.user) : <h3>No Campaigns to Display</h3>}
    </div>
  )
}

function renderCampaignCards(user) {
  return user.campaigns.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign}/>)
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // TODO add functions for the profile controls buttons
}

export default connect(mapStateToProps, actionCreators)(CampaignsContainer)