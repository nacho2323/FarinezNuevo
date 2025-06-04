import express from 'express';
import cors from 'cors';
import mercadopago from 'mercadopago';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Configura tu token de acceso (usá el de prueba si estás en modo test)
mercadopago.configure({
  access_token: 'TEST-7590277369621914-052921-f81d19a6f60b2cbe21aba8b14cbb58bd-474770107', // Reemplazá con tu token de prueba real
});

// Ruta para crear la preferencia de pago
app.post('/crear-preferencia', async (req, res) => {
  try {
    const carrito = req.body.carrito;

    const items = carrito.map(item => ({
      title: item.nombre,
      unit_price: item.precio,
      quantity: item.cantidad,
      currency_id: "ARS"
    }));

    const preferencia = {
      items,
    };

    const respuesta = await mercadopago.preferences.create(preferencia);
    res.json({ preferenceId: respuesta.body.id });

  } catch (error) {
    console.error('Error al crear preferencia:', error);
    res.status(500).json({ error: 'Error al crear preferencia de pago' });
  }
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
