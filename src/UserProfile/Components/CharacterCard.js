import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Menu, Placeholder } from 'semantic-ui-react';

function CharacterCard(props) {
  const { character } = props
  const { username } = props.user
  const characterId = props.character.id
  const partyId = props.character.party.id
  const campaignId = props.character.campaign.id
  return (
    <div className='index-card character-card'>

      <div className="character-card-image">
        <Placeholder style={{width: 100, height: 100}}>
          <Placeholder.Image />
        </Placeholder>
      </div>

      <div className="character-card-stats">
        <h3>{character.name}</h3>
        <Menu widths={3} fluid>
          <Menu.Item link>
            Level: {character.level}
          </Menu.Item>
          <Menu.Item link>
            XP: {character.experience}
          </Menu.Item>
          <Menu.Item link>
            Gold: {character.gold}
          </Menu.Item>
        </Menu>
      </div>

      <div className="character-card-party">
        <h5>Party: <NavLink to={`/${username}/parties/${partyId}`}>{character.party.name}</NavLink></h5>
        <h5>Campaign: <NavLink to={`/${username}/campaigns/${campaignId}`}>{character.campaign.name}</NavLink></h5>
      </div>

      <div className="character-card-controls">
        <Menu widths={3} fluid stackable >
          <Menu.Item
            link
            name="View"
            as={NavLink}
            to={`/${username}/characters/${characterId}`}
          />
          <Menu.Item
            link
            name="Edit"
          />
          <Menu.Item
            link
            name="Delete"
          />
        </Menu>
      </div>

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

export default connect(mapStateToProps, actionCreators)(CharacterCard) 