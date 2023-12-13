// App.js
import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import QRCodeOne from './QRCodeOne';
import QRCodeTwo from './QRCodeTwo';
import './App.css';
// import AppLogo from './path-to-logo.png'; // Uncomment and use your logo here

function App() {
  const [activeQRCode, setActiveQRCode] = useState(null);

  return (
    <Container fluid className="d-flex flex-column" style={{ height: '100vh' }}>
      <Row className="justify-content-center" style={{ backgroundColor: '#007bff', height: 'auto' }}> {/* Blue top bar */}
        {/* <img src={AppLogo} height="50" alt="App Logo" /> */}
      </Row>

      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        {!activeQRCode ? (
          <div className="text-center">
            <Button className="m-2" onClick={() => setActiveQRCode(1)}>Button 1</Button>
            <Button className="m-2" onClick={() => setActiveQRCode(2)}>Button 2</Button>
          </div>
        ) : (
          activeQRCode === 1 ? <QRCodeOne /> : <QRCodeTwo />
        )}
      </div>

    </Container>
  );
}

export default App;
