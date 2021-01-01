import React, { useEffect, useState } from "react";
import { Checkbox, Icon } from "semantic-ui-react";

function CharacterCheckmarks(props) {
  // add props.total into state
  let [checkTotal, changeCheckTotal] = useState(props.total);
  // monitors props.total for changes and updates state which causes a full rerender
  useEffect(() => {
    changeCheckTotal(props.total);
  }, [props.total]);

  // track how many checkboxes have been created
  let checkboxes = 0;
  // collect all the JSX elements to be returned and rendered
  let checkmarks = [];

  // makes 6 groups of 3 checkboxes (18 checkboxes total)
  for (let i = 0; i < 6; i++) {
    // makes a group of 3 checkboxes and sets the state of each checkbox
    let checkboxGroup = [];
    for (let j = 0; j < 3; j++) {
      // create a checkbox either checked or not checked
      checkboxGroup.push(
        <Checkbox
          key={`cb-${checkboxes}`}
          checked={checkboxes < checkTotal}
          style={{ verticalAlign: "bottom" }}
          label=""
        />
      );
      // increment the count of checkboxes created
      checkboxes += 1;
    }
    checkmarks.push(
      // each group of checkmarks should be child inside a flexbox parent to achieve layout
      // takes the checkbox group and adds an leading icon
      <div className="grouped" key={`cb-group-${i}`}>
        <Icon name="checkmark" />
        {" : "}
        {checkboxGroup}
      </div>
    );
  }

  return <>{checkmarks}</>;
}

export default CharacterCheckmarks;
