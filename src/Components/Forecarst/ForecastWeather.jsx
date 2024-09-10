import './ForecastWeather.css';

export const ForecastWeather = ({title, data}) =>{

    return(
       <div className='hourly-forecast'>
            <h3 className='hourly-forecast__title'>{title}</h3>
    
           <div className="forecast-columns">
                {data.map((d,index) => (
                  <div className="forecast-column" key={index}>
                    <p className='forecast-column__name'>{d.title}</p>
                    <img
                  src={d.icon}
                  alt="weather icon"
                />
                <p className='forecast-column__temperature'>{`${d.temp.toFixed()}`}</p>
                  </div>
                  ))}
        
           </div>
            
       </div>
    )
}