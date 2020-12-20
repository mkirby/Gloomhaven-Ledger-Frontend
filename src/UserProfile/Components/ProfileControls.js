import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

import CreateModal from '../Modals/CreateModal'
import EditModal from '../Modals/EditModal'

class ProfileControls extends React.Component {
  render() {
    const { user } = this.props
    const { username } = user
    return (
      <div className='profile-controls'>
        <Switch>
          <Route exact path={`/${username}`} component={() => this.renderProfilePageButtons()}/>
          <Route path={`/${username}/campaigns/:id`} component={({match}) => this.renderCampaignShowButtons(match.params.id, user)}/>
          <Route path={`/${username}/campaigns`} component={this.renderCampaignIndexButtons}/>
          <Route path={`/${username}/parties/:id`} component={({match}) => this.renderPartyShowButtons(match.params.id, user)}/>
          <Route path={`/${username}/parties`} component={this.renderPartyIndexButtons}/>
          <Route path={`/${username}/characters/:id`} component={({match}) => this.renderCharacterShowButtons(match.params.id, user)}/>
          <Route path={`/${username}/characters`} component={this.renderCharacterIndexButtons}/>
      </Switch>
  
      </div>
    )
  }

  renderProfilePageButtons = () => {
    return (
      <>
        <CreateModal model='character' trigger='button'/>
        <CreateModal model='party' trigger='button'/>
        <CreateModal model='campaign' trigger='button'/>
      </>
    )
  }
  
  renderCampaignShowButtons = (id, user) => {
    const campaign = user.campaigns.find(campaign => campaign.id === parseInt(id))
    return (
      <>
        <CreateModal model='party' trigger='button'/>
        <EditModal model='campaign' trigger='button' campaign={campaign} />
        <Button>Delete Campaign (not working)</Button>
        {/* need to figure out how to pass in the campaign delete action */}
      </>
    )
  }
  
  renderCampaignIndexButtons = () => {
    return (
      <>
        <CreateModal model='campaign' trigger='button'/>
      </>
    )
  }
  
  renderPartyShowButtons = (id, user) => {
    const party = user.parties.find(party => party.id === parseInt(id))
    return (
      <>
        <CreateModal model='character' trigger='button'/>
        <EditModal model='party' trigger='button' party={party} />
        <Button>Delete Party (not working)</Button>
        {/* need to figure out how to pass in the party delete action */}
      </>
    )
  }
  
  renderPartyIndexButtons = () => {
    return (
      <>
        <CreateModal model='party' trigger='button'/>
      </>
    )
  }
  
  renderCharacterShowButtons = (id, user) => {
    const character = user.characters.find(character => character.id === parseInt(id))
    return (
      <>
        <EditModal model='character' trigger='button' character={character} />
        <Button>Delete Character (not working)</Button>
        {/* need to figure out how to pass in the character delete action */}
      </>
    )
  }
  
  renderCharacterIndexButtons = () => {
    return (
      <>
        <CreateModal model='character' trigger='button'/>
      </>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // deleteCampaign: campaignAction.deleteCampaign
}

export default withRouter(connect(mapStateToProps, actionCreators)(ProfileControls))