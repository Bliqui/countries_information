import { Box } from "@chakra-ui/react";
// import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { MapElements } from "./MapElements/MapElements";

export const Map = () => {
  return (
    <Box id="map" mt="30px" h={{ base: "200px", md: "300px" }} w="100%">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%" }}
        scrollWheelZoom={false}
      >
        <MapElements />
      </MapContainer>
    </Box>
  );
};
