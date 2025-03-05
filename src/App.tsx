import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Pet from './Pages/Pet';
import './App.css';
import Navbar from './Components/Navbar';
import PetChoice from './Pages/PetChoice';

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:petType' element={<Pet />} />
            <Route path='/petChoice' element={< PetChoice/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

