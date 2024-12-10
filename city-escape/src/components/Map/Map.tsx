import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure you have this import

const Map = () => {
  const navigate = useNavigate();

  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setGeojsonData(data))
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  const tileStyleURLs = {
    light_all: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    dark_all: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    voyager:
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    local: "/tiles/{z}/{x}/{y}.png",
  };

  const [mapStyle, setMapStyle] =
    useState<keyof typeof tileStyleURLs>("voyager");

  const handleStyleChange = (style: keyof typeof tileStyleURLs) => {
    setMapStyle(style);
  };

  interface Passcodes {
    [key: number]: string;
  }

  const handleProceed = (riddleId: number) => {
    const passcode = prompt("Enter the passcode to proceed:");
    const passcodes: Passcodes = {
      1: "1234",
      2: "5678",
      3: "abcd",
    };

    if (passcode === passcodes[riddleId]) {
      navigate(`/riddle/${riddleId}`);
    } else {
      alert("Incorrect passcode. Try again!");
    }
  };

  const numberIcon = (number: number) =>
    L.divIcon({
      className: "",
      html: `<div class="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold">${number}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

  const createPopupContent = (
    title: string,
    imgSrc: string,
    description: string,
    coords: [number, number],
    handleProceed: () => void
  ) => (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <img src={imgSrc} alt={title} className="w-full h-auto rounded-lg mb-2" />
      <p>{description}</p>
      <p>
        <em>
          <strong>
            Please scan the QR code at this location to reveal the passcode and
            proceed to the riddle.
          </strong>
        </em>
      </p>
      <div className="flex gap-2 justify-center">
        <Button
          onClick={handleProceed}
          className="bg-white text-black border border-gray-300 shadow px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-150"
        >
          Proceed
        </Button>
        <Button
          onClick={() => {
            const [lat, lng] = coords;
            const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
            window.open(mapsUrl, "_blank");
          }}
          className="bg-white text-black border border-gray-300 shadow px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-150"
        >
          Navigate
        </Button>
      </div>
    </div>
  );

  const popupContent1 = createPopupContent(
    "Kálvin Square (Former Gate)",
    "https://welovebudapest.com/i/9f/kalvin4.exact1980w.jpg",
    "Kálvin tér, once situated near the medieval city wall of Pest, reveals layers of history beneath today’s modern square. Archaeological investigations have uncovered remnants of these defensive structures, offering a glimpse into how this bustling central area was once fortified against threats. Standing here connects you to centuries of Budapest’s evolving story, from fortified frontier to vibrant urban hub.",
    [47.48934006387308, 19.061237053399193],
    () => handleProceed(1) // Pass riddleId 1
  );

  const popupContent2 = createPopupContent(
    "Playground at Bástya Street",
    "https://pestbuda.hu/uploads/media/news/0001/05/thumb_4140_news_big.jpg",
    "The playground at Bástya utca intertwines everyday leisure with deep-rooted history. Here, where children now play, traces of Pest’s medieval city wall once stood as guardians of the town. This modern urban spot invites you to reflect on centuries past, as the laughter of today’s families echoes amid stones that once fortified the city’s heart.",
    [47.48940736567986, 19.05978125525111],
    () => handleProceed(2) // Pass riddleId 2
  );

  const popupContent3 = createPopupContent(
    "Residential Building on the Old Wall",
    "https://welovebudapest.com/i/8e/varosfal_korosi-tamas_20160330.exact1980w.jpg",
    "This residential building stands atop what once formed part of Pest’s medieval city wall. Beneath its foundations lie centuries of layered defense, now woven quietly into everyday living spaces. Within these modern walls, echoes of an older city linger, bridging the past and present in the heart of Budapest.",
    [47.49147045884514, 19.060478228267108],
    () => handleProceed(3) // Pass riddleId 3
  );

  return (
    <div className="relative w-full h-screen">
      {/* Fixed Buttons Container */}
      <div className="fixed z-[9999] top-1/2 left-2 -translate-y-1/2 bg-white rounded p-2 flex flex-col gap-2 border border-gray shadow-lg">
        <button
          onClick={() => handleStyleChange("light_all")}
          className="p-1 cursor-pointer border-none rounded text-sm hover:bg-gray-200"
        >
          Light
        </button>
        <hr className="my-1 border-t border-gray-300" />
        <button
          onClick={() => handleStyleChange("dark_all")}
          className="p-1 cursor-pointer border-none rounded text-sm hover:bg-gray-200"
        >
          Dark
        </button>
        <hr className="my-1 border-t border-gray-300" />
        <button
          onClick={() => handleStyleChange("voyager")}
          className="p-1 cursor-pointer border-none rounded text-sm hover:bg-gray-200"
        >
          Voyager
        </button>
        <hr className="my-1 border-t border-gray-300" />
        <button
          onClick={() => handleStyleChange("local")}
          className="p-1 cursor-pointer border-none rounded text-sm hover:bg-gray-200"
        >
          Local Tiles
        </button>
        <hr className="my-1 border-t border-gray-300" />
        <button
          onClick={() => navigate("/")}
          className="p-1 cursor-pointer border-none rounded text-sm hover:bg-gray-200"
        >
          Exit
        </button>
      </div>

      <MapContainer
        center={[47.4894285791889, 19.059757146314627]}
        zoom={13}
        minZoom={12} // Prevent zooming out too far
        maxZoom={17} // Adjust based on your tiles
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* Dynamically Render the Base Tile Layer */}
        {mapStyle !== "local" ? (
          <TileLayer
            url={tileStyleURLs[mapStyle]}
            attribution='&copy; <a href="https://www.carto.com/">CartoDB</a>'
          />
        ) : (
          <>
            {/* Light Base Map for Local Style */}
            <TileLayer
              url={tileStyleURLs.voyager}
              attribution='&copy; <a href="https://www.carto.com/">CartoDB</a>'
            />
            {/* Local Tile Overlay */}
            <TileLayer
              url={tileStyleURLs.local}
              noWrap={true} // Prevent wrapping of tiles
              opacity={0.7} // Set transparency for overlay
            />
          </>
        )}
        {/* Marker 1 */}
        <Marker
          position={[47.48934006387308, 19.061237053399193]}
          icon={numberIcon(1)}
        >
          <Popup>{popupContent1}</Popup>
        </Marker>

        {/* Marker 2 */}
        <Marker
          position={[47.48940736567986, 19.05978125525111]}
          icon={numberIcon(2)}
        >
          <Popup>{popupContent2}</Popup>
        </Marker>

        {/* Marker 3 */}
        <Marker
          position={[47.49147045884514, 19.060478228267108]}
          icon={numberIcon(3)}
        >
          <Popup>{popupContent3}</Popup>
        </Marker>

        {geojsonData && <GeoJSON data={geojsonData} />}
      </MapContainer>
    </div>
  );
};

export default Map;
