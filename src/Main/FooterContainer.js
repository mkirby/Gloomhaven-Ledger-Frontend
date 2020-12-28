import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./FooterContainer.css";

function FooterContainer() {
  return (
    <footer>
      <div className="widget-1">
        Gloomhaven and all related properties, images and text are owned by
        Cephalofair Games.
      </div>
      <div className="widget-2">
        <p>
          <Button
            icon
            labelPosition="left"
            size="mini"
            compact
            basic
            inverted
            as="a"
            href="https://github.com/mkirby/Gloomhaven-Ledger-Frontend"
            target="_blank"
          >
            <Icon name="github" />
            Frontend
          </Button>
          <Button
            icon
            labelPosition="left"
            size="mini"
            compact
            basic
            inverted
            as="a"
            href="https://github.com/mkirby/Gloomhaven-Ledger-Backend"
            target="_blank"
          >
            <Icon name="github" />
            Backend
          </Button>{" "}
          <Icon name="copyright outline" fitted /> 2020 Matthew Robbins Kirby.
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterContainer;
