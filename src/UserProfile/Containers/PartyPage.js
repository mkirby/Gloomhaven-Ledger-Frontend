import React from 'react'
import { connect } from 'react-redux'
import './PartyPage'

import CharacterCard from '../Components/CharacterCard'

function PartyPage(props) {
  const party = props.user.parties.find(party => party.id === parseInt(props.match.params.id))
  const { characters } = party

  return (
    <div className="party-page">

      <div>
        <h2>Active Characters (Max 4)</h2>
        <div className="index-container">
          {props.loggedIn && renderCharacterCards(characters, true)}
        </div>
      </div>

      <div>
        <h2>Inactive Characters</h2>
        <div className="index-container">
          {props.loggedIn && renderCharacterCards(characters, false) }
        </div>
      </div>

    </div>
  )
  
}

function renderCharacterCards(characters, activityStatus) {
  return characters.map(character => {
    if (character.active === activityStatus){
      return <CharacterCard key={character.id} character={character} />
    }
    return null
  })
}

function mapStateToProps(state) {
  const { user, loggedIn } = state.authentication
  return { user, loggedIn }
}

const actionCreators = {
  // import action creators as needed
}

export default connect(mapStateToProps, actionCreators)(PartyPage)