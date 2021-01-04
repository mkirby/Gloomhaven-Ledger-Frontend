import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Image } from "semantic-ui-react";
import "./WorldMap.css";

function WorldMap() {
  return (
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
  );
}

export default WorldMap;
