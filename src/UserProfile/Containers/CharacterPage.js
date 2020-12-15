import React from 'react'
import { Menu, Placeholder } from 'semantic-ui-react'
import { authHeader } from '../../_helpers/authHeader'

class CharacterPage extends React.Component {
  state = {
    character: {},
    loaded: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/characters/${this.props.match.params.id}`, {
      headers: authHeader()
    })
    .then(response => response.json())
    .then(data => {
      this.setState({character: data.character, loaded: true}, () => console.log(this.state))
    })
  }
  
  render() {
    const { character } = this.state

    // RENDER EACH COMPONENT OUT IN A FUNCTION

    return (
      <div className="character-page">

        <div>
          <Placeholder style={{height: 400, width: 300}}>
            <Placeholder.Image />
          </Placeholder>
        </div>

        <div>

          <div>
          <Placeholder style={{height: 50, width: 50}}>
            <Placeholder.Image />
          </Placeholder>
          <h3>{character.name}</h3>
          </div>

          <Menu widths={4} fluid>
            <Menu.Item link>
              XP: {character.experience}
            </Menu.Item>
            <Menu.Item link>
              Level: {character.level}
            </Menu.Item>
            <Menu.Item link>
              Health (hardcode): 12
            </Menu.Item>
            <Menu.Item link>
              Gold: {character.gold}
            </Menu.Item>
          </Menu>

          <h4>Party: (Need to Render)</h4>

          <div>
            <h3>Backstory</h3>
            <p>lorum lopsum ipsum </p>
          </div>
        </div>

        <div>
          <h3>Perks</h3>
          <p>Coming Soon</p>
        </div>

        <div>
          <h3>Items</h3>
          <p>(Stretch Goal)</p>
        </div>

        <div>
          <h3>Checks</h3>
          <p>Coming Soon</p>
        </div>

        <div>
          <h3>Notes</h3>
          <p>lorum lopsum ipsum </p>
        </div>
        
      </div>
    )
  }
}

export default CharacterPage