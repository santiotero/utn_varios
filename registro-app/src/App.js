import React from 'react';
import './estilo.css';
import Cabecera from './Cabecera';
import Datos from './Datos';
import Foot from './Foot';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Datos />
      <Foot />      
    </div>
  );
}

export default App;
