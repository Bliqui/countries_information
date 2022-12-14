// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { server } from "./mocks/browser";

import "@testing-library/jest-dom";

jest.mock("react-leaflet", () => ({
  MapContainer: () => null,
  Marker: () => null,
  Popup: () => null,
  TileLayer: () => null,
}));

if (process.env.NODE_ENV === "development") {
  server.listen();
}
