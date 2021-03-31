  //YB

import React, { Component } from 'react';
/*styles*/
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './styles/welcome.css';
import './styles/weatherbox.css';
import './styles/form.css';
/*components*/
import Welcome from './components/Welcome';
import Form from './components/Form';
import WeatherBox from './components/WeatherBox'; 

//import {Greet} from './components/Greet'; if using ES6

class App extends Component 
{
  render() 
  {
    /* specify the component name is custom component html tag or just <classname/>*/
    return (
      <div className="App">
      <Welcome/>
      <br></br>
      <br></br>
      <Form/>
      <br></br>
      
      <br></br>
      <WeatherBox/>
      <br></br>
    
     
      
        
      </div>
    );
  }
}

export default App;