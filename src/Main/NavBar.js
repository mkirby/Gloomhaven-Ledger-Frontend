import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import "./NavBar.css";

import ProfileMenu from "./ProfileMenu";

function NavBar(props) {
  const [activeItem, handleItemClick] = useState("");

  return (
    <header className="navbar">
      <Menu size="large" attached borderless>
        <Menu.Menu>
          <Menu.Item>
            <NavLink to="/">
              <h2 className="heading">Gloomhaven Ledger</h2>
            </NavLink>
          </Menu.Item>
        </Menu.Menu>
        {!props.loggedIn && (
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              to="/login"
              name="login"
              active={activeItem === "login"}
              onClick={() => handleItemClick("login")}
            >
              Login
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/signup"
              position="right"
              name="signup"
              active={activeItem === "signup"}
              onClick={() => handleItemClick("signup")}
            >
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        )}

        {props.loggedIn && (
          <Menu.Menu position="right" style={{ paddingRight: "12.8571px" }}>
            <ProfileMenu />
          </Menu.Menu>
        )}
      </Menu>
    </header>
  );
}

function mapStateToProps(state) {
  const { user, loggedIn } = state.authentication;
  return { user, loggedIn };
}

export default connect(mapStateToProps, null)(NavBar);
