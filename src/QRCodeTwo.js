import React from "react";
import QRCode from "qrcode.react";
import { Container } from 'react-bootstrap';

function QRCodeTwo() {
  // Your data that you want to encode in the QR Code
  const data =
    "https://simonrvincent.github.io/dbc-card-app/?name=Katie+Knauss&position=Network+Administrator&email=katherine.knauss%40ucalgary.ca&phone=403-998-1234&linkedIn=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkatieknauss19%2F&github=https%3A%2F%2Fgithub.com%2FKatie500&twitter=https%3A%2F%2Ftwitter.com%2Freactjs&aboutTitle=Bio&aboutBody=I+am+an+experienced+Network+Administrator+known+for+my+dedication+to+innovative+network+solutions+and+security.+I+am+currently+working+at+Wonder+Corp%2C+where+I+specialize+in+data+security+and+network+architecture.";

  // Example of how to use the QRCode component
  // http://localhost:3000/?name=John+Doe&position=Developer&email=john.doe%40example.com&phone=1234567890&linkedIn=https%3A%2F%2Flinkedin.com%2Fin%2Fjohndoe&github=https%3A%2F%2Fgithub.com%2Fjohndoe&twitter=https%3A%2F%2Ftwitter.com%2Fjohndoe&aboutTitle=About+John&aboutBody=John+is+a+skilled+developer...

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <QRCode className="qr-canvas" value={data} size={256} />
    </Container>
  );
}

export default QRCodeTwo;
