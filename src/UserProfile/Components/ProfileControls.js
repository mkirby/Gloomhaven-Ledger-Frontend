import React from 'react'
import CreateModal from '../Modals/CreateModal'

function ProfileControls() {
  return (
    <div className='profile-controls'>
      <h3>Component: ProfileControls.js</h3>
      {/* going to eventually conditionally render buttons depending on page */}
      <CreateModal model='character' trigger='button'/>
      <CreateModal model='party' trigger='button'/>
      <CreateModal model='campaign' trigger='button'/>
    </div>)
}

export default ProfileControls