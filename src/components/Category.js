import React, { useState, useEffect} from 'react'
import "./Category.css"

function Category(){
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/categories")
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
                <button className='events-btn'>View Events</button>
              </div>
            </div>
          </div>
        )
      })}
    </section>
    )
}

export default Category;