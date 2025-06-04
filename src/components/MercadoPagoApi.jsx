import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Inicializa Mercado Pago con tu public key
initMercadoPago('TEST-91230d2b-0610-4ffa-b843-a7473c49c010');

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Botón de Pago</h1>
      <p>Haz clic en el botón para realizar el pago.</p>
      {/* Renderiza el botón de pago */}
      <div style={{ width: '300px' }}>
        <Wallet initialization={{ preferenceId: 'TEST-91230d2b-0610-4ffa-b843-a7473c49c010' }} />
      </div>
    </div>
  );
};

export default App;