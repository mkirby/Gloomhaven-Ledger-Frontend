import React from "react";
import { connect } from "react-redux";
import { Form, Radio, Button, Dropdown, Message } from "semantic-ui-react";

import { characterAction } from "../../_actions/characterActions";

class CreateCharacterForm extends React.Component {
  state = {
    user_id: this.props.user.id,
    character_class_id: "",
    party_id: "",
    name: "",
    level: "",
    experience: "",
    gold: "",
    checkmarks: "",
    active: false,
    retired: false,
  };

  changeHandler = ({ name, value }) => this.setState({ [name]: value });

  changePartyHandler = (e, { value }) => this.setState({ party_id: value });

  changeClassHandler = (e, { value }) =>
    this.setState({ character_class_id: value }, () =>
      console.log("state", this.state)
    );

  toggleHandler = (key) =>
    this.setState((prevState) => ({ [key]: !prevState[key] }));

  submitHandler = (e) => {
    e.preventDefault();
    this.props.post(this.state);
  };

  render() {
    const character = this.state;
    // track if a user has campaigns to only render the create form if they have campaigns
    const hasParties = this.props.user.parties.length > 0;
    // track if a user has parties to only render the create form if they have parties
    const hasCampaigns = this.props.user.campaigns.length > 0;
    return (
      <>
        {/* If a user has no campaigns (they can't have parties either) then replace the form with a note */}
        {!hasCampaigns && (
          <p>
            You must create a campaign and a party before you can create a
            character.
          </p>
        )}
        {/* If a user has campaigns but no parties then replace the form with a note */}
        {hasCampaigns && !hasParties && (
          <p>You must create a party before you can create a character.</p>
        )}
        {/* If a user has campaigns and parties then display the create form */}
        {hasParties && hasCampaigns && (
          <>
            <Form warning={this.state.party_id === ""}>
              <Form.Group widths="equal">
                <Form.Field required>
                  <label>Character Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Character Name"
                    value={character.name}
                    onChange={(e) => this.changeHandler(e.target)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Class</label>
                  <Dropdown
                    placeholder="Select Party"
                    selection
                    options={renderPartyOptions(this.props.user)}
                    value={this.state.party_id}
                    onChange={this.changePartyHandler}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field required disabled={this.state.party_id === ""}>
                <label>Class</label>
                <Dropdown
                  placeholder="Select Class"
                  selection
                  options={
                    this.state.party_id === ""
                      ? []
                      : renderClassOptions(this.props.user, this.state.party_id)
                  }
                  value={this.state.character_class_id}
                  onChange={this.changeClassHandler}
                />
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field required>
                  <label>Level</label>
                  <input
                    type="number"
                    name="level"
                    placeholder="Level"
                    value={character.level}
                    onChange={(e) => this.changeHandler(e.target)}
                    min="1"
                    max="9"
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Experience</label>
                  <input
                    type="number"
                    name="experience"
                    placeholder="Experience"
                    value={character.experience}
                    onChange={(e) => this.changeHandler(e.target)}
                    min="0"
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field required>
                  <label>Gold</label>
                  <input
                    type="number"
                    name="gold"
                    placeholder="Gold"
                    value={character.gold}
                    onChange={(e) => this.changeHandler(e.target)}
                    min="0"
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Checkmarks</label>
                  <input
                    type="number"
                    name="checkmarks"
                    placeholder="Checkmarks"
                    value={character.checkmarks}
                    onChange={(e) => this.changeHandler(e.target)}
                    min="0"
                    max="18"
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <Radio
                    label="Active"
                    toggle
                    type="checkbox"
                    checked={character.active}
                    onChange={() => this.toggleHandler("active")}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="Retired"
                    toggle
                    type="checkbox"
                    checked={character.retired}
                    onChange={() => this.toggleHandler("retired")}
                  />
                </Form.Field>
              </Form.Group>
              <Message
                warning
                header="Select a party to see available character classes"
              />
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

function renderPartyOptions(user) {
  return user.parties.map((party) => {
    return {
      key: party.id,
      text: party.name,
      value: party.id,
    };
  });
}

function renderClassOptions(user, party_id) {
  const party = user.parties.find((party) => party.id === party_id);
  const campaign = user.campaigns.find(
    (campaign) => campaign.id === party.campaign.id
  );
  const { character_classes } = campaign;
  return character_classes.map((character_class) => {
    return {
      key: character_class.id,
      text: character_class.name_hidden,
      value: character_class.id,
      image: { avatar: true, src: character_class.img_icon },
    };
  });
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  post: characterAction.postCharacter,
};

export default connect(mapStateToProps, actionCreators)(CreateCharacterForm);
