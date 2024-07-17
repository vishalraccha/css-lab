import React from 'react'
import './Mainpage.css'
function Mainpage() {
  return (
    <>
      <div className="container">
        <h1 className="mainh1">Open-Source UI Solutions </h1>
        <h1 className="mainh1"> Empower Your Project with Collaborative Design</h1>

            <h2>Create, share, and use beautiful custom</h2>
            <h2>elements made with CSS or Tailwind</h2>


      </div>
      <div className="second">
      <div className="socialcnt">
       <li><a href="https://www.linkedin.com/in/vishal-raccha-92b74b284/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon> </a></li>
                <li><a href="https://www.instagram.com/its_vishal_2407/?next=%2F" target="_blank"><ion-icon name="logo-instagram"></ion-icon> </a></li>
                <li><a href="twitter.com" target="_blank"><ion-icon name="logo-twitter"></ion-icon> </a></li>
                <li><a href="https://github.com/vishalraccha" target="_blank"><ion-icon name="logo-github"></ion-icon> </a></li>
      </div>
      
      <div className="cube">
        <div className="top"></div>
        <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>

        </div>
      </div>
      </div>
    </>
  )
}

export default Mainpage
