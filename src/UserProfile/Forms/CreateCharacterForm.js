import React from 'react'
import { connect } from 'react-redux'
import { Form, Radio, Button, Dropdown } from 'semantic-ui-react'

import { characterAction } from '../../_actions/characterActions'
import { userActions } from '../../_actions/userActions'

class CreateCharacterForm extends React.Component{
  state = {
    user_id: this.props.user.id,
    party_id: '',
    name: '',
    level: '',
    experience: '',
    gold: '',
    checkmarks: '',
    active: false,
    retired: false
  }

  changeHandler = ({ name, value }) => this.setState({ [name]: value })

  changeDropdownHandler = (e, { value }) => this.setState({ party_id: value })

  toggleHandler = (key) => this.setState((prevState) => ({ [key]: !prevState[key] }))

  submitHandler = (e) => {
    e.preventDefault()
    this.props.post(this.state)
    this.props.refresh()
  }

  render() {
    const character = this.state

    return (
    <>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label>Character Name</label>
            <input type='text' name='name' placeholder='Character Name' value={character.name} onChange={(e) => this.changeHandler(e.target)}/>
          </Form.Field>
          <Form.Field required>
            <label>Party</label>
            <Dropdown
              placeholder='Select Party'
              selection
              options={renderPartyOptions(this.props.user)}
              value={this.state.party_id}
              onChange={this.changeDropdownHandler}
            />
          </Form.Field>
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field required>
            <label>Level</label>
            <input type='number' name='level' placeholder='Level' value={character.level} onChange={(e) => this.changeHandler(e.target)} min='1' max='9'/>
          </Form.Field>
          <Form.Field required>
            <label>Experience</label>
            <input type='number' name='experience' placeholder='Experience' value={character.experience} onChange={(e) => this.changeHandler(e.target)} min='0'/>
          </Form.Field>
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field required>
            <label>Gold</label>
            <input type='number' name='gold' placeholder='Gold' value={character.gold} onChange={(e) => this.changeHandler(e.target)} min='0'/>
          </Form.Field>
          <Form.Field required>
            <label>Checkmarks</label>
            <input type='number' name='checkmarks' placeholder='Checkmarks' value={character.checkmarks} onChange={(e) => this.changeHandler(e.target)} min='0'/>
          </Form.Field>
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field>
            <Radio
              label='Active'
              toggle
              type='checkbox'
              checked={character.active}
              onChange={() => this.toggleHandler('active')}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Retired'
              toggle
              type='checkbox'
              checked={character.retired}
              onChange={() => this.toggleHandler('retired')}
            />
          </Form.Field>
        </Form.Group>

      </Form>
      <br/>
      <div>
        <Button
          positive
          content='Create'
          labelPosition='right'
          icon='checkmark'
          onClick={(e) => {
            this.props.handleClose()
            this.submitHandler(e)
          }}
        />
        <Button
          content='Cancel'
          color='black'
          labelPosition='right'
          icon='close'
          onClick={this.props.handleClose}
        />
      </div>
    </>
  )
  }
  
}

function renderPartyOptions(user) {
  return user.parties.map(party => {
    return {
      key: party.id,
      text: party.name,
      value: party.id,
    }
  })
}

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  post: characterAction.postCharacter,
  refresh: userActions.refresh
}

export default connect(mapStateToProps, actionCreators)(CreateCharacterForm) 