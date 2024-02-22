// import './App.css';
import './App.scss';
import Data from './components/Data';
import Header from './components/Header';
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="App">
        <Header />
        {/* <Data /> */}
        <Tasks />
    </div>
  );
}

export default App;
