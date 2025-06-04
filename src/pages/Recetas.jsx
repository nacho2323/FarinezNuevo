import React, { useState } from "react";
import {recetas} from '../components/datosRecetas';
import { images } from '../assets/imagenes';
import { Link } from "react-router-dom";
import '../styles/Productos.css';
import '../styles/Recetas.css';

function Recetas({agregarAlCarrito}) {


  const [busqueda, setBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const recetasPorPagina = 2;

  const recetasFiltradas = recetas.filter(receta =>
    receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalPaginas = Math.ceil(recetasFiltradas.length / recetasPorPagina);
  const inicio = (paginaActual - 1) * recetasPorPagina;
  const fin = inicio + recetasPorPagina;
  const recetasPagina = recetasFiltradas.slice(inicio, fin);

  return (
    <div className="Home">
      <div className="ImagenInicio" style={{ backgroundImage: `url(${images.FondoRecetas})` }}>
        <h1>¿Qué receta vas a hacer hoy?</h1>

        <nav className="Busqueda">
          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault(); }} >
              
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
            
            <button className="btn btn-dark" type="submit">Buscar</button>
          
          </form>
        </nav>
      </div>

      <div className="Grupo-Cards-Recetas">
        {
          recetasPagina.map(receta => (

            <div key={receta.id} className="card card-Receta">

              <img src={receta.imagen} className="card-img-top" alt={receta.nombre} />
              <div className="card-body">
                
                  <h5 className="card-titulo">{receta.nombre}</h5>
                
                <Link to={`/Recetas/${receta.id}`} ><button className="btn btn-dark">Preparación</button></Link>
                <button className="btn btn-primary" onClick={()=> agregarAlCarrito(receta.listaIngredientes)}>Agregar ingredientes al carrito</button>
             
              </div>

            </div>
          ))
        }
      </div>

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
  );
}

export default Recetas;

