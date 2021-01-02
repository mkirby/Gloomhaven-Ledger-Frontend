import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Dropdown, Placeholder, Image } from "semantic-ui-react";

import { userActions } from "../_actions/userActions";

function ProfileMenu(props) {
  let username = "Loading...";
  if (props.user) {
    username = props.user.username;
  }

  const usernameUppercased =
    username.charAt(0).toUpperCase() + username.slice(1);

  const trigger = (
    <>
      {usernameUppercased}&nbsp;&nbsp;&nbsp;&nbsp;
      <Image
        src={process.env.PUBLIC_URL + props.user.avatar}
        alt="avatar"
        style={{ height: 25, width: 25 }}
      />
    </>
  );

  return (
    <Dropdown floating item trigger={trigger}>
      <Dropdown.Menu>
        <Dropdown.Item
          style={{ textAlign: "right" }}
          content={`${usernameUppercased} Profile`}
          as={NavLink}
          to={`/${username}`}
        />
        <Dropdown.Divider />
        <Dropdown.Item
          style={{ textAlign: "right" }}
          content="My Characters"
          as={NavLink}
          to={`/${username}/characters`}
        />
        <Dropdown.Item
          style={{ textAlign: "right" }}
          content="My Parties"
          as={NavLink}
          to={`/${username}/parties`}
        />
        <Dropdown.Item
          style={{ textAlign: "right" }}
          content="My Campaigns"
          as={NavLink}
          to={`/${username}/campaigns`}
        />
        <Dropdown.Item
          style={{ textAlign: "right" }}
          content="Log Out"
          as={NavLink}
          to="/login"
          onClick={props.logout}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return { user };
}

const actionCreators = {
  logout: userActions.logout,
};

export default connect(mapStateToProps, actionCreators)(ProfileMenu);
