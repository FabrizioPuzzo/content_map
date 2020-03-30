import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactMapGl, {Marker, Popup } from "react-map-gl";
import * as countryData from "./data/data_country.json";
import InfoBox from './comp/InfoBox.js'

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 47.39702979064995,
    longitude: 14.757375929014756,
    width: "100vw",
    height: "100vh",
    zoom: 4.387912989320032
  });

  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape"){
        setSelectedCountry(null)
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, []);

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZmFieDIwMjAiLCJhIjoiY2s4NHJvYW8yMDZqMzNlcW91ZTNhZDM1eCJ9.PWT7MfoCKaLa-kdRjhliqg"
        mapStyle="mapbox://styles/fabx2020/ck892dqrt2hr91jq5d0okykz6"
        onViewportChange={viewport => {
          setViewport(viewport);
        }
      }
      >
        {countryData.features.map(country => (
          <Marker 
            key={country.properties.ID} 
            latitude={country.geometry.coordinates[1]}
            longitude={country.geometry.coordinates[0]}
          > 
            <button 
              className="marker-btn" 
              onClick={(e) => { selectedCountry != null ? setSelectedCountry(null) :
                //e.preventDefault();
                setSelectedCountry(country);
            }}
            >
              <img src="info.svg" alt="info icon"/>
            </button>
          </Marker>
        ))}

        {selectedCountry ? (
          <Popup 
            latitude={selectedCountry.geometry.coordinates[1]}
            longitude={selectedCountry.geometry.coordinates[0]}
            closeButton={true}
            closeOnClick={false}
            closeOnMove={false}
            onClose={() => {
              setSelectedCountry(null);
            }}>
            <div>
                {<InfoBox data={selectedCountry.properties}/>}
            </div>
          </Popup>
        ) : null }
      </ReactMapGl>
    </div>
  );
}