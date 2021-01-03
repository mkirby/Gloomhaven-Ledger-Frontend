import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { Image, Button } from "semantic-ui-react";
import "./WorldMap.css";

class WorldMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

export default WorldMap;
