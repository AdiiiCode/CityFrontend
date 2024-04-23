import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Polygon,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PakistanData } from "./pakistan";
import axios from "axios";
import ImageGallery from "./ImageGallery ";
const MapSection = ({ reference }) => {
  const [ispopup, setIspopup] = useState();
  const [popupcoardinates, setpopupcoardinate] = useState();
  const [cityname, setcityname] = useState("");
  const [images, setImages] = useState([]);

  const mapRef = useRef(null); // Create a ref for the MapContainer
  // const showInfo = (cityName) => {
  //   console.log("Click event");
  //   useEffect(() => {
  //     // Fetch images from the backend when the component mounts
  //     const fetchImages = async () => {
  //       try {
  //         const response = await fetch("http://localhost:5000/get-image");
  //         const data = await response.json();
  //         if (data.status === "ok") {
  //           setImages(data.data); // Update images state with the fetched data
  //         } else {
  //           console.log("Error fetching images");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching images:", error);
  //       }
  //     };

  //     fetchImages();
  //   }, [cityname]);
  // };

  const showInfo = async (cityName) => {
    console.log("Click event");
    setcityname(cityName);
    try {
      const response = await fetch("https://city-frontend-lovat.vercel.app:5000/get-image");
      const data = await response.json();
      if (data.status === "ok") {
        setImages(data.data);
      } else {
        console.log("Error fetching images");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleClick = (cityName) => {
    setcityname(cityName);
    if (cityName == cityname) {
      setIspopup(!ispopup);
    } else {
      setIspopup(true);
    }
    axios
      .post("http://localhost:5000/CitnameSelected", {
        CitySelected: cityName,
      })
      .then((res) => {});
  };

  const customIcon = L.icon({
    iconUrl: "/marker.png", // Path to the marker icon image
    iconSize: [25, 25], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which corresponds to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  });

  // Function to scroll to the map reference
  const scrollToRef = () => {
    if (mapRef.current) {
      window.scrollTo(3, mapRef.current.offsetTop);
    }
  };
  const markerCoords = [
    { lat: 25.054891524857013, lng: 67.23402767891804, name: "karachi" }, //karachi
    { lat: 33.71312581857859, lng: 73.08079984967797, name: "islamabad" }, //islamabad
    { lat: 34.010101158062675, lng: 71.56622144997266, name: "peshawar" }, //peshawar
    { lat: 27.721703068798153, lng: 68.82730341021079, name: "sukkur" }, //sukkur
    { lat: 32.062186567282126, lng: 72.68879796333225, name: "sarghoda" }, //sarghoda
    { lat: 32.934763592922835, lng: 73.71883807703367, name: "jhelum" }, //jhelum
    { lat: 30.202657961021707, lng: 66.99126182757384, name: "quetta" }, //quetta
  ];

  useEffect(() => {
    scrollToRef(); // Scroll to the map reference on component mount
  }, []);

  return (
    <div ref={reference} className="grid grid-cols-4 m-28 space-x-10">
      <div className="col-span-3" ref={mapRef}>
        {" "}
        {/* Assign ref to the map container */}
        <MapContainer
          center={[30.770674149002062, 71.2367899785951]} //29.626974919783127, 69.18621467644206
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          zoomControl={false}
          zoom={6}
          style={{
            height: "700px",
            width: "100%",
            marginInline: "auto",
            zIndex: 20,
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {PakistanData.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);
            return (
              <Polygon
                pathOptions={{
                  fillColor: "#008000",
                  fillOpacity: "5",
                  weight: 2,
                  opacity: 1,
                  dashArray: 3,
                  outlinecolor: "black",
                }}
                positions={coordinates}
              />
            );
          })}
          {markerCoords.map((coord, index) => (
            <Marker
              key={index}
              position={[coord.lat, coord.lng]}
              icon={customIcon}
            >
              <Popup>
                A marker at
                <div
                  onMouseOver={() => {
                    document.querySelector(
                      ".leaflet-popup-content-wrapper"
                    ).style.cursor = "pointer";
                  }}
                  onMouseLeave={() => {
                    document.querySelector(
                      ".leaflet-popup-content-wrapper"
                    ).style.cursor = "auto";
                  }}
                  onClick={() => handleClick(coord.name)}
                >
                  {coord.name}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="col-span-1 border border-1 border-blue-400 text-center py-20">
        {ispopup && (
          <div>
            <p className="text-4xl font-bold text-white">Hello there</p>
            <p className="text-white">
              See more information about {cityname}{" "}
              <div
                className="text-blue-500 cursor-pointer"
                onClick={() => showInfo(cityname)}
              >
                See More
              </div>
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center">
        {images.length > 0 && (
          <div className="flex mt-10">
            {images.map((image) => (
              <img
                key={image._id}
                src={`http://localhost:5000/images/${image.im}`}
                alt="Uploaded"
                style={{ height: "250px", margin: "10px" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapSection;
