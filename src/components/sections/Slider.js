import React from 'react'
import banner from '../../images/banner.png'

const Slider = () => {
  return (
    <section className='Slider'>
      <img src={banner} alt="banner" width='100%' height='330px' />
      <h2 className='Slider-title'>Crypto Industry is in talks with the Indian governmenet</h2>
      <h3 className='Slider-subtitle'>- CoinSwitch CEO Ashish.</h3>
      <button id='swipe-btn'>More</button>
        <div className='slider btn'>
          <input type="radio" name='swipe' className='slide'/>
          <input type="radio" name='swipe' className='slide'/>
          <input type="radio" name='swipe' className='slide'/>
          <input type="radio" name='swipe' className='slide'/>
        </div>
    </section>
  )
}

export default Slider
