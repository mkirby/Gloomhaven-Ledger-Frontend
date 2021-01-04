import React, { useState } from "react";
import scenarios from "./scenarios.json";
import { Menu, Checkbox, Table, Icon } from "semantic-ui-react";
import "./ScenarioTable.css";

function ScenarioTable() {
  const [scenarioPage, changeScenarioPage] = useState(1);
  const maxScenarioPage = Math.ceil(scenarios.length / 15);

  const changePage = (value) => {
    let newPage = scenarioPage + value;
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > maxScenarioPage) {
      newPage = maxScenarioPage;
    }
    changeScenarioPage(newPage);
  };

  const renderScenarioNames = (scenarios) => {
    // 15 items per page: index 0-14, 15-29, etc
    // page * 15 - 15 = starting index: page 4 = 50
    // page * 15 - 1 = ending index: page 4 = 59
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

  return (
    <div className="world__scenarios">
      <h1>Scenarios</h1>
      <Table
        striped
        collapsing
        unstackable
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
        <Table.Body>{renderScenarioNames(scenarios)}</Table.Body>
        <Table.Footer>
          <Table.Row textAlign="center">
            <Table.HeaderCell colSpan="5">
              <Menu pagination>
                <Menu.Item as="a" icon onClick={() => changePage(-1)}>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a" icon onClick={() => changePage(1)}>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default ScenarioTable;
