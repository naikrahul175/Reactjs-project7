import React from 'react'
import Card from "../Card"
import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import img3 from "../../images/3.png"


const Article = () => {
  return (
    <section className='Articles' style={{margin:40}}>
      <h2 className='Article-title'>Trending Articles</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="Articles card" style={{display:"flex"}}>
        <Card image={img1}/>
        <Card image={img2}/>
        <Card image={img3}/>
      </div>
      <div className='slider-btn'>
          <input type="radio" name='swipe' className='slide'/>
          <input type="radio" name='swipe' className='slide'/>
          <input type="radio" name='swipe' className='slide'/>
          <input type="radio" name='swipe' className='slide'/>
        </div>
    </section>
  )
}

export default Article
