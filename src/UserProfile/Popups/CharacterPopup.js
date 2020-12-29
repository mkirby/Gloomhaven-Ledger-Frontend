import React from "react";
import { Popup, Image } from "semantic-ui-react";

function CharacterPopup(props) {
  const { character } = props;
  return (
    <Popup
      content={character.character_class.fullname}
      key={character.id}
      header={character.name}
      trigger={
        <Image
          src={character.character_class.img_portrait}
          alt={character.character_class.fullname}
        />
      }
    ></Popup>
  );
}

export default CharacterPopup;
