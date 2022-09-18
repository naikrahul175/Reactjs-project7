import React from 'react'
import Card from "../Card"

const Article = () => {
  return (
    <section className='Articles'>
      <h2 className='Article-title'>Trending Articles</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="Articles card">
        <Card />
      </div>
    </section>
  )
}

export default Article
