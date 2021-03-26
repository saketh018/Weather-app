import React from "react";
import "./weather.css";
function Weather(){
    return(
    
    <div className="weather">
        <span className="title">Weather App</span>
        <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          
        />
        
        <input
          type="text"
          placeholder="Country"
          name="country"
        />
        <button className="getweather" >
          Submit
        </button>
        </form>
    </div>
    );
}
export default Weather;
