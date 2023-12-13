import React from "react";
import QRCode from "qrcode.react";
import { Container } from 'react-bootstrap';

function QRCodeTwo() {
  // Your data that you want to encode in the QR Code
  const data =
    "http://localhost:3000/?name=Placeholder+Name&position=Placeholder+Position&email=placeholder%40email.com&phone=1234567890&linkedIn=https%3A%2F%2Flinkedin.com%2Fin%2Fplaceholder&github=https%3A%2F%2Fgithub.com%2Fplaceholder&twitter=https%3A%2F%2Ftwitter.com%2Fplaceholder&aboutTitle=About+Placeholder&aboutBody=This+is+some+placeholder+text+about+the+person.";

  // Example of how to use the QRCode component
  // http://localhost:3000/?name=John+Doe&position=Developer&email=john.doe%40example.com&phone=1234567890&linkedIn=https%3A%2F%2Flinkedin.com%2Fin%2Fjohndoe&github=https%3A%2F%2Fgithub.com%2Fjohndoe&twitter=https%3A%2F%2Ftwitter.com%2Fjohndoe&aboutTitle=About+John&aboutBody=John+is+a+skilled+developer...

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80%' }}>
      <QRCode className="qr-canvas" value={data} size={256} />
    </Container>
  );
}

export default QRCodeTwo;
