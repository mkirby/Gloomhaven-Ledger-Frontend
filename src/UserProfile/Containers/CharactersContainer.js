import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from '../Components/CharacterCard'

function CharactersContainer(props) {
  return (
    <div className="index-container">
      {/* TODO verify that these conditionals are accurate over all containers */}
      {props.user.characters.length > 0 ? renderCharacterCards(props.user) : <h3>No Characters to Display</h3>}
    </div>
  )
}

function renderCharacterCards(user) {
  return user.characters.map((character) => <CharacterCard key={character.id} character={character}/>)
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  // TODO add action creators
}

export default connect(mapStateToProps, actionCreators)(CharactersContainer)