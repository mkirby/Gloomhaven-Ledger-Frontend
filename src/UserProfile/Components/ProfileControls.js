import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import "./ProfileControls.css";

import CreateModal from "../Modals/CreateModal";
import EditModal from "../Modals/EditModal";
import { campaignAction } from "../../_actions/campaignActions";
import { partyAction } from "../../_actions/partyActions";
import { characterAction } from "../../_actions/characterActions";

class ProfileControls extends React.Component {
  render() {
    const { user } = this.props;
    const { username } = user;
    return (
      <div className="profile__controls">
        <Switch>
          <Route
            exact
            path={`/${username}`}
            component={() => this.renderProfilePageButtons()}
          />
          <Route
            path={`/${username}/campaigns/:id`}
            component={({ match }) =>
              this.renderCampaignShowButtons(match.params.id, user)
            }
          />
          <Route
            path={`/${username}/campaigns`}
            component={this.renderCampaignIndexButtons}
          />
          <Route
            path={`/${username}/parties/:id`}
            component={({ match }) =>
              this.renderPartyShowButtons(match.params.id, user)
            }
          />
          <Route
            path={`/${username}/parties`}
            component={this.renderPartyIndexButtons}
          />
          <Route
            path={`/${username}/characters/:id`}
            component={({ match }) =>
              this.renderCharacterShowButtons(match.params.id, user)
            }
          />
          <Route
            path={`/${username}/characters`}
            component={this.renderCharacterIndexButtons}
          />
        </Switch>
      </div>
    );
  }

  renderProfilePageButtons = () => {
    return (
      <>
        <CreateModal model="character" trigger="button" />
        <CreateModal model="party" trigger="button" />
        <CreateModal model="campaign" trigger="button" />
      </>
    );
  };

  renderCampaignShowButtons = (id, user) => {
    const campaign = user.campaigns.find(
      (campaign) => campaign.id === parseInt(id)
    );
    return (
      <>
        <CreateModal model="party" trigger="button" />
        <EditModal model="campaign" trigger="button" campaign={campaign} />
        <Button
          onClick={() => {
            this.props.deleteCampaign(campaign);
            this.props.history.push(`/${user.username}/campaigns`);
          }}
        >
          Delete Campaign
        </Button>
      </>
    );
  };

  renderCampaignIndexButtons = () => {
    return (
      <>
        <CreateModal model="campaign" trigger="button" />
      </>
    );
  };

  renderPartyShowButtons = (id, user) => {
    const party = user.parties.find((party) => party.id === parseInt(id));
    return (
      <>
        <CreateModal model="character" trigger="button" />
        <EditModal model="party" trigger="button" party={party} />
        <Button
          onClick={() => {
            this.props.deleteParty(party);
            this.props.history.push(`/${user.username}/parties`);
          }}
        >
          Delete Party
        </Button>
      </>
    );
  };

  renderPartyIndexButtons = () => {
    return (
      <>
        <CreateModal model="party" trigger="button" />
      </>
    );
  };

  renderCharacterShowButtons = (id, user) => {
    const character = user.characters.find(
      (character) => character.id === parseInt(id)
    );
    return (
      <>
        <EditModal model="character" trigger="button" character={character} />
        <Button
          onClick={() => {
            this.props.deleteCharacter(character);
            this.props.history.push(`/${user.username}/characters`);
          }}
        >
          Delete Character
        </Button>
      </>
    );
  };

  renderCharacterIndexButtons = () => {
    return (
      <>
        <CreateModal model="character" trigger="button" />
      </>
    );
  };
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  deleteCampaign: campaignAction.deleteCampaign,
  deleteParty: partyAction.deleteParty,
  deleteCharacter: characterAction.deleteCharacter,
};

export default withRouter(
  connect(mapStateToProps, actionCreators)(ProfileControls)
);
