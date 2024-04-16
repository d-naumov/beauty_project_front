import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <MapContainer 
          center={[52.45222390500246, 13.629550956087783]} 
          zoom={5}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CircleMarker center={[52.45222390500246, 13.629550956087783]} radius={10} color="transparent" fillColor="green" opacity={0.5}>
            <Popup>
              <h2>Hello World</h2>
            </Popup>
          </CircleMarker>
        </MapContainer>
      </div>
    </div>
  );
}

