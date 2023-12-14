import React from "react";
import QRCode from "qrcode.react";
import { Container } from 'react-bootstrap';
import './App.css';

function QRCodeOne() {
  // Your data that you want to encode in the QR Code
  const data =
    "https://simonrvincent.github.io/dbc-card-app/?name=Simon+Vincent&position=Software+Developer&email=simon.vincent1%40ucalgary.ca&phone=403-123-4567&linkedIn=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsimonrvincent&github=https%3A%2F%2Fgithub.com%2FSimonRVincent&twitter=https%3A%2F%2Ftwitter.com%2Freactjs&aboutTitle=What+I+Do&aboutBody=I+am+a+passionate+Software+Developer+with+a+keen+interest+in+frontend+technologies.+I+currently+work+at+Wonder+Corp%2C+where+I+contribute+to+building+innovative+web+applications+that+simplify+and+enhance+the+user+experience.";

  // Example of how to use the QRCode component
  // http://localhost:3000/?name=John+Doe&position=Developer&email=john.doe%40example.com&phone=1234567890&linkedIn=https%3A%2F%2Flinkedin.com%2Fin%2Fjohndoe&github=https%3A%2F%2Fgithub.com%2Fjohndoe&twitter=https%3A%2F%2Ftwitter.com%2Fjohndoe&aboutTitle=About+John&aboutBody=John+is+a+skilled+developer...

    return (
      <Container className="d-flex justify-content-center align-items-center">
        <QRCode className="qr-canvas" value={data} size={256} />
      </Container>
    );
  }

export default QRCodeOne;
