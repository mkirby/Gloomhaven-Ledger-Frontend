import React from "react";
import { connect } from "react-redux";
import { Form, Radio, Button, Dropdown } from "semantic-ui-react";

import { characterAction } from "../../_actions/characterActions";

class EditCharacterForm extends React.Component {
  state = {
    id: this.props.character.id,
    character_class_id: this.props.character.character_class.id,
    party_id: this.props.character.party.id,
    name: this.props.character.name,
    level: this.props.character.level,
    experience: this.props.character.experience,
    gold: this.props.character.gold,
    checkmarks: this.props.character.checkmarks,
    active: this.props.character.active,
    retired: this.props.character.retired,
  };

  changeHandler = ({ name, value }) => this.setState({ [name]: value });

  changeDropdownHandler = (e, { value }) => this.setState({ party_id: value });

  toggleHandler = (key) =>
    this.setState((prevState) => ({ [key]: !prevState[key] }));

  submitHandler = (e) => {
    e.preventDefault();
    this.props.updateCharacter(this.state);
  };

  render() {
    const character = this.state;
    console.log("state", this.state);
    console.log("character", this.props.character);
    return (
      <>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Character Name</label>
              <input
                type="text"
                name="name"
                placeholder="Character Name"
                value={character.name}
                onChange={(e) => this.changeHandler(e.target)}
              />
            </Form.Field>
            <Form.Field>
              <label>Party</label>
              <Dropdown
                placeholder="Select Party"
                selection
                options={renderPartyOptions(this.props.user)}
                value={this.state.party_id}
                onChange={this.changeDropdownHandler}
              />
            </Form.Field>
          </Form.Group>

          <Form.Field>
            <label>Class</label>
            <Dropdown
              selection
              options={renderClassOptions(
                this.props.user,
                this.state.party_id,
                this.state.character_class_id
              )}
              value={this.state.character_class_id}
            />
          </Form.Field>

          <Form.Group widths="equal">
            <Form.Field>
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
            <Form.Field>
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
            <Form.Field>
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
            <Form.Field>
              <label>Checkmarks</label>
              <input
                type="number"
                name="checkmarks"
                placeholder="Checkmarks"
                value={character.checkmarks}
                onChange={(e) => this.changeHandler(e.target)}
                min="0"
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
        </Form>
        <br />
        <div>
          <Button
            positive
            content="Update"
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

function renderClassOptions(user, party_id, class_id) {
  // find the party object
  const party = user.parties.find((party) => party.id === party_id);
  //find the campaign that party belongs to
  const campaign = user.campaigns.find(
    (campaign) => campaign.id === party.campaign.id
  );
  //find the class of the character in the campaign
  const character_class = campaign.character_classes.find(
    (character_class) => character_class.id === class_id
  );
  // return a single drop down option so that it cannot be changed by the user
  return [
    {
      key: character_class.id,
      text: character_class.name_hidden,
      value: character_class.id,
      image: { avatar: true, src: character_class.img_icon },
    },
  ];
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  updateCharacter: characterAction.updateCharacter,
};

export default connect(mapStateToProps, actionCreators)(EditCharacterForm);
