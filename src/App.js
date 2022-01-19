import logo from './logo.svg';
import './App.css';
import  AuntheticationArea from "./auntheticationArea";
import {Routes, Route} from "react-router-dom";

import Calculator  from './components/Calculator';

function App() {
  return (
    <div className="App">
          <AuntheticationArea />

          <Routes>
              <Route path="/" element={<Calculator/>} />
          </Routes>
    </div> 
  );
}

export default App;
