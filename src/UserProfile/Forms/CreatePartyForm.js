import React from "react";
import { connect } from "react-redux";
import { Form, Button, Dropdown } from "semantic-ui-react";

import { partyAction } from "../../_actions/partyActions";

class CreatePartyForm extends React.Component {
  state = {
    name: "",
    campaign_id: "",
    reputation: "",
    notes: "",
  };

  changeHandler = ({ name, value }) => this.setState({ [name]: value });

  changeDropdownHandler = (e, { value }) =>
    this.setState({ campaign_id: value });

  submitHandler = (e) => {
    e.preventDefault();
    this.props.post(this.state);
  };

  render() {
    const party = this.state;
    const hasCampaigns = this.props.user.campaigns.length > 0;
    return (
      <>
        {!hasCampaigns && (
          <p>You must create a campaign before you can create a party.</p>
        )}
        {hasCampaigns && (
          <>
            <Form>
              <Form.Group widths="equal">
                <Form.Field required>
                  <label>Party Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Party Name"
                    value={party.name}
                    onChange={(e) => this.changeHandler(e.target)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Campaign</label>
                  <Dropdown
                    placeholder="Select Campaign"
                    selection
                    options={renderCampaignOptions(this.props.user)}
                    value={this.state.campaign_id}
                    onChange={this.changeDropdownHandler}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Field width={8} required>
                <label>Reputation</label>
                <input
                  type="number"
                  name="reputation"
                  placeholder="Reputation"
                  value={party.reputation}
                  onChange={(e) => this.changeHandler(e.target)}
                  min="0"
                />
              </Form.Field>

              <Form.Field>
                <label>Notes</label>
                <textarea
                  name="notes"
                  placeholder="Party Notes..."
                  value={party.notes}
                  onChange={(e) => this.changeHandler(e.target)}
                  rows="4"
                />
              </Form.Field>
            </Form>
            <br />
            <div>
              <Button
                positive
                content="Create"
                labelPosition="right"
                icon="checkmark"
                onClick={(e) => {
                  this.props.handleClose();
                  this.submitHandler(e);
                }}
              />
              <Button
                content="Cancel"
                color="black"
                labelPosition="right"
                icon="close"
                onClick={this.props.handleClose}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

function renderCampaignOptions(user) {
  return user.campaigns.map((campaign) => {
    return {
      key: campaign.id,
      text: campaign.name,
      value: campaign.id,
    };
  });
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  post: partyAction.postParty,
};

export default connect(mapStateToProps, actionCreators)(CreatePartyForm);
