import React from 'react'
import { Header, Modal, Button } from 'semantic-ui-react'
import CreateCharacterForm from '../Forms/CreateCharacterForm'

function CreateModal(props) {
  const [open, setOpen] = React.useState(false)

  // what model is being created? 'character', 'party', 'campaign'
  const { model } = props
  const uppercasedModel = model.charAt(0).toUpperCase() + model.slice(1)

  const handleClose = () => setOpen(false)

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Create {uppercasedModel}</Button>}
      size='tiny'
      centered={false}
    >
      <Modal.Header>Create { uppercasedModel }</Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <Header>Render Different Forms Depending on Model</Header>

          {model === "character" && <CreateCharacterForm handleClose={handleClose} />}
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        {/* TODO figure out if I can get buttons in here */}
      </Modal.Actions>

    </Modal>
  )
}

export default CreateModal