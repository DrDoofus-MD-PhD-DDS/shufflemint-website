import React from "react";
import YouTube from "react-youtube";
import { Container, Row, Col } from "react-bootstrap";

/*
video needs to reset to opening screen
These can maybe be moved to a data read in file and loop over it
*/

function Demo() {
  const opts = {
    height: "180",
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };

  function _onEnd(event) {
    event.target.restartVideo();
  }

  return (
    <div className="video-container">
      <YouTube
        videoId="8-M_OQq1IkY"
        id="smlesson1-video"
        opts={opts}
        //   onEnd={this._onEnd}
      />
      <p className="caption">
        ShuffleMint NFT Factory Lesson One - Basic Walkthrough
      </p>
    </div>
  );
}

export default Demo;
