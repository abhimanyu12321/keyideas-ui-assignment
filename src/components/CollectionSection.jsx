import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import collection_1 from "../assets/images/collection-1.png";
import collection_2 from "../assets/images/collection-2.png";
import collection_3 from "../assets/images/collection-3.png";
import collection_4 from "../assets/images/collection-4.png";

const CollectionSection = () => {
  const collections = [
    {
      id: 1,
      title: "Wedding Rings",
      image: collection_1,
      alt: "Wedding rings",
    },
    {
      id: 2,
      title: "Engagement Rings",
      image: collection_2,
      alt: "Engagement rings",
    },
    {
      id: 3,
      title: "Fine Jewelry",
      image: collection_3,
      alt: "Fine jewelry",
    },
    {
      id: 4,
      title: "Latest Rings",
      image: collection_4,
      alt: "Latest rings",
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-center mb-4 section-title">Our Collection</h2>
        <p className="text-center mb-5 section-description-2">
          Discover our elegant and unique fine jewelry collections, ranging from
          classic diamond studs to stylish pendants and dazzling bracelets.
        </p>
      </div>
      <section
        className="collection-section py-5"
        style={{ position: "relative" }}
      >
        <Container
          style={{
            position: "absolute",
            top: "16%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="coll-container"
        >
          <Row className="g-4">
            {collections.map((collection) => (
              <Col xs={3} md={3} key={collection.id}>
                <Card
                  className="collection-card border-0 h-100"
                  style={{
                    backgroundColor: "#F7F7F7",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={collection.image}
                    alt={collection.alt}
                    width="250"
                    height="250"
                    className="card-img-contain"
                  />
                  <Card.Body className="pb-4">
                    <Card.Title className="text-center fw-bold">
                      {collection.title}
                    </Card.Title>
                    <p
                      className="text-center small"
                      style={{ color: "#929292" }}
                    >
                      Every diamond in our collection
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CollectionSection;
