import React from 'react'
import { connect } from 'react-redux'
import PartyCard from '../Components/PartyCard'

function PartiesContainer(props) {
  return (
    <div className="index-container">
      {props.user.parties.length > 0 ? renderPartyCards(props.user) : <h3>No Parties to Display</h3>}
    </div>
  )
}

function renderPartyCards(user) {
  return user.parties.map((party) => <PartyCard key={party.id} party={party}/>)
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // TODO add action creators
}

export default connect(mapStateToProps, actionCreators)(PartiesContainer)