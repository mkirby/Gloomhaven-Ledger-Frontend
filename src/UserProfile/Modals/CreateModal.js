import React from 'react'
import { Header, Modal, Button } from 'semantic-ui-react'
import CreateCampaignForm from '../Forms/CreateCampaignForm'
import CreateCharacterForm from '../Forms/CreateCharacterForm'
import CreatePartyForm from '../Forms/CreatePartyForm'

function CreateModal(props) {
  const [open, setOpen] = React.useState(false)

  // required props
  const { model } = props // what model is being edited? 'character', 'party', 'campaign'
  const {trigger} = props // what element triggers the modal? 'button', 'menu'

  const uppercasedModel = model.charAt(0).toUpperCase() + model.slice(1)

  const handleClose = () => setOpen(false)

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={modalTriggerOptions(trigger, uppercasedModel)}
      size='tiny'
      centered={false}
    >
      <Modal.Header>Create { uppercasedModel }</Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <Header>Render Different Forms Depending on Model</Header>
          {model === 'campaign' && <CreateCampaignForm handleClose={handleClose} />}
          {model === 'party' && <CreatePartyForm handleClose={handleClose} />}
          {model === 'character' && <CreateCharacterForm handleClose={handleClose} />}
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        {/* TODO figure out if I can get buttons in here */}
      </Modal.Actions>

    </Modal>
  )
}

function modalTriggerOptions(trigger, model) {
  if (trigger === 'button') {
    return <Button>Create {model}</Button>
  } else if (trigger === 'menu') {
    return (<Menu.Item link name="Create"/>)
  } else {
    console.log("Unsupported Modal Trigger")
  }
}

export default CreateModal