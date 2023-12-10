import React from 'react';
import { QRCode } from 'qrcode.react';

function MyQRCodeComponent() {
  // Your data that you want to encode in the QR Code
  const data = 'https://example.com/my-profile';

  return (
    <div>
      <QRCode value={data} size={128} level={'H'} />
    </div>
  );
}

export default MyQRCodeComponent;
