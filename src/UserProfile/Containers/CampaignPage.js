import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Button, Placeholder } from 'semantic-ui-react'
import { authHeader } from '../../_helpers/authHeader'
import CharacterCard from '../Components/CharacterCard'
import PartyCard from '../Components/PartyCard'

class CampaignPage extends React.Component {
  state = {
    campaign: {},
    loaded: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/campaigns/${this.props.match.params.id}`, {
      headers: authHeader()
    })
    .then(response => response.json())
    .then(data => {
      this.setState({campaign: data.campaign, loaded: true})
    })
  }
  
  render() {
    return (
      <div className="campaign-page">

        <div className="campaign-parties-div">
          <h2>Parties</h2>
          <div className="index-container">
            {this.state.loaded && renderPartyCards(this.state.campaign.parties)}
          </div>
        </div>
  
        <div className="campaign-retired-char-div">
          <h2>Retired Characters</h2>
          <div className="index-container">
            {this.state.loaded && renderRetiredCharacterCards(this.state.campaign.characters)}
          </div>
        </div>
  
        <div className="campaign-players-div">
          <h2>Players</h2>
          {this.state.loaded && currentUserIsOwner(this.state.campaign.id, this.props.user) && <Button>Manage Players</Button>}
          {this.state.loaded && renderCampaignPlayers(this.state.campaign.players)}
        </div>
      </div>
    )
  }
}

function renderPartyCards(parties) {
  return parties.map(party => <PartyCard key={party.id} party={party}/>)
}

function renderRetiredCharacterCards(characters) {
  return characters.map(character => {
    if (character.retired){
      return <CharacterCard key={character.id} character={character} />
    }
    return null
  })
}

function renderCampaignPlayers(players) {
  return players.map(player => {
    const { username } = player
    const usernameUppercased = username.charAt(0).toUpperCase() + username.slice(1)
    return (
      <div key={player.id} className="campaign-player-div">
        <div className="campaign-player-image">
          <Placeholder style={{height: 50, width: 50}}>
            <Placeholder.Image circular='true' />
          </Placeholder>
        </div>
        <div className="campaign-player-username">
          <h3><NavLink to={`/${username}`}>{usernameUppercased}</NavLink></h3>
        </div>
      </div>
    )
  })
}

function currentUserIsOwner(campaignId, user) {
  return user.user_campaigns.some(user_campaign => user_campaign.campaign.id === campaignId)
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // import action creators as needed
}

export default connect(mapStateToProps, actionCreators)(CampaignPage)