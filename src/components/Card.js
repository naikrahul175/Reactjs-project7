import React from 'react'

const Card = (props) => {
  const card = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "40%",
    margin: "10px"
  }

  const container = {
    padding: "5px 16px"
  }

  return (
    <div class="card-top" style={card}>
      <img src={props.image} alt="card-image" width="100%" height='50%'/>
      <div className= "card-middle" style={container}>
        <h3>Are Your Crypto Investment Legal</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div >
      <div className='card-bottom' style={{display:"flex",justifyContent:"space-between"}}>
        <img src="" alt="avatar" width='20px'/>
        <h5>Ayushi Verrna</h5>
        <h6>21 jan 2021</h6>
      </div>
    </div>
  )
}

export default Card
