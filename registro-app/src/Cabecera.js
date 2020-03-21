import React from 'react';
import logo_utn from './logo_utn.png';


function Cabecera() {
  return (
    <div className="Cabecera">
        <div>
            <img src={logo_utn} className="Cabecera-logo" alt="UTN" />
        </div>
        <div>
            <h1>Registro UTN</h1>
        </div>        
    </div>
  );
}

export default Cabecera;