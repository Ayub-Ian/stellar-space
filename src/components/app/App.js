
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homepage/HomePage';
import Map from '../AsteroidsMap/map';

import './App.css';
import NearEarthObjects from '../neo/NearEarthObjects';
import MarsRoversPhotos from '../mars-rovers-photos/MarsRoversPhotos';
import AboutMars from '../weather/AboutMars';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/map' element={<Map/>}/>
        <Route path='/near-earth-objects' element={<NearEarthObjects/>}/>
        <Route path='/mars-rovers-photos' element={<MarsRoversPhotos />}/>
        <Route path='/mars-weather' element={<AboutMars />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
