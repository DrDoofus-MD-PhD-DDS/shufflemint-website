import React from "react";
import { ListGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function Services() {
  return (
    <ListGroup>
      <ListGroup.Item className="list-group-item-primary">
        Use ShuffleMint yourself to create and deploy generative art/music NFTs
      </ListGroup.Item>
      <ListGroup.Item className="list-group-item-primary">
        Just need help with deployment or generation?
        <br />
        We can do that
      </ListGroup.Item>
      <ListGroup.Item className="list-group-item-primary">
        ShuffleMint Team can help with the art, code dev, and promotion if
        needed
      </ListGroup.Item>
      <ListGroup.Item className="list-group-item-primary bold">
        Full service to self service and anywhere in between
      </ListGroup.Item>
      <ListGroup.Item className="list-group-item-primary">
        CryptoHoots NFT members use ShuffleMint for free!
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Services;
