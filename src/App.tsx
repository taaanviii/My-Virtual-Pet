import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pet from './Pages/Pet';
import './App.css';
import Navbar from './Components/Navbar';
import PetChoice from './Pages/PetChoice';

function App() {
  return (
    <div className="App" >
      {/* CRITICAL FIX: Add the 'basename' prop to tell the router where the app starts.
        This must be the exact name of your GitHub repository.
      */}
      <Router basename="/My-Virtual-Pet"> 
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