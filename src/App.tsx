import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pet from './Pages/Pet';
import './App.css';
import PetChoice from './Pages/PetChoice';

function App() {
  return (
    <div className="App" >
      <Router>
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

