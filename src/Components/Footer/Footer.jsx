import React from 'react'
import './footer.css'
import logo from '../../Assets/logo/white.png'

export default function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="logo"><img src={logo} alt='Air Jupiter' /></div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">address</div>
            <div className="col-12 col-md-6 col-lg-3">social</div>
            <div className="col-12 col-md-6 col-lg-3">hmm</div>
          </div>
        </div>
    </footer>
  )
}
