import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./PartyCard.css";

import { partyAction } from "../../_actions/partyActions";
import EditModal from "../Modals/EditModal";

function PartyCard(props) {
  const { party } = props;
  const { username } = props.user;
  const { id } = props.party;

  return (
    <div className="index-card party-card">
      <h3>{party.name}</h3>
      <div className="party-card__character-images">
        {renderCharacterImages(party.characters)}
      </div>
      <br />
      <p>
        <b>
          Campaign:{" "}
          <NavLink to={`/${username}/campaigns/${party.campaign.id}`}>
            {party.campaign.name}
          </NavLink>
          <br />
          Current Location: (Coming Soon)
        </b>
      </p>
      <Menu widths={3} fluid size="mini">
        <Menu.Item
          link
          name="View"
          as={NavLink}
          to={`/${username}/parties/${id}`}
        />
        <EditModal model="party" trigger="menu" party={party} />
        <Menu.Item
          link
          name="Delete"
          onClick={() => {
            props.delete(party);
          }}
        />
      </Menu>
    </div>
  );
}

function renderCharacterImages(characters) {
  return characters.map((character) => {
    if (character.active) {
      return (
        <div className="party-card__character-images__div">
          <img
            src={character.character_class.img_portrait}
            alt={character.character_class.fullname}
          />
        </div>
      );
    }
    return null;
  });
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  delete: partyAction.deleteParty,
};

export default connect(mapStateToProps, actionCreators)(PartyCard);
