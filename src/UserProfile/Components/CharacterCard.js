import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Image, Segment, Confirm } from "semantic-ui-react";
import { characterAction } from "../../_actions/characterActions";
import "./CharacterCard.css";

import EditModal from "../Modals/EditModal";

function CharacterCard(props) {
  const { character } = props;
  const { username } = props.user;
  const characterId = props.character.id;
  const partyId = props.character.party.id;
  const campaignId = props.character.campaign.id;
  const [open, openConfirm] = useState(false);
  return (
    <Segment
      className="index-card character-card"
      style={{ margin: "0 10px 10px 0" }}
    >
      <Confirm
        open={open}
        cancelButton="Cancel"
        confirmButton="Delete"
        onCancel={() => openConfirm(false)}
        onConfirm={() => props.delete(character)}
      />
      {/* {character.active && (
        <Label as="a" color="red" corner="right">
          <Icon name="power" />
        </Label>
      )} */}
      <div className="character-card-image">
        <Image
          src={character.character_class.img_portrait}
          alt={character.character_class.fullname}
        />
      </div>

      <div className="character-card-stats">
        <h3>{character.name}</h3>
        <p>{character.character_class.fullname}</p>
        <Menu widths={3} fluid size="mini">
          <Menu.Item link>Level: {character.level}</Menu.Item>
          <Menu.Item link>XP: {character.experience}</Menu.Item>
          <Menu.Item link>Gold: {character.gold}</Menu.Item>
        </Menu>
      </div>

      <div className="character-card-party">
        <p>
          <b>
            Party:{" "}
            <NavLink to={`/${username}/parties/${partyId}`}>
              {character.party.name}
            </NavLink>
            <br />
            Campaign:{" "}
            <NavLink to={`/${username}/campaigns/${campaignId}`}>
              {character.campaign.name}
            </NavLink>
          </b>
        </p>
      </div>

      <div className="character-card-controls">
        <Menu widths={3} fluid stackable size="mini">
          <Menu.Item
            link
            name="View"
            as={NavLink}
            to={`/${username}/characters/${characterId}`}
          />
          <EditModal model="character" trigger="menu" character={character} />
          <Menu.Item
            link
            name="Delete"
            onClick={() => {
              openConfirm(true);
              // props.delete(character);
            }}
          />
        </Menu>
      </div>
    </Segment>
  );
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  delete: characterAction.deleteCharacter,
};

export default connect(mapStateToProps, actionCreators)(CharacterCard);
