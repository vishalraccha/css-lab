import React from 'react'
import './Footer.css'
// import logo from './images/logo.jpg'
function Footer() {
  return (
    <>
    <hr />
      <div className="footer" >
        <div className="left" >
            {/* <img className="logo" src={logo} alt="logo"/> */}
            <span className='logotxt text-3xl mr-1 pt-2'>CSS - LAB</span><br />
            <h4>CSS-Lab : Hundreds of <br />Open Source UI elements</h4>
            <h4>v1.0.0 | 2024-onwards | &copy; CSS-LAB All Rights  Reserved.</h4>
            <div className="social"> 
                <h3>CONNECT WITH US</h3>
                <ul>

                <li><a href="https://www.linkedin.com/in/vishal-raccha-92b74b284/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon> </a></li>
                <li><a href="https://www.instagram.com/its_vishal_2407/?next=%2F" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon> </a></li>
                <li><a href="https://twitter.com/itsvish2407" target="_blank" rel="noreferrer"><ion-icon name="logo-twitter"></ion-icon> </a></li>
                <li><a href="https://github.com/vishalraccha" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a></li>
                </ul>
            </div>
            </div>
            <div className="right">
                <h1>Create, share, and use beautiful <br /> custom elements made with CSS or <br />Tailwind </h1>

            </div>
      </div>
    </>
  )
}

export default Footer
