import React, { useEffect, useState } from "react";
import FilterPhotos from "./FilterPhotos";
import PhotoList from "./PhotoList";
import "./RoverPhotos.css";

function MarsRoversPhotos() {

  const [photos, setPhotos] = useState([])
  useEffect(() => {
   fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-6-3&page=1&camera=fhaz&api_key=fSMOajnpgriQhDldxqKguMGni5blka3Cfy5CUGY1')
   .then(res => res.json())
   .then(photos => setPhotos(photos.photos))
  }, [])
  

  return (
    <div className="mars-photos">
      <div className="mp-wrapper container">
        <h1 className="mp-title">Mars Rovers Photos</h1>
        <p class="mp-intro">
          On this website you can find photos of rovers on Mars. It uses NASA
          Apis to show you all the details about the rovers, including their
          images. Some dates has not results so try one day before or after. Use
          the following options to filter your search.
        </p>
        <FilterPhotos />
        <PhotoList photos={photos} />
      </div>
    </div>
  );
}

export default MarsRoversPhotos;
