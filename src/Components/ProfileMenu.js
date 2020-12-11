import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Icon, Placeholder } from 'semantic-ui-react'

function ProfileMenu() {
  return (
    <Dropdown
      item
      text={
        <>
          <>Kirby&nbsp;&nbsp;&nbsp;&nbsp;</>
          <Placeholder style={{ height: 25, width: 25 }}><Placeholder.Image /></Placeholder>
        </>
      }
    > 
      <Dropdown.Menu>
        <Dropdown.Header content='ProfileMenu.js' />
        <Dropdown.Divider />
        {/* FIXME need to get accurate username */}
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to="/kirby">Profile</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to="/kirby/characters">My Characters</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to="/kirby/parties">My Parties</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to="/kirby/campaigns">My Campaigns</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to="/kirby">Settings</NavLink></Dropdown.Item>
        <Dropdown.Item style={{textAlign: "right"}}><NavLink to="/">Log Out</NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )

}

export default ProfileMenu