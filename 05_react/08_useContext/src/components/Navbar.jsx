import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
// const Navbar = (props) => {
    return (
        <div>
            <nav>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Home</li></a>
                <a href="/"><li>Contact Us</li></a>

            {/* <Button count={props.count} /> */}
            <Button/>

            </nav>
        </div>
    )
}

export default Navbar
