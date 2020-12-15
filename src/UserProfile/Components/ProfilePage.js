import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Placeholder } from 'semantic-ui-react'

function ProfilePage(props) {
  return (
    <div className="profile-page">
      <Placeholder style={{height: 300, width: 300}}>
        <Placeholder.Image />
      </Placeholder>
      <h3>USERNAME</h3>
      <Menu
        widths={3}
        fluid
        stackable
      >
        <Menu.Item
          link
          name='Campaigns'
          as={NavLink}
          to={`/${props.match.params.username}/campaigns`}
        />
        <Menu.Item
          link
          name='Parties'
          as={NavLink}
          to={`/${props.match.params.username}/parties`}
        />
        <Menu.Item
          link
          name='Characters'
          as={NavLink}
          to={`/${props.match.params.username}/characters`}
        />
      </Menu>
    </div>
  )
}

export default ProfilePage