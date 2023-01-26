
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homepage/HomePage';
import Map from '../AsteroidsMap/map';

import './App.css';
import NearEarthObjects from '../neo/NearEarthObjects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/map' element={<Map/>}/>
        <Route path='/near-earth-objects' element={<NearEarthObjects/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
