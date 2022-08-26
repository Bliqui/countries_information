import { Box } from "@chakra-ui/react";
// import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { MapElements } from "./MapElements/MapElements";

export const Map = ({ mapView }: { mapView: [number, number] }) => {
  return (
    <Box
      boxShadow="0px 0px 8px 0px rgba(66, 68, 90, .6)"
      id="map"
      mt="30px"
      h={{ base: "200px", md: "300px" }}
      w="100%"
    >
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
