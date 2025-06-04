import { useEffect, useState } from 'react';
import './Modal.css';
import axios from 'axios';

function Modal({ show, onClose, carrito }) {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    if (show) {
      axios.post('http://localhost:3001/crear-preferencia', { carrito })
        .then(res => setPreferenceId(res.data.preferenceId))
        .catch(err => console.error(err));
    }
  }, [show, carrito]);

  useEffect(() => {
    if (preferenceId && show) {
      const mpContainer = document.getElementById('mercado-pago-btn-container');
      if (mpContainer) mpContainer.innerHTML = '';
      const script = document.createElement('script');
      script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', preferenceId);
      if (mpContainer) mpContainer.appendChild(script);
    }
  }, [preferenceId, show]);

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={() => {
      console.log("Modal cerrado (fondo)");
      onClose();
    }}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={() => {
          console.log("Modal cerrado (X)");
          onClose();
        }} className="modal-close" style={{ zIndex: 2, position: 'absolute', top: 10, right: 10 }}>X</button>
        <h2>Confirmar pago</h2>
        <p>Haz clic en el botón para pagar</p>
        <div id="mercado-pago-btn-container"></div>
      </div>
    </div>
  );
}

export default Modal;
