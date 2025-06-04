
import React from "react";
import { images } from '../assets/imagenes';
import {productos} from '../components/productos'
import '../styles/Home.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


function Home({ agregarAlCarrito }){


    const settings = {
        dots: false,
        infinite: true,
        speed: 1540,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500 ,
        responsive: [
            {
            breakpoint: 1024, 
            settings: {
                slidesToShow: 3,
            }
            },
               
        ]
        
      };

    return (
        
        <>

        <div className="Home">
                <div className="ImagenInicio" style={{backgroundImage: `url(${images.Fondo}`}}>
                
                    <h1>Bienvenido a Farinez</h1>
                
                </div>

                <h2>Nuestros Productos </h2>
            

                <div className="slider-container">

                <Slider {...settings}>
                    {productos.map((prod) => (
                        <div key={prod.id}>
                            <div className="card">
                                <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{prod.nombre}</h5>
                                    <button className="btn btn-primary" onClick={() => agregarAlCarrito([prod])}> Agregar al carrito </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                </div>


                <div className="botonIr">
                    
              <Link to="/Productos" className="btn btn-dark"> Ver todos los productos</Link>    
                </div> 
                

                <h2>Nuestras Recetas </h2>
            

                <div className="recetas-cards">


                                <div>

                                       <Link to={`/Recetas/1`} > <div className="card">
                                        <img src={images.WaffleDulce} className="card-img-receta" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Waffles</h5>
                                        </div>
                                        
                                    </div>
                                    </Link>
                                </div>


                                <div>
                                    <Link to={`/Recetas/2`} >
                                        <div className="card">
                                        <img src={images.Pizza} className="card-img-receta" alt="..." />

                                        <div className="card-body">
                                             <h5 className="card-title">Pizzas</h5>
                                            
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div>
                                     <Link to={`/Recetas/3`} >
                                        <div className="card">
                                            <img src={images.Pan} className="card-img-receta" alt="..." />

                                            <div className="card-body">
                                                <h5 className="card-title">Panes</h5>
                                                
                                            </div>
                                         </div>
                                    </Link>
                                </div>

                                <div>
                                     <Link to={`/Recetas/4`} >
                                        <div className="card">
                                            <img src={images.Galletas} className="card-img-receta" alt="..." />

                                            <div className="card-body">
                                                <h5 className="card-title">Galletas</h5>
                                                
                                            </div>
                                        </div>
                                    </Link>
                                </div>



                </div>



                <div className="botonIr">
                    <Link to="/Recetas" className="btn btn-dark"> Ver todas las recetas</Link> 
                </div> 



                <h2>Promociones </h2>
            
            <div className="GrupoCard">
                
                <div className="card">
                    <img src={images.Diez} className="card-img-top" alt="..." />

                
                </div>


                <div className="card">
                    <img src={images.DosUno} className="card-img-top" alt="..." />

                </div>

                <div className="card">
                    <img src={images.Treinta} className="card-img-top" alt="..." />

                </div>
                
            
            </div>
        </div>
    </>
    )
}

export default Home;