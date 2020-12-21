import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Button, Placeholder } from 'semantic-ui-react'
import './CampaignPage.css'

import CharacterCard from '../Components/CharacterCard'
import PartyCard from '../Components/PartyCard'

function CampaignPage(props) {
  const campaign = props.user.campaigns.find(campaign => campaign.id === parseInt(props.match.params.id))
  const parties = props.user.parties.filter(party => {
    return party.campaign.id === campaign.id
  })
  const retiredCharacters = props.user.characters.filter(character => {
    return character.campaign.id === campaign.id && character.retired
  })
  const { user } = props

  return (
    <div className="campaign-page">

      <div className="campaign-parties-div">
        <h2>Parties</h2>
        <div className="index-container">
          {props.loggedIn && renderPartyCards(parties)}
        </div>
      </div>

      <div className="campaign-retired-char-div">
        <h2>Retired Characters</h2>
        <div className="index-container">
          {props.loggedIn && renderRetiredCharacterCards(retiredCharacters)}
        </div>
      </div>

      <div className="campaign-players-div">
        <h2>Players</h2>
        {props.loggedIn && currentUserIsOwner(campaign, user) && <Button>Manage Players</Button>}
        {props.loggedIn && renderCampaignPlayers(campaign.players)}
      </div>
    </div>
  )
}

function renderPartyCards(parties) {
  return parties.map(party => {
    return <PartyCard key={party.id} party={party}/>
  })
}

function renderRetiredCharacterCards(retiredCharacters) {
  return retiredCharacters.map(character => {
    return <CharacterCard key={character.id} character={character} />
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

function currentUserIsOwner(campaign, user) {
  return campaign.owner.id === user.id
}

function mapStateToProps(state) {
  const { user, loggedIn } = state.authentication
  return { user, loggedIn }
}

const actionCreators = {
  // import action creators as needed
}

export default connect(mapStateToProps, actionCreators)(CampaignPage)