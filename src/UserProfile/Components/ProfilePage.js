import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu, Placeholder } from 'semantic-ui-react'
import './ProfilePage.css'

import { userActions } from '../../_actions/userActions'

function ProfilePage(props) {
  const { username } = props.user
  const usernameUppercased = username.charAt(0).toUpperCase() + username.slice(1)

  return (
    <div className="profile-page">
      <Placeholder style={{height: 300, width: 300}}>
        <Placeholder.Image />
      </Placeholder>
      {props.loggedIn && <h3>{usernameUppercased}</h3>}
      <Menu
        widths={3}
        fluid
        stackable
      >
        <Menu.Item
          link
          name='Campaigns'
          as={NavLink}
          to={`/${username}/campaigns`}
        />
        <Menu.Item
          link
          name='Parties'
          as={NavLink}
          to={`/${username}/parties`}
        />
        <Menu.Item
          link
          name='Characters'
          as={NavLink}
          to={`/${username}/characters`}
        />
      </Menu>
    </div>
  )
}

function mapStateToProps(state) {
  const { user, loggedIn } = state.authentication
  return { user, loggedIn }
}

const actionCreators = {
  getByUsername: userActions.getByUsername
}

export default connect(mapStateToProps, actionCreators)(ProfilePage)