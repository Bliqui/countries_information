import { Marker, Popup, TileLayer, useMap } from "react-leaflet";

export const MapElements = () => {
  const map = useMap();
  map.setView([1, 1]);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>A pretty CSS3 popup, Easily customizable.</Popup>
      </Marker>
    </>
  );
};
