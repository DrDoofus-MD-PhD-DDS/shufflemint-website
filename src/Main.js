import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Demo from "./Demo";
import Services from "./Services";
import Projects from "./Projects";
import Roadmap from "./Roadmap.js";
import Team from "./Team";
import Ecosystem from "./Ecosystem.js";
import "./styles/App.scss";
import "./styles/overrides.scss";

function Main() {
  return (
    <Container fluid className="main mt-5 mb-5">
      <Row>
        <Col>
          <Demo />
        </Col>
      </Row>
      <Row>
        <Col>
          <Services />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* maybe carousel of past projects */}
          <Projects />
        </Col>
      </Row>
      <Row>
        <Col>
          <Roadmap />
        </Col>
      </Row>
      <Row>
        <Col>
          <Team />
        </Col>
      </Row>
      <Row>
        <Col>
          <Ecosystem />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
