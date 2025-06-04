import { useParams } from "react-router-dom";
import {recetas} from '../components/datosRecetas';
import '../styles/DetalleReceta.css'

function DetalleReceta(){
    
  const { id } = useParams(); // obtiene el ID de la URL
  const receta = recetas.find(p => p.id === parseInt(id));

 if (!receta) {
    return <h2>Receta no encontrada</h2>;
  }

  return(
    <>
      <div className="Home">
          <h2 className="Titulo-receta">{receta.nombre}</h2>

          <div className="Receta">
              <div>
              <img src={receta.imagen} alt={receta.nombre}/>
              <h2>Ingredientes</h2>
                  <ol className="ingredientes">
                    {receta.ingredientes.map((ingrediente, index) => ( <li key={index}>{ingrediente}</li> ))}
                  </ol>
              </div>
                
              <div>
                  <ol className="pasos">
                    {receta.pasos.map((paso, index) => ( <li key={index}>{paso}</li> ))}
                  </ol>
              </div>
          </div>
      </div>
    </>
    
  )
}

export default DetalleReceta;