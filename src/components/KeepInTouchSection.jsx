import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contact1 from "../assets/images/contact-1.png";
import contact2 from "../assets/images/contact-2.png";
import contact3 from "../assets/images/contact-3.png";
import contact4 from "../assets/images/contact-4.png";

const KeepInTouchSection = () => {
  return (
    <section className="keep-in-touch-section py-5">
      <Container>
        <Row className="g-4">
          <Col lg={6} className="mb-4">
            <h2 className="mb-3 section-title">Keep In Touch</h2>
            <p className="mb-5 section-description">
              Our lab created diamonds are the eco-conscious choice, and exhibit
              the same sparkle as natural diamonds.
            </p>
            <Form>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email id to subscribe"
                  className="form-input rounded-0"
                />
              </Form.Group>
              <div className="">
                <Button
                  variant="dark"
                  className="rounded-pill px- py-2"
                  style={{
                    padding: "5rem",
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              <Col xs={6}>
                <img
                  src={contact1}
                  className="gallery-img img-fluid"
                  alt="Diamond ring on hand"
                  width="200"
                  height="200"
                />
              </Col>
              <Col xs={6}>
                <img
                  src={contact2}
                  className="gallery-img img-fluid"
                  alt="Diamond bracelet on wrist"
                  width="200"
                  height="200"
                />
              </Col>
              <Col xs={6}>
                <img
                  src={contact3}
                  className="gallery-img img-fluid"
                  alt="Diamond ring box"
                  width="200"
                  height="200"
                />
              </Col>
              <Col xs={6}>
                <img
                  src={contact4}
                  className="gallery-img img-fluid"
                  alt="Diamond ring with coffee"
                  width="200"
                  height="200"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KeepInTouchSection;
