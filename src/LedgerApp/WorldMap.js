import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import scenarios from "./scenarios.json";

import { Image, Menu, Checkbox, Table, Icon } from "semantic-ui-react";
import "./WorldMap.css";

class WorldMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarioPage: 1,
      maxScenarioPage: Math.ceil(scenarios.length / 15),
    };
  }

  renderScenarioNames = (scenarios) => {
    const { scenarioPage } = this.state;
    // 15 items per page: index 0-14, 15-29, etc
    // page * 10 - 10 = starting index: page 5 = 40
    // page * 10 - 1 = ending index: page 5 = 49
    let startingIndex = scenarioPage * 15 - 15;
    let endingIndex = scenarioPage * 15 - 1;

    return scenarios.map((scenario, index) => {
      if (index >= startingIndex && index <= endingIndex) {
        return (
          <Table.Row key={scenario.id}>
            <Table.Cell>{scenario.id}.</Table.Cell>
            <Table.Cell>{scenario.coords}</Table.Cell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>{scenario.name}</Table.Cell>
          </Table.Row>
        );
      }
      return null;
    });
  };

  changePage = (value) => {
    const { maxScenarioPage, scenarioPage } = this.state;
    let newPage = scenarioPage + value;
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > maxScenarioPage) {
      newPage = maxScenarioPage;
    }
    this.setState({ scenarioPage: newPage }, () => console.log(this.state));
  };

  render() {
    return (
      <div className="world">
        <div className="world__map">
          <TransformWrapper>
            <TransformComponent>
              <Image
                className="world__map__img"
                src="/images/world-map/gloomhaven-map-orig.png"
                alt="Gloomhaven Map"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="world__scenarios">
          <h1>Scenarios</h1>
          <Table
            celled
            striped
            collapsing
            size="small"
            compact="very"
            color="orange"
          >
            <Table.Header>
              <Table.Row textAlign="center">
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>
                  <Icon name="location arrow" />
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Icon name="unlock" />
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Icon name="check" />
                </Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.renderScenarioNames(scenarios)}</Table.Body>
            <Table.Footer>
              <Table.Row textAlign="center">
                <Table.HeaderCell colSpan="5">
                  <Menu pagination>
                    <Menu.Item as="a" icon onClick={() => this.changePage(-1)}>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a" icon onClick={() => this.changePage(1)}>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div>
    );
  }
}

export default WorldMap;
