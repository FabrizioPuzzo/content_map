import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactMapGl, {Marker, Popup } from "react-map-gl";
import * as userData from "./data/data_gp.json";
import InfoBox from './comp/InfoBox.js'

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 47.39702979064995,
    longitude: 14.757375929014756,
    width: "100vw",
    height: "100vh",
    zoom: 4.387912989320032
  });

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape"){
        setSelectedUser(null)
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
        {userData.features.map(country => (
          <Marker 
            key={country.properties.ID} 
            latitude={country.geometry.coordinates[1]}
            longitude={country.geometry.coordinates[0]}
          > 
            <button 
              className="marker-btn" 
              onClick={(e) => { selectedUser != null ? setSelectedUser(null) :
                //e.preventDefault();
                setSelectedUser(country);
            }}
            >
              <img src="info.svg" alt="info icon"/>
            </button>
          </Marker>
        ))}

        {selectedUser ? (
          <Popup 
            latitude={selectedUser.geometry.coordinates[1]}
            longitude={selectedUser.geometry.coordinates[0]}
            closeButton={true}
            closeOnClick={false}
            closeOnMove={false}
            onClose={() => {
              setSelectedUser(null);
            }}>
            <div>
                {<InfoBox data={selectedUser.properties}/>}
            </div>
          </Popup>
        ) : null }
      </ReactMapGl>
    </div>
  );
}