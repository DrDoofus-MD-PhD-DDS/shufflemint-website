import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import omgkirby from "./assets/omgkirby-SM.png";

function Projects() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="projectIMG" src={omgkirby} alt="omgkirby" />
        <Carousel.Caption>
          <h3>omgkirby</h3>

          <p>
            ShuffleMint assembled the art and music into layers and deployed the
            contracts
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="projectIMG" src={omgkirby} alt="omgkirby" />
        <Carousel.Caption>
          <h3>omgkirby 2</h3>

          <p>We liked it so much we did it again!</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/*}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
  </Carousel.Item>*/}
    </Carousel>
  );
}

export default Projects;
