import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Pet from './Pet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet' element={<Pet />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;