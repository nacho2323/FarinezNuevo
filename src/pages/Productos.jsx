import React, { useState } from "react";
import { images } from '../assets/imagenes';
import {productos} from '../components/productos'
import '../styles/Productos.css';

function Productos({ agregarAlCarrito}) {

  const [ordenAscendente, setOrdenAscendente] = useState(true); /*Ordenar por precio*/ 
  const [busqueda, setBusqueda] = useState(''); /*Buscar*/
  const [paginaActual, setPaginaActual] = useState(1); /*Paginacion*/
  const [productoActivo, setProductoActivo] = useState(null); /*Para boton descripcion*/
  

  const productosPorPagina = 4; /*Productos que se muestran por pagina*/

  const productosFiltrados = productos
    .filter(prod =>
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase())  /*Busqueda*/
    )
    .sort((a, b) => {
      return ordenAscendente ? a.precio - b.precio : b.precio - a.precio ; /*Ordenar por precio*/
    });

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productosFiltrados.slice(inicio, fin);

  return (
    <div className="Home">
      <div className="ImagenInicio" style={{ backgroundImage: `url(${images.FondoProductos})` }}>
        <h1>Conocé nuestros productos</h1>


        {/*Buscar*/}
        <nav className="Busqueda">
            <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault();}}> {/*e.preventDefault() para que al hacer enter en buscar no vaya a la primer pagina*/}
          
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" value={busqueda}  onChange={(e) => setBusqueda(e.target.value)} />

            <button className="btn btn-dark" type="submit">Buscar</button>

            </form>
        </nav>
      </div>

      {/* Ordenar*/}

      <div className="grupo-boton-cards">
        <div className="orden-precio">

          <button className="btn btn-secondary boton-ordenar" onClick={() => setOrdenAscendente(!ordenAscendente)}>
            Ordenar por precio: {ordenAscendente ? 'Menor a mayor' : 'Mayor a menor'}
          </button>

        </div>

      {/* Mostrar productos */}
        <div className="Grupo-Cards-Productos">
          {   
            productosPagina.map(prod => (   /*recorre todos los productos ya ordenados o buscados*/

              <div key={prod.id} className="card card-Producto">

                <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />

                <div className="card-body">

                  <div className="card-titulo-precio">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <h5 className="card-precio">${prod.precio}</h5>
                  </div>

                  <button className="btn btn-dark" onClick={() => setProductoActivo(prod)}>Descripción</button> 
                  <button className="btn btn-primary" onClick={() => agregarAlCarrito([prod])}>Agregar al carrito</button>
                  
                </div>
              </div>
            ))
          
          }
        </div>

      {/* Paginacion */}
        <nav>
          <ul className="pagination">

            <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setPaginaActual(p => p - 1)}>Anterior</button>
            </li>
            
            {[...Array(totalPaginas)].map((_, i) => (
              <li key={i} className={`page-item ${paginaActual === i + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setPaginaActual(i + 1)}>{i + 1}</button>
              </li>
            ))}
            
            <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setPaginaActual(p => p + 1)}>Siguiente</button>
            </li>
          
          </ul>
        </nav>
      </div>

      {/* Descripcion del producto */} {/* productoActivo && significa si no es null entonces: */}
      {productoActivo && (  
        <div className="modal-detalle">
          <div className="modal-contenido">

            <h2>{productoActivo.nombre}</h2>
            <img src={productoActivo.imagen} alt={productoActivo.nombre} style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
            
            <p><strong>Precio:</strong> ${productoActivo.precio}</p>
            <p><strong>Descripción:</strong> {productoActivo.descripcion}</p>

            <button className="btn btn-secondary" onClick={() => setProductoActivo(null)}>Cerrar</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Productos;

