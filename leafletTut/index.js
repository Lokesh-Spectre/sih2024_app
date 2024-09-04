// import "./styles.css";
// import "leaflet/dist/leaflet.css";
import L from "./leaflet.js";

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// add markers
let marker = L.marker([51.5, -0.08]).addTo(map);
