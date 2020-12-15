import React from 'react'
import { Menu, Placeholder } from 'semantic-ui-react';

function PartyCard({party}) {
  return (
    <div className='index-card party-card'>
      <h3>{party.name}</h3>
      <div>
        {renderCharacterImages(party.characters)}
      </div>
      <br/>
      <h5>Current Location: Coming Soon</h5>
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
  )
}

function renderCharacterImages(characters) {
  return characters.map((character) => {
    if (character.active){
      return <Placeholder key={character.id} style={{ width: 40, height: 40, float: 'left', marginRight: 5, marginTop: 0}}>
      <Placeholder.Image />
    </Placeholder>
    }
    return null
  })
}

// connect to Redux to access dispatch actions

export default PartyCard