import React from 'react'
import CreateModal from '../Modals/CreateModal'

function ProfileControls() {
  return (
    <div className="profile-controls">
      <h3>Component: ProfileControls.js</h3>
      {/* going to eventually conditionally render buttons depending on page */}
      <CreateModal model="character"/>
    </div>)
}

export default ProfileControls