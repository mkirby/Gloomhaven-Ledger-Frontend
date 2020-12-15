import React from 'react'
import { authHeader } from '../../_helpers/authHeader'
import CharacterCard from '../Components/CharacterCard'

class PartyPage extends React.Component {
  state = {
    party: {},
    loaded: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/parties/${this.props.match.params.id}`, {
      headers: authHeader()
    })
    .then(response => response.json())
    .then(data => {
      this.setState({party: data.party, loaded: true})
    })
  }
  
  render() {
    return (
      <div className="party-page">

        <div>
          <h2>Active Characters (Max 4)</h2>
          <div className="index-container">
            {this.state.loaded && renderCharacterCards(this.state.party.characters, true)}
          </div>
        </div>
  
        <div>
          <h2>Inactive Characters</h2>
          <div className="index-container">
            {this.state.loaded && renderCharacterCards(this.state.party.characters, false) }
          </div>
        </div>

      </div>
    )
  }
}

function renderCharacterCards(characters, activityStatus) {
  return characters.map(character => {
    if (character.active === activityStatus){
      return <CharacterCard key={character.id} character={character} />
    }
    return null
  })
}

export default PartyPage