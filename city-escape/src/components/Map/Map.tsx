import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
import styles from "./Map.module.css";
import L from "leaflet";
import LocationIcon from "../../assets/location.png";

const Map = () => {
  const navigate = useNavigate();

  const customIcon = L.icon({
    iconUrl: LocationIcon,
    iconSize: [70, 70], // Size of the icon
    iconAnchor: [12, 41], // Anchor point of the icon
    popupAnchor: [1, -34], // Position of the popup relative to the icon
  });

  const handleProceed = () => {
    const passcode = prompt("Enter the passcode to proceed:");
    if (passcode === "1234") {
      navigate("/riddle");
    } else {
      alert("Incorrect passcode. Try again!");
    }
  };

  return (
    <MapContainer
      center={[47.4894285791889, 19.059757146314627]}
      zoom={13}
      scrollWheelZoom={true}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.carto.com/">CartoDB</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <Marker
        position={[47.4894285791889, 19.059757146314627]}
        icon={customIcon}
      >
        <Popup>
          <h3>City Wall Budapest - Bástya Street</h3>
          <img
            src="https://pestbuda.hu/uploads/media/news/0001/03/thumb_2956_news_big.jpg"
            alt="City Wall Budapest"
            style={imageStyle}
          />
          <p>
            Archaeologists have carried out excavations in Bástya Street in the
            Pest city center, where part of Pest's city wall once stood. The dig
            led to finds from the 13th century to the Ottoman Period, including
            the remains of houses, kilns, and ditches.
          </p>
          <p>
            <em>
              <strong>
                Please scan the QR code at the location to reveal the passcode
                and proceed to the riddle.
              </strong>
            </em>
          </p>
          <Button onClick={handleProceed}>Proceed to the Riddle</Button>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

const imageStyle: React.CSSProperties = {
  width: "100%", // Make the image responsive
  height: "auto",
  borderRadius: "8px",
  marginBottom: "10px",
};
