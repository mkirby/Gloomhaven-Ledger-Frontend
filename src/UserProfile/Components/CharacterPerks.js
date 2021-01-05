import React from "react";
import classPerks from "./classPerks.json";
import { Checkbox, List } from "semantic-ui-react";

function CharacterPerks(props) {
  const { character_class } = props;
  const characterClassPerks = classPerks[character_class];

  const renderCheckboxes = (count) => {
    let checkboxes = [];
    for (let i = 0; i < count; i++) {
      checkboxes.push(
        <Checkbox
          key={`cb-${i}`}
          style={{ verticalAlign: "bottom" }}
          label=""
        />
      );
    }
    return checkboxes;
  };

  let renderedPerks = characterClassPerks.map((perk, index) => {
    return (
      <List.Item key={index}>
        {renderCheckboxes(perk[0])} {perk[1]}
      </List.Item>
    );
  });

  return <List>{renderedPerks}</List>;
}

export default CharacterPerks;
