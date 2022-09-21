import React from 'react'
import banner from '../../images/banner.png'

const Slider = () => {
  const height = {
    height: "30vw"
  }
  return (
    <section className='Slider'>
      <img src={banner} alt="banner" width='100%' style={height} />
      <h2 className='Slider-title'>Crypto Industry <br/> is in talks with the<br/> Indian governmenet</h2>
      <h3 className='Slider-subtitle'>- CoinSwitch CEO Ashish.</h3>
      <button onClick={()=> alert("Pending work , just wait for next update")} id='swipe-btn'>More</button>
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
