import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import ProfileMenu from './ProfileMenu'
import { Menu } from 'semantic-ui-react'

function NavBar(props) {
  const [activeItem, handleItemClick] = useState("")

  return (
    <header className="navbar-header" style={{height: "100%"}}>
      <div className="navbar-header-logo">
        <h1 className="heading">Gloomhaven Ledger</h1>
      </div>
      
      <Menu secondary size='large'  style={{margin: 'auto 0'}}>
        {!props.loggedIn && <Menu.Menu position='right'>
          <Menu.Item
            as={NavLink}
            to="/login"
            name='login'
            active={activeItem === 'login'}
            onClick={() => handleItemClick("login")}
          >
            Login
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/signup'
            position='right'
            name='signup'
            active={activeItem === 'signup'}
            onClick={() => handleItemClick("signup")}
          >
            Sign Up
          </Menu.Item>
        </Menu.Menu>}

        {props.loggedIn && <Menu.Menu position='right'><ProfileMenu /></Menu.Menu>}

      </Menu>

    </header>
  )
}

function mapStateToProps(state) {
  const { user, loggedIn } = state.authentication
  return { user, loggedIn }
}

export default connect(mapStateToProps, null)(NavBar)