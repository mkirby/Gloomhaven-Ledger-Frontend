import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Label, Icon, Image } from "semantic-ui-react";
import "./ProfilePage.css";

import { userActions } from "../../_actions/userActions";

function ProfilePage(props) {
  const { username } = props.user;
  const usernameUppercased =
    username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <div className="profile__page">
      {props.loggedIn && (
        <h1>
          <Image
            src={process.env.PUBLIC_URL + props.user.avatar}
            alt="avatar"
            inline
          />
          {usernameUppercased}
        </h1>
      )}
      <Menu vertical>
        <Menu.Item link as={NavLink} to={`/${username}/campaigns`}>
          <Label>{props.user.campaigns.length}</Label>
          <Icon name="map outline" />
          Campaigns
        </Menu.Item>
        <Menu.Item link as={NavLink} to={`/${username}/parties`}>
          <Label>{props.user.parties.length}</Label>
          <Icon name="users" />
          Parties
        </Menu.Item>
        <Menu.Item link as={NavLink} to={`/${username}/characters`}>
          <Label>{props.user.characters.length}</Label>
          <Icon name="user circle" />
          Characters
        </Menu.Item>
      </Menu>
    </div>
  );
}

function mapStateToProps(state) {
  const { user, loggedIn } = state.authentication;
  return { user, loggedIn };
}

const actionCreators = {
  getByUsername: userActions.getByUsername,
};

export default connect(mapStateToProps, actionCreators)(ProfilePage);
