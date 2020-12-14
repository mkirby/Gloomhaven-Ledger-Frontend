import React from 'react'
import { Button, Menu, Placeholder } from 'semantic-ui-react'


function ProfilePage() {
  return (
    <div className="profile-page">
      <Placeholder style={{height: 300, width: 300}}>
        <Placeholder.Image />
      </Placeholder>
      {/* <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length='full'/>
        </Placeholder.Header>
      </Placeholder> */}
      <h3>USERNAME</h3>
      <Menu
        widths={3}
        fluid
        // borderless
        stackable
      >
        <Menu.Item 
          name='Campaigns'
        />
        <Menu.Item 
          name='Parties'
        />
        <Menu.Item 
          name='Characters'
        />
      </Menu>
    </div>
  )
}

export default ProfilePage