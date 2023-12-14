// App.js
import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import QRCodeOne from "./QRCodeOne";
import QRCodeTwo from "./QRCodeTwo";
import "./App.css";
import AppLogo from "./images/Bizlink.png";

function App() {
  const [activeQRCode, setActiveQRCode] = useState(null);

  return (
    <Container fluid className="d-flex flex-column position-relative" style={{ height: "100vh" }}>
      <Row
        className="justify-content-center w-100"
        style={{ backgroundColor: "#404040" }}
      >
        <Col
          xs={12}
          className="d-flex justify-content-center"
          style={{ textAlign: "center" }}
        >
          <img src={AppLogo} height="150" alt="App Logo" />
        </Col>
      </Row>

      <div
        className="flex-grow-1 d-flex justify-content-center"
        style={{ textAlign: "center" }}
      >
        {!activeQRCode ? (
          <div className="text-center">
            <Button className="m-2" onClick={() => setActiveQRCode(1)}>
              Button 1
            </Button>
            <Button className="m-2" onClick={() => setActiveQRCode(2)}>
              Button 2
            </Button>
          </div>
        ) : activeQRCode === 1 ? (
          <QRCodeOne />
        ) : (
          <QRCodeTwo />
        )}
      </div>

      <Row
        className="justify-content-center w-100 mt-auto position-absolute"
        style={{ backgroundColor: "#404040", height: "5rem", bottom: 0 }}
      ></Row>
    </Container>
  );
}

export default App;
