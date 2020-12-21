import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import './NavBar.css'

import ProfileMenu from './ProfileMenu'

function NavBar(props) {
  const [activeItem, handleItemClick] = useState("")

  return (
    <header className="navbar" style={{height: "100%"}}>
      <div className="navbar__title">
        <NavLink to="/"><h1 className="heading">Gloomhaven Ledger</h1></NavLink>
      </div>
      
      <Menu secondary size='large' className='navbar__menu' style={{margin: 'auto 0'}}>
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