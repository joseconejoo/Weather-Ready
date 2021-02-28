import React from 'react';
import icon1 from './images/icons/icon-1.svg'
const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?

                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Location: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humidity: {props.humidity}</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> Wind Speed: {props.wind_speed}</p>
                    }
                </div>
                
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
                
            }
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            <div className="today forecast">
              <div className="forecast-header">
                <div className="day">Monday</div>
                <div className="date">6 Oct</div>
              </div> {/* .forecast-header */}
              <div className="forecast-content">
                <div className="location">New York</div>
                <div className="degree">
                  <div className="num">23<sup>o</sup>C</div>
                  <div className="forecast-icon">
                    <img src={icon1} alt="" />
                  </div>	
                </div>
                <span><img src="images/icon-umberella.png" alt="" />20%</span>
                <span><img src="images/icon-wind.png" alt="" />18km/h</span>
                <span><img src="images/icon-compass.png" alt="" />East</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        
    )
}

export default WeatherInfo;