import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

import { campaignAction } from '../../_actions/campaignActions'

class CreateCampaignForm extends React.Component{
  state = {
    user_id: this.props.user.id,
    name: ''
  }

  changeHandler = ({ name, value }) => this.setState({ [name]: value })

  submitHandler = (e) => {
    e.preventDefault()
    this.props.post(this.state)
  }

  render() {
    const campaign = this.state

    return (
    <>
      <Form>
        <Form.Field required>
          <label>Campaign Name</label>
          <input type='text' name='name' placeholder='Campaign Name' value={campaign.name} onChange={(e) => this.changeHandler(e.target)}/>
        </Form.Field>
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

function mapStateToProps(state) {
  const { user } = state.authentication
  return { user }
}

const actionCreators = {
  post: campaignAction.postCampaign
}

export default connect(mapStateToProps, actionCreators)(CreateCampaignForm) 