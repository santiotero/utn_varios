import React from 'react';


class Form extends React.Component {

  render (){

    return(
    <div className="Form">
        
        <form action="#">
            <div className="contenedor_datos">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre"/>
            </div>
            <div className="contenedor_datos">
                <label for="apellido">Apellido</label>
                <input type="text" id="apellido"/>
            </div>
            <div className="contenedor_datos">
                <label for="email">Email</label>
                <input type="text" id="email"/>
            </div>            
            <div className="contenedor_datos">
                <label for="telefono">Telefono</label>
                <input type="text" id="telefono"/>
            </div>
            <div className="contenedor_datos">
                <label for="password">Password</label>
                <input type="text" id="password"/>
            </div>
            <div className="contenedor_datos">
                <label for="password_conf">Confirmar Password</label>
                <input type="text" id="password_conf"/>
            </div>
            <br/>
            <div className="contenedor_datos">        
                <input type="submit" id="enviar" value="Enviar"/>
            </div>

        </form>        
         
    </div>
    );
  }

}

export default Form;
