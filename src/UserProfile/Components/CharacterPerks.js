import React from "react";
import classPerks from "./classPerks.json";
import { Checkbox, List, Image } from "semantic-ui-react";

function CharacterPerks(props) {
  const { character_class } = props;
  const characterClassPerks = classPerks[character_class];
  const replacementTerms = [
    { term: "add-target", folder: "status-effect-icons" },
    { term: "curse", folder: "status-effect-icons" },
    { term: "disarm", folder: "status-effect-icons" },
    { term: "immobilize", folder: "status-effect-icons" },
    { term: "invisible", folder: "status-effect-icons" },
    { term: "muddle", folder: "status-effect-icons" },
    { term: "pierce", folder: "status-effect-icons" },
    { term: "poison", folder: "status-effect-icons" },
    { term: "pull", folder: "status-effect-icons" },
    { term: "push", folder: "status-effect-icons" },
    { term: "rolling", folder: "status-effect-icons" },
    { term: "status-bless", folder: "status-effect-icons" },
    { term: "strengthen", folder: "status-effect-icons" },
    { term: "stun", folder: "status-effect-icons" },
    { term: "wound", folder: "status-effect-icons" },
    { term: "heal", folder: "general-icons" },
    { term: "shield", folder: "general-icons" },
    { term: "fire", folder: "elements" },
    { term: "ice", folder: "elements" },
    { term: "air", folder: "elements" },
    { term: "earth", folder: "elements" },
    { term: "light", folder: "elements" },
    { term: "dark", folder: "elements" },
    { term: "any-element", folder: "elements" },
    { term: "use-element", folder: "elements" },
  ];

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

  const renderText = (text) => {
    for (let i = 0; i < replacementTerms.length; i++) {
      // if the string includes a replacement term
      if (text.includes(`[${replacementTerms[i].term}]`)) {
        // create an array to hold the html elements
        let arrayOfElements = [];
        // split the inputted string on the replacement term
        const splitTextArray = text.split(`[${replacementTerms[i].term}]`);
        // iterate over each piece the split text
        for (let j = 0; j < splitTextArray.length; j++) {
          // check if the split text has any further replacement terms
          let innerText = renderText(splitTextArray[j]);
          if (splitTextArray.length - 1 !== j) {
            // if this this not the last item in the splitTextArray
            // because text is split on a icon each section should have an icon added in (except the last item in the array)
            arrayOfElements.push(
              innerText,
              <Image
                key={j}
                src={
                  process.env.PUBLIC_URL +
                  `/images/${replacementTerms[i].folder}/${replacementTerms[i].term}.png`
                }
                alt={`${replacementTerms[i]} icon`}
                style={{
                  verticalAlign: "bottom",
                  height: "20px",
                  width: "auto",
                }}
              />
            );
          } else {
            // last item in array doesn't get an icon added
            arrayOfElements.push(innerText);
          }
        }
        return arrayOfElements;
      }
    }
    return text;
  };

  let renderedPerks = characterClassPerks.map((perk, index) => {
    return (
      <List.Item key={index}>
        {renderCheckboxes(perk.checkboxes)} {renderText(perk.text)}
      </List.Item>
    );
  });

  return <List>{renderedPerks}</List>;
}

export default CharacterPerks;
