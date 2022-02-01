import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rageHoot from "./assets/ragehoot.png";
import ecoFrame from "./assets/ecoframe.png";
function Ecosystem() {
  return (
    <div className="ecotext">
      ShuffleMint NFT Studio is part of the CryptoHoots NFT ecosystem.
      CryptoHoots was started by the founders as fun pixelated steampunk owl
      NFT. There was no software available that adequately helped assembly of
      their generative art or deployment of the contracts to the blockchain, so
      they developed their own. Quickly, ShuffleMint became in demand for its
      proven reliability and the service that comes with it. And if you are a
      CryptoHoot owner, or become one, you can use CryptoHoots for free!
      <div className="lamewrapper">
        <div className="frame">
          <img
            src={rageHoot}
            className="cryptohootIMG"
            alt="Random CryptoHoot"
          />
          <img src={ecoFrame} className="hooteco" />
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
