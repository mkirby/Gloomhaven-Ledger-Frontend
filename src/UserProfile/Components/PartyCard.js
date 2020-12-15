import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Placeholder } from 'semantic-ui-react';

function PartyCard(props) {
  const { party } = props
  const { username } = props.user
  const { id } = props.party
  return (
    <div className='index-card party-card'>
      <h3>{party.name}</h3>
      <div>
        {renderCharacterImages(party.characters)}
      </div>
      <br/>
      <h5>Current Location: Coming Soon</h5>
      <Menu widths={3} fluid>
        <Menu.Item
          link
          name='View'
          as={NavLink}
          to={`/${username}/parties/${id}`}
        />
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

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // add dispatch actions as needed
}

export default connect(mapStateToProps, actionCreators)(PartyCard) 