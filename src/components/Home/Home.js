import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: "0.4rem" }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{ marginBottom: "0.8rem" }}>
                I'M <strong className="main-name">VIJAYENDRA NAYAK</strong>
              </h1>

              {/* 🔥 Professional Tags */}
              <div style={{ marginBottom: "1.2rem" }}>
                <h4 style={{ color: "rgb(155 126 172)", marginBottom: "0.3rem" }}>
                  Technical Apprentice @ Target 
                </h4>
              </div>

              <div style={{ padding: "20px 0", textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="developer illustration"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
