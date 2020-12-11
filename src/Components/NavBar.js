import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProfileMenu from './ProfileMenu'
import { Menu } from 'semantic-ui-react'

function NavBar() {
  const [activeItem, handleItemClick] = useState("")

  return <header className="borders">
    <Menu borderless>
      <Menu.Item>
        <NavLink to="/"><h1 className="heading">Gloomhaven Ledger</h1></NavLink>
      </Menu.Item>

      {/* FIXME delete once created and styled */}
      <Menu.Item position='right'>
      <h3>Component: NavBar.js</h3>
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={() => handleItemClick("login")}
        >
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>

        <Menu.Item
          position='right'
          name='signup'
          active={activeItem === 'signup'}
          onClick={() => handleItemClick("signup")}
        >
          <NavLink to="/signup">Sign Up</NavLink>
        </Menu.Item>

        <ProfileMenu />

      </Menu.Menu>

      </Menu>

  </header>
}

export default NavBar