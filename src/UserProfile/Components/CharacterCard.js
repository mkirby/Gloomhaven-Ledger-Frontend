import React from 'react'
import { Menu, Placeholder } from 'semantic-ui-react';

function CharacterCard({character}) {
  console.log("character", character)
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
        <h5>Party: {character.party.name}</h5>
      </div>

      <div className="character-card-controls">
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
        </Menu>
      </div>

    </div>
  )
}

// connect to Redux to access dispatch actions

export default CharacterCard