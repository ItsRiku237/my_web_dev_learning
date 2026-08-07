import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav>
                <a href="/"><li>Home</li></a>
                <a href="/About"><li>About</li></a>
                <a href="/Login"><li>Login</li></a>

                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Login"><li>Login</li></Link>

                
                <NavLink className={(e)=>{return e.isActive?"bg-green-300":""}} to="/"><li>Home</li></NavLink>
                {/* Here we use tailwind + black class(defiend in index.css) */}
                <NavLink className={(e)=>{return e.isActive?"bg-green-300 black":""}} to="/About"><li>About</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"bg-green-300":""}} to="/Login"><li>Login</li></NavLink>
            </nav>
        </div>
    )
}

export default Navbar
