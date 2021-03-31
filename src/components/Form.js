//YB

import React, {Component} from 'react';


class Form extends Component
{
    // validation for empty input
    validateForm =(e) =>
    {
        e.preventDefault(e);
        var input = document.getElementById("city-name").value
        if(input =='')
        {
            alert("city name must be filled out");
            return false;
        }
    }
    // convert date
    formatTime(unix_timestamp)
    {
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    }
   
    // get weather info by city name
    showWeatherData = (e) =>
    {
        
        /* validation */
        if(this.validateForm(e) != false)
        {
            e.preventDefault(); // prevent sending the form
            var city = document.getElementById("city-name").value
            //alert("after validation "+city);
            var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=5bc30ea0adbcb9cf52148c1b3468bdd6"; //url to openweather
            fetch(url).then(response => response.json()).then(data => 
            {
                console.log("inside fetch "+data);
                /* get/display data*/
                document.getElementById("temp").innerHTML =  Math.round(data.main.temp) +"  &#8451;"; // round temp to nearest integer
                document.getElementById("cond").innerHTML =  data.weather[0].description ; 
                document.getElementById("feels").innerHTML ="Feels like:"+ "  "+ Math.round(data.main.feels_like) +"  &#8451;"; // round  to nearest integer
                document.getElementById("hum").innerHTML ="Humidity:"+ "  "+ data.main.humidity +" %"; 
                //document.getElementById("visib").innerHTML ="Visibility"+ "  "+ this.formatTime(data.sys.sunrise) +" m"; 
                document.getElementById("sunrise").innerHTML ="Sunrise:"+ "  "+ this.formatTime(data.sys.sunrise) ; 
                document.getElementById("sunset").innerHTML ="Sunset:"+ "  "+ this.formatTime(data.sys.sunset) ; 
                //document.getElementById("wind").innerHTML ="Wind:"+ "  "+ data.wind.gust ; 

                /*display*/
                document.getElementById("c").style.display = "block";
                document.getElementById("line").style.display = "block";
                document.getElementById("weather-box").style.display = "block";
        
                // icon 
                var icon =  data.weather[0].icon; // in weather
                console.log(icon);
                var icon_url = "http://openweathermap.org/img/w/"+icon+".png";
                document.getElementById('icon').src = icon_url;
                document.getElementById('icon').style.display = "block";
            })
        }
    }
//caret-color: transparent;
    render()
    {
        return <div class="form-container">
        <form action="" method ="POST">
          <input id="city-name" style={{caretColor:"white"}}   type="text" placeholder="Enter City Name"  autoFocus /> 
          <button id="btn"  onClick={this.showWeatherData}><i id="s"  class="fa fa-search"></i></button>
        </form>
      </div>
     
    }

}

export default Form