import './ShowCitiesBtn.css';

export const ShowCitiesBtn = ({showCitiesList}) =>{
   
    return(
    <button className='open-btn' onClick={showCitiesList}>Show My Cities</button>
    )
}