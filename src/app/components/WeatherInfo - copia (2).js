import React from 'react';
import icon1 from './images/icons/icon-1.svg';
import icon_umbrella from './images/icon-umberella.png';
import icon_wind from "./images/icon-wind.png";
import icon_compass from "./images/icon-compass.png";
const WeatherInfo = props => {
    console.log(props)
    const icon_weather =  'http://openweathermap.org/img/wn/'+props.icon+'@2x.png';
    console.log (icon_weather);
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div> 


<div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            <div className="today forecast">
              <div className="forecast-header">
                <div className="day">Monday</div>
                <div className="date">6 Oct</div>
              </div> {/* .forecast-header */}
              <div className="forecast-content">
                  {
                    props.city && props.country &&
                    <div className="location">{props.city}, {props.country}</div>
                    
                  }

                
                <div className="degree">
                  {
                    props.temperature &&
                    <div className="num">{Math.round(props.temperature)}<sup>o</sup>C</div>
                    
                  }
                  <div className="forecast-icon">
                    <img src={icon_weather} alt="" />
                    {props.description}
                  </div>
                  
	
                </div>
                <table className='table_weather'>
                  <tbody >
                    <tr >
                      <td className='foot_card'>
                        {
                        props.humidity &&
                        <span><img src={icon_umbrella} alt="" />  {props.humidity}%</span>
                        }
                      </td>
                      <td className='foot_card'>
                        {
                        props.wind_speed &&
                        <span><img src={icon_wind} alt="" />  {props.wind_speed}km/h</span>
                        }
                      </td>
                    </tr>
                  </tbody>

                </table>


{/*                 
                <span><img src={icon_compass} alt="" />East</span>
                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
                </div>
                
                
                
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
                
            }

        </div>
        
    )
}

export default WeatherInfo;