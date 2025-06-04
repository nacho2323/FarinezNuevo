import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Solución para íconos que no se cargan correctamente por defecto
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapaLocal() {
  const posicionLocal = [-32.889799517794074, -68.83636568814327]; // Coordenadas de ejemplo: Obelisco

  return (
    <div style={{ height: '400px', width: '50%', margin:'2% 5%'}}>
      <MapContainer center={posicionLocal} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={posicionLocal}>
          <Popup>Estamos acá 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
