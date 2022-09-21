import React from 'react'
import img4 from "../../images/update.png"

const Update = () => {
  return (
    <section className='LegalUpdate' style={{margin:40}}>
        <h2 className='Update-title'> Legal Updates</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="LegalUpdate container" >
          <div className='LegalUpdate-top'>
              <h2>Why are <br/>Cryptocurrencies  <br/>so popular</h2>
          </div>
          <div className='LegalUpdate-bottom' style={{display:"flex"}}>
              <div className="bottom-left">
                <h4>Cryptocurrencies appeal to their supporters <br/> for a variety of reasons</h4>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                <button onClick={()=> alert("Pending work , just wait for next update")} id="LegalUpdate-btn">Read More</button>
              </div>
              <div className="bottom-right">
                <img src={img4} alt="img" width="350px" height="300px" />
                <div className='slider-btn'>
                    <input type="radio" name='swipe' className='slide'/>
                    <input type="radio" name='swipe' className='slide'/>
                    <input type="radio" name='swipe' className='slide'/>
                    <input type="radio" name='swipe' className='slide'/>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Update
