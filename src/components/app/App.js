
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homepage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
