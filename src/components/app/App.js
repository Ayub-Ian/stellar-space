
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homepage/HomePage';
import Map from '../AsteroidsMap/map';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/map' element={<Map/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
