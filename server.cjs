// Cambiar imports ES6 por require para compatibilidad con Node.js
const express = require('express');
const cors = require('cors');
const mercadopago = require('mercadopago');

const app = express();
app.use(cors());
app.use(express.json());

mercadopago.configure({
  access_token: 'TEST-7590277369621914-052921-f81d19a6f60b2cbe21aba8b14cbb58bd-474770107'
});

app.post('/crear-preferencia', async (req, res) => {
  try {
    const { carrito } = req.body;

    const items = carrito.map(item => ({
      title: item.nombre,
      quantity: item.cantidad,
      unit_price: Number(item.precio),
      currency_id: "ARS"
    }));

    const result = await mercadopago.preferences.create({ items });

    res.json({ preferenceId: result.body.id });
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    res.status(500).json({ error: 'No se pudo crear la preferencia' });
  }
});

app.listen(3001, () => {
  console.log('Servidor Mercado Pago corriendo en http://localhost:3001');
});
