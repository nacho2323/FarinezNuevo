
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import '../styles/Footer.css';

function Footer () {

  const [mostrarRedes, setMostrarRedes] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">

        <img src={Logo} width={150} height={70}/>
        
        <div>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <button className="btn btn-transparent" onClick={() => setMostrarRedes(true)}>Redes Sociales</button>
            </li>

          </ul>

          { mostrarRedes && (
            <div className = "cuadroRedes">
              <div className = "cuadroRedes-info">
                <div className = "cuadroRedes-texto">
                    <p>Encontranos en nuestras redes:</p>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                </div>

                
                <button className="btn btn-dark" onClick={() => setMostrarRedes(false)}>Cerrar</button>
              </div>
            </div>
            
          )
            
          }

        </div>
      </div>
    </nav>
  );
};

export default Footer;