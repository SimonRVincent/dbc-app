// App.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QRCodeOne from './QRCodeOne';
import QRCodeTwo from './QRCodeTwo';

function App() {
  const [activeQRCode, setActiveQRCode] = useState(null);

  return (
    <div className="app-container">
      {!activeQRCode ? (
        <div>
          <Button onClick={() => setActiveQRCode(1)}>Button 1</Button>
          <Button onClick={() => setActiveQRCode(2)}>Button 2</Button>
        </div>
      ) : (
        activeQRCode === 1 ? <QRCodeOne /> : <QRCodeTwo />
      )}
    </div>
  );
}

export default App;
