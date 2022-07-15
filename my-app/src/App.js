import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
// import ListadosNombres from './components/ListadosNombres';
function App() {
  return (
   

     <Router>
   
      <Link to="/">Usuarios</Link>
      
        <Switch> 
        <Route exact path="/">
         <Usuario/>
         </Route>

         
         <Route path="/usuario/:id">
         <Usuarios/>
         </Route>



          
         </Switch> 
 
    </Router>

    
   
  );
}

export default App;
