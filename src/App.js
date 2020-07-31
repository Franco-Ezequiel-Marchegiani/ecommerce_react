import React, {Component} from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import Home from './Pages/Home';
import DetalleProducto from './Pages/DetalleProducto';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import './App.css';

class App extends Component{
  constructor(){
    super()    
  }

  render (){
    return ( /*
      Control de rutas */
      <div className="App">
      <div id="page-container">
          <div id="content-wrap">
          <BrowserRouter>
            <Route path="/" exact component={Registro} />
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/detalles/:id" exact component={DetalleProducto} />
        </BrowserRouter>
        <br></br>
        <br></br> 
          <footer id="footer">
          <p>Libre Mercado Ecommerce, © Copyright UTN.BA
            <br/> </p> 
          </footer>
          </div>         
           </div> 

  
      </div>
      /***
       FOOTER
       ***/
       
    )
  }
}

export default App;
