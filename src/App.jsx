import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Recetas from './pages/Recetas';
import Carrito from './pages/Carrito';
import DetalleReceta from './pages/DetalleReceta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

 const agregarAlCarrito = (productos) => {
  productos.forEach(producto => {
    setCarrito(prevCarrito => {
      const existente = prevCarrito.find(item => item.id === producto.id);

      if (existente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  });
};


  const aumentarCantidad = (id) => {
      const actualizado = carrito.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(actualizado);
  };


  const disminuirCantidad = (id) => {
      const actualizado = carrito
        .map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0); // Elimina si cantidad queda en 0

      setCarrito(actualizado);
  };

  return (
    <Router>
      <Navbar carrito={carrito} setCarrito={setCarrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad}/>
      
      <Routes>
        <Route path='/' element={<Home agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/Productos' element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/Recetas' element={<Recetas agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path='/Carrito' element={<Carrito carrito={carrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad}/>} />
        <Route path="/Recetas/:id" element={<DetalleReceta  />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
