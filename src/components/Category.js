import React, { useState, useEffect} from 'react'


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
          <div className='card-image' key={category.id}>
            <img src={category.image_url} alt='category-img' className='image'/>
            <div className='overlay'>
              <h3>{category.name}</h3>
              <div>
                <h4>{category.description}</h4>
                <button className='btn'>View Events</button>
              </div>
            </div>
          </div>
        )
      })}
    </section>
    )
}

export default Category;