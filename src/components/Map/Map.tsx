import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import CustomMarker from "/assets/images/icon-location.svg";

import "./Map.scss";

export default function Map() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView([41.481312, -71.31041], 14);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      map.zoomControl.remove();
      const zoomControl = L.control.zoom({ position: "bottomleft" });
      zoomControl.addTo(map);

      const customIcon = L.icon({
        iconUrl: CustomMarker,
      });

      L.marker([41.481312, -71.31041], { icon: customIcon }).addTo(map);

      mapRef.current = map;
    }

    const resizeMap = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };

    window.addEventListener("resize", resizeMap);

    return () => {
      window.removeEventListener("resize", resizeMap);
    };
  }, []);

  return <div id="map"></div>;
}
