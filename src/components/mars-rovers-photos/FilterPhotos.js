import React from 'react'

function FilterPhotos() {
  return (
    <div className="filter-section">
          
    <form id="form">
            
              <div class="date-selection">
                  <input type="date" name="date" id="date" max="today"/>
              </div>
              <div class="pov-selection">
                  <select name="pov-select-curiosity" id="pov-select-curiosity">
                      <option value="all">Select the POV</option>
                      <option value="all">All the cameras</option>
                      <option value="fhaz">Front Hazard Avoidance Camera</option>
                      <option value="rhaz">Rear Hazard Avoidance Camera</option>
                      <option value="mast">Mast Camera</option>
                      <option value="chemcam">Chemistry and Camera Complex</option>
                      <option value="mahli">Mars Hand Lens Imager</option>
                      <option value="mardi">Mars Descent Imager</option>
                      <option value="navcam">Navigation Camera</option>
                      <option value="pancam">Panoramic Camera</option>
                  </select>
                
              </div>
              <div class="find-button" id="btn-submit">
                  <img src={require('../../assets/lupa.png')} class="find-img"/>
                  <input type="submit" value="search"></input>
              </div>
          </form>
    
  </div>
  )
}

export default FilterPhotos