import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Image, Header } from "semantic-ui-react";
import CharacterCheckmarks from "../Components/CharacterCheckmarks";
import CharacterPerks from "../Components/CharacterPerks";
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
        <Image
          src={process.env.PUBLIC_URL + character.character_class.img_portrait}
          alt={character.character_class.fullname}
          style={{ width: "100%" }}
        />
      </div>
      {/* all a characters main stats live in this div */}
      <div className="character-page__stats">
        {/* header contains the class icons and the character name */}
        <div className="character-page-header">
          <Header as="h1" block style={{ marginTop: 0 }}>
            {/* loads class icon image from public folder */}
            <Image
              src={process.env.PUBLIC_URL + character.character_class.img_icon}
              alt={`${character.character_class.name} icon`}
              style={{ height: 40, width: 40 }}
              inline
            />
            <Header.Content>
              {character.name}
              <Header.Subheader>
                {character.character_class.fullname}
              </Header.Subheader>
            </Header.Content>
            {/* all changable character stats live in this menu */}
            <Menu widths={4} fluid stackable>
              <Menu.Item link>XP: {character.experience}</Menu.Item>
              <Menu.Item link>Level: {character.level}</Menu.Item>
              <Menu.Item link>
                Health: {character.character_class.health[character.level]}
              </Menu.Item>
              <Menu.Item link>Gold: {character.gold}</Menu.Item>
            </Menu>
            <Header.Content>
              {/* contains links to the campaign and party page */}
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
            </Header.Content>
          </Header>
        </div>
        <br />
        <div>
          <h2>Notes</h2>
          <p>{character.notes ? character.notes : "No Notes!"}</p>
        </div>
      </div>
      {/* TODO create the character perks game data and render depending on character class */}
      <div className="character-page__perks">
        <h2>Perks</h2>
        <CharacterPerks
          character_class={character.character_class.name_hidden}
        />
      </div>
      {/* TODO create the game items (and store, etc) and render purchased items here */}
      <div className="character-page__items">
        <h2>Items</h2>
        <p>(Item Cards Coming Soon)</p>
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
