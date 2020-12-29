import React from "react";
import { Modal, Menu, Button } from "semantic-ui-react";

import EditCharacterForm from "../Forms/EditCharacterForm";
import EditPartyForm from "../Forms/EditPartyForm";
import EditCampaignForm from "../Forms/EditCampaignForm";

function EditModal(props) {
  const [open, setOpen] = React.useState(false);

  // required props
  const { model } = props; // what model is being edited? 'character', 'party', 'campaign'
  const { trigger } = props; // what element triggers the modal? 'button', 'menu'

  // required props depending on model
  // character
  // party
  // campaign

  const uppercasedModel = model.charAt(0).toUpperCase() + model.slice(1);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={modalTriggerOptions(trigger, uppercasedModel)}
      size="tiny"
      centered={false}
    >
      <Modal.Header>Edit {uppercasedModel}</Modal.Header>

      <Modal.Content>
        <Modal.Description>
          {model === "character" && (
            <EditCharacterForm
              character={props.character}
              handleClose={handleClose}
            />
          )}
          {model === "party" && (
            <EditPartyForm party={props.party} handleClose={handleClose} />
          )}
          {model === "campaign" && (
            <EditCampaignForm
              campaign={props.campaign}
              handleClose={handleClose}
            />
          )}
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        {/* TODO figure out if I can get buttons in here */}
      </Modal.Actions>
    </Modal>
  );
}

function modalTriggerOptions(trigger, model) {
  if (trigger === "button") {
    return <Button>Edit {model}</Button>;
  } else if (trigger === "menu") {
    return <Menu.Item link name="Edit" />;
  } else {
    console.log("Unsupported Modal Trigger");
  }
}

export default EditModal;
