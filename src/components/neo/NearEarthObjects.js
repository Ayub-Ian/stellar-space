import React, { useEffect, useState } from "react";
import "./NEO.css";
import NeoList from "./NeoList";
import NeoSearch from "./NeoSearch";

function NearEarthObjects() {
  const api_url =
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=fSMOajnpgriQhDldxqKguMGni5blka3Cfy5CUGY1";
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((objects) => setObjects(objects.near_earth_objects));
  }, []);

  return (
    <div className="neo">
      <div className="neo-wrapper container">
        <h3>NEAR EARTH OBJECTS</h3>
        <div className="filters">
          <NeoSearch />
        </div>
    
        <NeoList objects={objects} />
      </div>
    </div>
  );
}

export default NearEarthObjects;
