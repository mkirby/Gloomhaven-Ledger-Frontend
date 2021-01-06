import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Segment, Confirm } from "semantic-ui-react";
import "./PartyCard.css";

import { partyAction } from "../../_actions/partyActions";
import EditModal from "../Modals/EditModal";
import CharacterPopup from "../Popups/CharacterPopup";
import scenarios from "../../LedgerApp/World/scenarios.json";

function PartyCard(props) {
  const { party } = props;
  const { username } = props.user;
  const { id } = props.party;
  const [open, openConfirm] = useState(false);

  // TODO replace random scenario with actual current scenario once implemented
  const randomScenario =
    scenarios[Math.floor(Math.random() * scenarios.length)];

  return (
    <Segment
      className="index-card party-card"
      style={{ margin: "0 10px 10px 0" }}
    >
      <Confirm
        open={open}
        cancelButton="Cancel"
        confirmButton="Delete"
        onCancel={() => openConfirm(false)}
        onConfirm={() => props.delete(party)}
      />
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
          {/* TODO replace random scenario with actual current scenario */}
          Scenario: <em>{randomScenario.name}</em>
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
            openConfirm(true);
            // props.delete(party);
          }}
        />
      </Menu>
    </Segment>
  );
}

function renderCharacterImages(characters) {
  return characters.map((character) => {
    if (character.active) {
      return (
        <div key={character.id} className="party-card__character-images__image">
          <CharacterPopup character={character} />
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
