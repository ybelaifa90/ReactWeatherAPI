
import React, {Component} from 'react';


class WeatherBox extends Component 
{
    render() 
    {
      return  <div id="weather-box" style={{margin:"auto",display:"none"}}>
      <div id="c" style={{margin: 'auto',display:'none'}}>Current Weather</div>
      <img id="icon" alt="weather image" src="" width="30px" height="30px" style={{display:'none',margin:'auto'}}/>
      <p id ="temp"></p>
      <p id ="cond"></p>
      <p id ="feels"></p>
      <div id="line" style={{margin: 'auto',display:'none'}}></div>
      <p id ="hum"></p>
      <p id ="visib"></p>
      <p id ="sunrise"></p>
      <p id ="sunset"></p>

        </div>;
    }
}

export default WeatherBox
  