import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Image, Button, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// other imports

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="phone-container d-flex flex-column justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} className="d-flex justify-content-center">
          <Image src="path_here"  roundedCircle />
        </Col>
      </Row>

      <Row className="w-100 mt-3">
        <Col xs={12} className="text-center">
          <h3>Name</h3>
          <p>Position</p>
          <p>Email | Phone #</p>
        </Col>
      </Row>

      <Row className="w-100 mt-3">
        <Col xs={12} className="text-center">
          <Image className="logo-image" src="corp_logo.png" />
        </Col>
      </Row>

      <Row className="w-100 mt-3 mb-3">
        <Col xs={12} className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Social Links
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Social Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="link" href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</Button>
          <Button variant="link" href="https://github.com/yourprofile" target="_blank">GitHub</Button>
          <Button variant="link" href="https://twitter.com/yourprofile" target="_blank">Twitter</Button>
          {/* Add more social links as needed */}
        </Modal.Body>
      </Modal>

      <Row className="w-100">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                This is some text about the person or additional details they wish to include on their digital business card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
