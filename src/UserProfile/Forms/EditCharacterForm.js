import React from 'react'
import { connect } from 'react-redux'
import { Form, Radio, Button } from 'semantic-ui-react'

import { characterAction } from '../../_actions/characterActions'

class EditCharacterForm extends React.Component{
  state = {
    "id": this.props.character.id,
    "party_id": this.props.character.party.id,
    "name": this.props.character.name,
    "level": this.props.character.level,
    "experience": this.props.character.experience,
    "gold": this.props.character.gold,
    "checkmarks": this.props.character.checkmarks,
    "active": this.props.character.active,
    "retired": this.props.character.retired
  }

  changeHandler = ({ name, value}) => {
    this.setState({ [name]: value}, () => console.log("state", this.state))
  }

  toggleActiveHandler = () => {
    this.setState((prevState) => ({ active: !prevState.active }), () => console.log("state", this.state.active))
  }

  toggleRetiredHandler = () => {
    this.setState((prevState) => ({ retired: !prevState.retired }), () => console.log("state", this.state.retired))
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.updateCharacter(this.state)
  }

  render() {
    const character = this.state

    return (
    <>
      <Form>
        <Form.Field>
          <label>Character Name</label>
          <input type='text' name='name' placeholder='Character Name' value={character.name} onChange={(e) => this.changeHandler(e.target)}/>
        </Form.Field>
        <Form.Field>
          <label>Level</label>
          <input type='number' name='level' placeholder='Level' value={character.level} onChange={(e) => this.changeHandler(e.target)} max="9"/>
        </Form.Field>
        <Form.Field>
          <label>Experience</label>
          <input type='number' name='experience' placeholder='Experience' value={character.experience} onChange={(e) => this.changeHandler(e.target)}/>
        </Form.Field>
        <Form.Field>
          <label>Gold</label>
          <input type='number' name='gold' placeholder='Gold' value={character.gold} onChange={(e) => this.changeHandler(e.target)}/>
        </Form.Field>
        <Form.Field>
          <label>Checkmarks</label>
          <input type='number' name='checkmarks' placeholder='Checkmarks' value={character.checkmarks} onChange={(e) => this.changeHandler(e.target)}/>
        </Form.Field>
        <Radio
          label="Active "
          toggle
          type='checkbox'
          checked={character.active}
          onChange={() => this.toggleActiveHandler()}
        />
        <Radio
          label="Retired"
          toggle
          type='checkbox'
          checked={character.retired}
          onChange={() => this.toggleRetiredHandler()}
        />
      </Form>
      <br/>
      <div>
        <Button color='black' onClick={this.props.handleClose}>
          Cancel
        </Button>
        <Button
          content="Update"
          labelPosition='right'
          icon='checkmark'
          onClick={(e) => {
            this.props.handleClose()
            this.submitHandler(e)
          }}
          positive
        />
      </div>
    </>
  )
  }
  
}

const actionCreators = {
  updateCharacter: characterAction.updateCharacter
}

export default connect(null, actionCreators)(EditCharacterForm) 