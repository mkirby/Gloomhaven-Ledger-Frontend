import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu, Placeholder } from 'semantic-ui-react'
import { authHeader } from '../../_helpers/authHeader'

class CharacterPage extends React.Component {
  state = {
    character: {},
    loaded: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/characters/${this.props.match.params.id}`, {
      headers: authHeader()
    })
    .then(response => response.json())
    .then(data => {
      this.setState({character: data.character, loaded: true})
    })
  }
  
  render() {
    const { character } = this.state
    const { username } = this.props.user
    return (
      <div className="character-page">

        <div className="character-page-image">
          <Placeholder style={{height: 400, width: 300}}>
            <Placeholder.Image />
          </Placeholder>
        </div>

        <div>
          {this.state.loaded && renderCharacterHeader(character)}
          {this.state.loaded && renderCharacterStats(character)}
          <div className="character-page-party">
            {this.state.loaded ? <h3>Party: <NavLink to={`/${username}/parties/${character.party.id}`}>{character.party.name}</NavLink> </h3> : <h3>Party: (Loading...)</h3>}
            {this.state.loaded ? <h3>Campaign: <NavLink to={`/${username}/campaigns/${character.campaign.id}`}>{character.campaign.name}</NavLink></h3> : <h3>Campaign: (Loading...)</h3>}
          </div>
          
          <div className="character-page-backstory">
            <h3>Backstory</h3>
            {this.state.loaded ? renderCharacterBackstory(character) : <p>lorum lopsum ipsum </p>}
          </div>
        </div>

        <div className="character-page-perks">
          <h3>Perks</h3>
          <p>Coming Soon</p>
        </div>

        <div className="character-page-items">
          <h3>Items</h3>
          <p>(Stretch Goal)</p>
        </div>

        <div className="character-page-checks">
          <h3>Checks</h3>
          {this.state.loaded ? <p>{character.checkmarks}</p>: <p>Coming Soon</p>}
        </div>

        <div className="character-page-notes">
          <h3>Notes</h3>
          <p>lorum lopsum ipsum </p>
        </div>
        
      </div>
    )
  }
}

function renderCharacterHeader(character) {
  return (
    <div className="character-page-header">
      <div className="character-page-icon">
        <Placeholder style={{height: 50, width: 50}}>
          <Placeholder.Image />
        </Placeholder>
      </div>
      <div className="character-page-name">
        <h3>{character.name}</h3>
      </div>
    </div>)
}

function renderCharacterStats(character) {
  return (
    <div className="character-page-stats">
      <Menu widths={4} fluid>
        <Menu.Item link>
          XP: {character.experience}
        </Menu.Item>
        <Menu.Item link>
          Level: {character.level}
        </Menu.Item>
        <Menu.Item link>
          Health (hardcode): 12
        </Menu.Item>
        <Menu.Item link>
          Gold: {character.gold}
        </Menu.Item>
      </Menu>
    </div>
  )
}

function renderCharacterBackstory(character) {
  return (
      <p>lorum lopsum ipsum LOADED</p>
  )
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // add dispatch actions as needed
}

export default connect(mapStateToProps, actionCreators)(CharacterPage)