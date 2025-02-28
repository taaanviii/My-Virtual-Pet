import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Pet from './Pages/Pet';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet' element={<Pet />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

