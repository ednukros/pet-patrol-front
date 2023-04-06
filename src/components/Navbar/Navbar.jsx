import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
              {/* aqui irá el logo */}
            <h1>Pet Patrol</h1>
            <nav className='navbar__anchors'>
                <a href="/">Inicio</a>
                <a href="/">Pide cita</a>
                <a href="/">Servicios</a>
                <a href="/">Tienda Online</a>
                <a href="/">Accede</a>


            </nav>

        </div>
    )
}

export default Navbar