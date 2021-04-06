import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {


    return (
        <div>
            <nav>
                <Link to='/' > Home </Link>
                <Link to='/about' > About </Link>
                <Link to='/portfolio' > Portfolio </Link>
                <Link to='/contact' > Contact </Link>
            </nav>
            
        </div>
    )
}

export default Header