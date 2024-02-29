import { Button, Col, Container, Row } from "react-bootstrap";
import "./ReactBootstrap.css";
const ReactBootstrap = () => {
  const Style = {
    backgroundColor: "pink",
    marginTop: "10px",
    color: "green",
  };
  return (
    <div>
      <h1 className="text-danger">React Bootstrap</h1>
      <Container className="mt-5">
        <Row>
          <Col className="bg-warning" md={4}>
            this is the column-1
          </Col>
          <Col
            className="hoverTest"
            md={4}
            style={{
              backgroundColor: "red",
              "@media (max-width: 600px)": {
                backgroundColor: "purple !important",
              },
            }}
          >
            this is the column-2 for Media Screen
          </Col>
        </Row>
        <Row>
          <Col style={Style}>
            this is the column-2 for const styling and hover
          </Col>
          <Button className="btn btn-outline-dark  mt-4">Click me</Button>
        </Row>
      </Container>
    </div>
  );
};

export default ReactBootstrap;
