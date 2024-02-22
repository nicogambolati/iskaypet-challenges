// import './App.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Data from './components/Data';
import Tasks from "./components/Tasks";
import Returns from "./components/Returns";
import Communications from "./components/Communications";
import BestFriends from "./components/BestFriends";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/datos" element={<Data />} />
          <Route path="/tareas" element={<Tasks />} />
          <Route path="/devoluciones" element={<Returns />} />
          <Route path="/comunicaciones" element={<Communications />} />
          <Route path="/mejores-amigos" element={<BestFriends />} />
       </Routes>
    </div>
  );
}

export default App;

