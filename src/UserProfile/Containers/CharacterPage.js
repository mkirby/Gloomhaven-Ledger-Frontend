import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import CharacterCheckmarks from "../Components/CharacterCheckmarks";
import "./CharacterPage.css";

function CharacterPage(props) {
  const character = props.user.characters.find(
    (character) => character.id === parseInt(props.match.params.id)
  );
  const { username } = props.user;

  return (
    <div className="character-page">
      {/* character image container */}
      <div className="character-page__image">
        {/* loads character image from public folder */}
        <img
          src={process.env.PUBLIC_URL + character.character_class.img_portrait}
          alt={character.character_class.fullname}
          style={{ width: "100%" }}
        />
      </div>
      {/* all a characters main stats live in this div */}
      <div className="character-page__stats">
        {/* header contains the class icons and the character name */}
        <div className="character-page-header">
          <div className="character-page-icon">
            {/* TODO make this a Semantic UI image so I make it's size inline with the character name */}
            {/* loads class icon image from public folder */}
            <img
              src={process.env.PUBLIC_URL + character.character_class.img_icon}
              alt={`${character.character_class.name} icon`}
              style={{ height: 50, width: 50 }}
            />
          </div>
          {/* div containing character name */}
          <div className="character-page-name">
            <h1>{character.name}</h1>
          </div>
        </div>
        {/* all changable character stats live in this menu */}
        <div>
          <Menu widths={4} fluid stackable>
            <Menu.Item link>XP: {character.experience}</Menu.Item>
            <Menu.Item link>Level: {character.level}</Menu.Item>
            <Menu.Item link>
              Health: {character.character_class.health[character.level]}
            </Menu.Item>
            <Menu.Item link>Gold: {character.gold}</Menu.Item>
          </Menu>
        </div>
        {/* contains links to the campaign and party page */}
        <div>
          <h3>
            Party:{" "}
            <NavLink to={`/${username}/parties/${character.party.id}`}>
              {character.party.name}
            </NavLink>{" "}
            <br />
            Campaign:{" "}
            <NavLink to={`/${username}/campaigns/${character.campaign.id}`}>
              {character.campaign.name}
            </NavLink>
          </h3>
        </div>
        {/* TODO make the notes field editable and add ability to save note */}
        {/* requires adding a column to the Character table */}
        <div>
          <h2>Notes</h2>
          <p>lorum lopsum ipsum </p>
        </div>
      </div>
      {/* TODO create the character perks game data and render depending on character class */}
      <div className="character-page__perks">
        <h2>Perks</h2>
        <p>(Stretch Goal)</p>
      </div>
      {/* TODO create the game items (and store, etc) and render purchased items here */}
      <div className="character-page__items">
        <h2>Items</h2>
        <p>(Stretch Goal)</p>
      </div>
      {/* TODO update character model when checking and unchecking checks */}
      <div className="character-page__alt-stats">
        <h2>Battle Goal Checkmarks</h2>
        <div className="character-page__alt-stats__checkmarks">
          <CharacterCheckmarks total={character.checkmarks} />
        </div>
      </div>
      <div className="character-page__backstory">
        <h2>Backstory</h2>
        {renderCharacterBackstory(character)}
      </div>
    </div>
  );
}

function renderCharacterBackstory(character) {
  // takes in a character object and splits the description into two paragraphs on '\n\n'
  let description = character.character_class.description.split("\n\n");
  return (
    <>
      <p>{description[0]}</p>
      <br />
      <p>{description[1]}</p>
    </>
  );
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  // add dispatch actions as needed
};

export default connect(mapStateToProps, actionCreators)(CharacterPage);
