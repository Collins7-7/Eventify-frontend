import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Category.css"
import Modal from './modal'

function Category(){
  const [categories, setCategories] = useState([])
  const[show, setShow]= useState(false)
const navigate= useNavigate()
  useEffect(() => {
    fetch("/api/v1/categories")
    .then((r) => r.json())
    .then((categories) => setCategories(categories))
  }, [])
 
  return(
    <section className='section'>
      {categories.map((category) => {
        return (
          <div className='wrapper' key={category.id}>
            <div className='image-card'>
              <img src={category.image_url} alt='category-img' className='image'/>
            </div>
            <div className='overlay'>
              <div className='details'>
                <h3>{category.name}</h3>
                <h4>{category.description}</h4>
              </div>
              <div>
                <button className='events-btn'onClick={()=>{navigate(`/category/${category.id}`)}}>View Events</button>

              </div>
            </div>
            <Modal show={show} onClose={()=>setShow(false)}/>
          </div>
        )
      })}
    </section>
    )
}

export default Category;