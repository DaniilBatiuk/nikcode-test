"use client";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import styles from "./Location.module.scss";
import placeholder from "@/assets/images/placeholder.png";

type LocationProp = {
  city: ICity;
};

const customIcon = new Icon({
  iconUrl: placeholder.src,
  iconSize: [38, 38],
});

const Location: React.FC<LocationProp> = ({ city }: LocationProp) => {
  return (
    <div className={styles.location}>
      <MapContainer center={[+city.latitude, +city.longitude]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[+city.latitude, +city.longitude]} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
