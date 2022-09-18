import React from 'react'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="Footer-top">
        <h4>Follow us on : 
            <span className="Footer-right">
                <i className="uil uil-twitter"></i>
                <i className="uil uil-google"></i>
                <i className="uil uil-facebook"></i>
                <i className="uil uil-instagram"></i>
                <i className="uil uil-paypal"></i>
                <i className="uil uil-youtube"></i>
            </span>
        </h4>
      </div>
      <div className="Footer-bottom">
            <ul>
                <li>Blockchain Basics</li>
                <li>Blockchain Explainers</li>
                <li>Crypto Gaming</li>
                <li>Videos</li>
                <li>Partner With Us</li>
                <li>About Us</li>
            </ul>
      </div>
    </footer>
  )
}

export default Footer
