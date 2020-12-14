import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dropdown, Placeholder } from 'semantic-ui-react'

import { userActions } from '../_actions/userActions'

function ProfileMenu(props) {
  let username = 'Loading...'
  if (props.user) {
    username = props.user.username
  }

  const usernameUppercased = username.charAt(0).toUpperCase() + username.slice(1)

  const trigger = (
    <>
        {usernameUppercased}&nbsp;&nbsp;&nbsp;&nbsp;
        <Placeholder style={{ height: 25, width: 25 }}><Placeholder.Image /></Placeholder>
    </>
  )

  return (
    <Dropdown floating item trigger={trigger}> 
      <Dropdown.Menu>
        <Dropdown.Header content='ProfileMenu.js' />
        <Dropdown.Divider />
        {/* i think these need to be "as" NavLink passing props */}
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to={`/${username}`}>Profile</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to={`/${username}/characters`}>My Characters</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to={`/${username}/parties`}>My Parties</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to={`/${username}/campaigns`}>My Campaigns</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to="/login" onClick={props.logout}>Log Out</NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  logout: userActions.logout
}

export default connect(mapStateToProps, actionCreators)(ProfileMenu)