import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./styles/App.scss";
import "./styles/overrides.scss";
import shuffleMintLogo from "./assets/shufflemint-green.png";

import Demo from "./Demo";
import Services from "./Services";
import Projects from "./Projects";
import Roadmap from "./Roadmap.js";
import Team from "./Team";
import Ecosystem from "./Ecosystem.js";
import rageHoot from "./assets/ragehoot.png";
import ecoFrame from "./assets/ecoframe.png";

// for local development ... although make default to random api pull eventually
const Hapi = "https://www.cryptohoots.com/api/hoots";

function App() {
  const [randomHoot, setRandomHoot] = useState({ rageHoot });

  // Get a random hoot from the API
  async function getHoot() {
    let hootArray = [{ rageHoot }];
    let randomID = Math.floor(Math.random() * 2500);
    const response = await fetch(Hapi + "/" + randomID);
    hootArray.push(await response.json());
    setRandomHoot(hootArray[0]);
  }

  return (
    <div className="App">
      <header>
        <Container fluid>
          <Row>
            <Col>
              <img
                src={shuffleMintLogo}
                className="shuffleMintLogo"
                alt="shufflemint logo"
              />
              <div className="tagline">
                The Premier Generative Art NFT Studio
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="main-container">
        <div className="fixed">
          {/* Spied element */}
          <div id="scrollspy1" class="sticky-top">
            <ul class="nav flex-column nav-pills menu-sidebar">
              <li class="nav-item">
                <a class="nav-link" href="#example-1">
                  ShuffleMint in Action
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#example-2">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#example-3">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#example-4">
                  Road Map
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#example-5">
                  Meet the Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#example-6">
                  CryptoHoots Ecosystem
                </a>
              </li>
            </ul>
          </div>
          {/*<!-- Scrollspy -->*/}
          {/*<!-- Spied element -->*/}
        </div>
        <Container fluid className="mt-4 pt-4">
          <Row>
            <Col xs={4}></Col>
            <Col xs={7} className="">
              {/* <!-- Scrollspy -->*/}
              <div
                data-mdb-spy="scroll"
                data-mdb-target="#scrollspy1"
                data-mdb-offset="0"
                class="scrollspy-example"
              >
                <section id="example-1">
                  <h1>ShuffleMint in Action</h1>
                  <Demo />
                </section>
                <section id="example-2">
                  <h1>Any Level of Service</h1>
                  <Services />
                </section>
                <section id="example-3">
                  <h1>Projects</h1>
                  <Projects />
                </section>
                <section id="example-4">
                  <h1>Road Map</h1>
                  <Roadmap />
                </section>
                <section id="example-5">
                  <h1>Meet the Team</h1>
                  <Team />
                </section>
                <section id="example-6">
                  <h1>The CryptoHoots Ecosystem</h1>
                  <Ecosystem />
                </section>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <footer></footer>
      <div className="credits">
        <div className="frame">
          <img
            src={randomHoot}
            className="cryptohootIMG"
            alt="Random CryptoHoot"
          />
          <img src={ecoFrame} className="hooteco" />
        </div>
        Created by the CryptoHoots Community
      </div>
    </div>
  );
}

export default App;
