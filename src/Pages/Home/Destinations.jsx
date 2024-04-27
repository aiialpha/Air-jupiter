import React from 'react'
import { Link } from 'react-router-dom'
import './destination.css'
import Kano from '../../Assets/kano.jpg'
import Kaduna from '../../Assets/kaduna.jpg'
import Abuja from '../../Assets/abuja.jpg'
import Lagos from '../../Assets/lagos.jpg'
export default function Destinations() {
  return (
    <div className='container-fluid'>
        <h3>Top Destinations</h3>
        <div className="row">
        <div className="col-md-6">
        <div className="row">
        <div className="col-md-6 destination-tile">
                <Link to='' >
                    <img src={Kano} alt="" />
                </Link>
                <span>Kano</span>
            </div>
            <div className="col-md-6 destination-tile">
                <Link to='' >
                    <img src={Kaduna} alt="" />
                </Link>
                <span>Kaduna</span>
            </div>
            <div className="col-md-6 destination-tile">
                <Link to='' >
                    <img src={Lagos} alt="" />
                </Link>
                <span>Lagos</span>
            </div>
            <div className="col-md-6 destination-tile">
                <Link to='' >
                    <img src={Abuja} alt="" />
                </Link>
                <span>Abuja</span>
            </div>
        </div>
        </div>
         <div className="col-md-6 destination-tile">
         <Link to='' >
                    <img src={Abuja} alt="" />
                </Link>
                <span>Mecca</span>  
         </div>
        </div>
    </div>
  )
}
