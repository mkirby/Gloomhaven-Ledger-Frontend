import React from 'react'
import { Header, Modal, Menu } from 'semantic-ui-react'
import EditCharacterForm from '../Forms/EditCharacterForm'

function EditModal(props) {
  const [open, setOpen] = React.useState(false)

  // what model is being edited? 'character', 'party', 'campaign'
  const { model } = props
  const uppercasedModel = model.charAt(0).toUpperCase() + model.slice(1)

  const handleClose = () => setOpen(false)

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Menu.Item link name="Edit"/>}
      size='tiny'
      centered={false}
    >
      <Modal.Header>Edit { uppercasedModel }</Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <Header>Render Different Forms</Header>
          <p>Depending on Model</p>

          {model === "character" && <EditCharacterForm character={props.character} handleClose={handleClose} />}
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        {/* TODO figure out if I can get buttons in here */}
      </Modal.Actions>

    </Modal>
  )
}

export default EditModal