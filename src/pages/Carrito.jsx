import React, { useState } from "react";
import '../styles/Carrito.css';
import { images } from '../assets/imagenes';
import Modal from '../components/Modal';
import { Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import MapaLocal from '../components/MapaLocal';

function Carrito({ carrito, aumentarCantidad, disminuirCantidad }) {
  const [nombre, setNombre] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [mostrarMapa, setMostrarMapa] = useState(false);

  const subtotal = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const envio = subtotal > 0 ? 2000 : 0;
  const total = subtotal + envio;

  const validarDatos = () => {
    if (!nombre.trim() || !domicilio.trim() || !codigoPostal.trim()) {
      alert("Por favor, completá todos los campos antes de continuar.");
      return false;
    }
    if (carrito.length === 0) {
      alert("Tu carrito está vacío. Agregá productos para finalizar la compra.");
      return false;
    }
    return true;
  };

  // Función para crear preferencia en Mercado Pago
  const crearPreferencia = async (carrito) => {
    try {
      const response = await axios.post('http://localhost:3001/crear-preferencia', {
        carrito: carrito
      });
      const preferenceId = response.data.preferenceId;
      return preferenceId;
    } catch (error) {
      console.error("Error al crear preferencia:", error);
      return null;
    }
  };

  return (
    <>
      <div className="Home">
        <div className="mapa-cuadro">
          <div className="mapa">
            <button className="nav-link" onClick={() => setMostrarMapa(prev => !prev)}><h2>Nuestra Ubicación</h2></button>
            {mostrarMapa && (<MapaLocal />)}
          </div>
          <div className="Cuadro-datos">
            <nav className="datos">
              <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault(); }} >
                <input className="form-control mr-sm-2" type="search" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input className="form-control mr-sm-2" type="search" placeholder="Domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
                <input className="form-control mr-sm-2" type="search" placeholder="Codigo postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
              </form>
            </nav>
          </div>
        </div>
        <h2>Tu carrito</h2>
        <div className="Productos-total">
          <div className="Cuadro-productos">
            <div>
              <div>
                {carrito.length === 0 ? (
                  <h5>Tu carrito está vacío</h5>
                ) : (
                  <div className="producto-carrito">
                    {carrito.map((item, index) => (
                      <div key={index}>
                        <img src={item.imagen} alt={item.nombre} style={{ width: '50%', height: 'auto' }} />
                        {item.nombre}  ${item.precio * item.cantidad}
                        <div className="botones-carrito">
                          <img src={images.Menos} alt="menos" onClick={() => disminuirCantidad(item.id)} />
                          <img src={images.Mas} alt="mas" onClick={() => aumentarCantidad(item.id)} />
                          <span>{item.cantidad}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="Cuadro-total">
            <h4>Subtotal: ${subtotal}</h4>
            <h4>Costo de envío: ${envio}</h4>
            <h4>Total: ${total}</h4>
          </div>
        </div>
        <button
          className="btn btn-dark boton-finalizar"
          onClick={() => {
            if (carrito.length === 0) {
              alert("El carrito está vacío. Agregá productos antes de finalizar la compra.");
            } else if (!nombre || !domicilio || !codigoPostal) {
              alert("Por favor, completá tus datos antes de pagar.");
            } else {
              setShowModal(true);
            }
          }}
        >
          Finalizar compra
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} carrito={carrito} />
    </>
  );
}

export default Carrito;

