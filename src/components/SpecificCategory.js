import {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
function SpecificCategory() {
    const params = useParams()
    const[categoryData, setCategoryData] = useState([])
    useEffect(()=>{
    fetch(`http://localhost:3000/api/v1/categories/${params.id}`)
  .then(response => response.json())
  .then((data)=> {
    setCategoryData(data)
   
  })
  },[params])
  return(
    <section className='section'>
        {categoryData.map((event) => {
            return(
<div className='wrapper' key={event.id}>
<div className='image-card'>
              <img src={event.image_url} alt='img-img' className='image'/>
            </div>
            <div className='overlay'>
              <div className='details'>
                <h3>{event.name}</h3>
                <h4>{event.description}</h4>
                <h3>{event.location}</h3>
                <div className='events-btn'>
                <div className='date'>
                <h4>{event.start_date}</h4>
                <h4>{event.end_date}</h4>
                </div>
                <div className='time'>
                <h4>{event.start_time}</h4>
                <h4>{event.end_time}</h4>
                </div>
                <div className='tickets'>
                <h4>{event.total_tickets}</h4>
                <h4>{event.remaining_tickets}</h4>
                </div>
                <h4>{event.amount}</h4>
                </div>
              </div>
              {/* <div>
                <button className='events-btn'>View Events</button>
              </div> */}
            </div>

      </div>
            )
        })}
    </section>
  )
  
}

export default SpecificCategory