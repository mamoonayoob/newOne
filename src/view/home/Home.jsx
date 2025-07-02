import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Container, Row, Col, Button } from "react-bootstrap";
import moon from "../../assets/moon.jpg";

const Home = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 text-center text-lg-start mt-5">
            <p className="badge">Welcome to my portfolio</p>
            <p className="description mt-3">
              Turning ideas into modern web solutions
            </p>
            <h1 className="main-heading">
              Hi, I'm Mamoon Ayoob – A Passionate Developer MERN Stack & Shopify{" "}
              <span>Developer</span>
            </h1>

            <TypeAnimation
              sequence={[
                "MongoDB",
                1000,
                "ExpressJS",
                1000,
                "ReactJS",
                1000,
                "NodeJS",
                1000,
                "Shopify Expert",
                1000,
                "WordPress Developer",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="typewriter"
            />

            <p className="description mt-3">
              {/* Expert in building scalable web applications using the MERN stack. */}
              I help businesses build fast, scalable, and user-friendly websites
              using modern web technologies like React, Node.js, MongoDB,
              Shopify, and WordPress
            </p>

            <div className="buttons mt-4">
              <Button className="btn primary">Projects</Button>
              <Button className="btn secondary ms-3">Contact Me</Button>
            </div>
          </Col>

          <Col lg={6} className="text-center">
            <img
              style={{
                height: "300px",
                width: "250px",
              }}
              src={moon}
              alt="Illustration"
              className="img-fluid rounded float"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
