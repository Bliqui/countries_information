import { Marker, Popup, TileLayer, useMap } from "react-leaflet";

export const MapElements = ({ mapView }: { mapView: [number, number] }) => {
  const map = useMap();
  map.setView(mapView);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={mapView}>
        <Popup>A pretty CSS3 popup, Easily customizable.</Popup>
      </Marker>
    </>
  );
};
