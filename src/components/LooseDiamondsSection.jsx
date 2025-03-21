import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import diamond1 from "../assets/images/diamond-1.png";

const LooseDiamondsSection = () => {
  const diamondShapes = [
    {
      id: 1,
      shape: "Round",
      image: diamond1,
      alt: "Round diamond",
    },
    {
      id: 2,
      shape: "Emerald",
      image: diamond1,
      alt: "Emerald diamond",
    },
    {
      id: 3,
      shape: "Round",
      image: diamond1,
      alt: "Round diamond variation",
    },
    {
      id: 4,
      shape: "Oval",
      image: diamond1,
      alt: "Oval diamond",
    },
    {
      id: 5,
      shape: "Heart",
      image: diamond1,
      alt: "Heart diamond",
    },
    {
      id: 6,
      shape: "Asscher",
      image: diamond1,
      alt: "Asscher diamond",
    },
    {
      id: 7,
      shape: "Heart",
      image: diamond1,
      alt: "Heart diamond variation",
    },
  ];

  return (
    <section className="loose-diamonds-section py-5">
      <Container>
        <h2 className="text-center mb-3 section-title">
          Explore Loose Diamonds
        </h2>
        <p
          className="text-center mb-5 section-description-2"
          style={{
            color: "#929292",
          }}
        >
          Every diamond in our collection is selected for its superior cut,
          symmetry, and shape.
        </p>

        <div className="diamonds-carousel-container">
          <Carousel
            controls={false}
            indicators={true}
            interval={null}
            className="diamonds-carousel"
          >
            <Carousel.Item>
              <Row className="g-4 justify-content-center">
                {diamondShapes.map((diamond) => (
                  <Col xs={3} key={diamond.id} className="text-center dcard">
                    <img
                      src={diamond.image}
                      className="diamond-shape img-fluid"
                      alt={diamond.alt}
                      width="150"
                      height="150"
                    />
                    <p className="diamond-shape-title mt-2">{diamond.shape}</p>
                    <p
                      style={{
                        color: "#F7B79D",
                      }}
                    >
                      Every diamond in our collection
                    </p>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default LooseDiamondsSection;
