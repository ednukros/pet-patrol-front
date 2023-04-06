import React from 'react'
import "./Topbar.scss"
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbar__info'>
            <ul className='topbar__info-container'>
                <li><Link to="/">Ubicacion bajo blabla</Link></li>
                <li><Link to="/"> petpatrol@gmail.com</Link></li>
                <li><Link to="/">xxx-xxx-xxx</Link></li>
            </ul>
        </div>
        <div className='topbar__rrss'>
            <p>i</p>
            <p>i</p>
            <p>i</p>
        </div>
    </div>
  )
}

export default Topbar