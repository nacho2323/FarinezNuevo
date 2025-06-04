import { useEffect } from "react";
import "./Modal.css";

const ModalPago = ({ onClose, preferenceId }) => {
  useEffect(() => {
    const container = document.getElementById("mercado-pago-btn-container");
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute("data-preference-id", preferenceId);
    container.appendChild(script);
  }, [preferenceId]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md animate-scaleIn relative text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <h1 className="text-4xl font-bold text-orange-600 mb-4">¡Funciona Tailwind!</h1>
        <div className="text-5xl mb-3">💳</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Confirmar pago</h2>
        <p className="text-gray-600 mb-6">Haz clic en el botón para completar tu compra</p>

        <div id="mercado-pago-btn-container" className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default ModalPago;
