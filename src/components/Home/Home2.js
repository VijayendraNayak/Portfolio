import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import myImg from "../../Assets/Circlevijay.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a passionate software developer who enjoys building meaningful, user-focused applications.
              <br />
              <br />
              I work primarily with&nbsp;
              <b className="purple">Java, JavaScript, TypeScript</b> and have experience across the full stack.
              <br />
              <br />
              My interests include developing modern&nbsp;
              <i>
                <b className="purple">web applications, scalable systems,</b>
              </i>{" "}
              and exploring areas related to{" "}
              <b className="purple">System desing</b>.
              <br />
              <br />
              I love working with <b className="purple">Springboot</b>, <b className="purple">Node.js</b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js and Next.js</b>
              </i>{" "}
              to build fast, elegant, and intuitive experiences.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="profile avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VijayendraNayak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vijayendra-nayak-b81720226/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:vijayendranayak19@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
