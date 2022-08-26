import { Box } from "@chakra-ui/react";
// import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { MapElements } from "./MapElements/MapElements";

export const Map = ({ mapView }: { mapView: [number, number] }) => {
  return (
    <Box id="map" mt="30px" h={{ base: "200px", md: "300px" }} w="100%">
      <MapContainer
        center={mapView}
        zoom={5}
        style={{ height: "100%" }}
        scrollWheelZoom={false}
      >
        <MapElements mapView={mapView} />
      </MapContainer>
    </Box>
  );
};
