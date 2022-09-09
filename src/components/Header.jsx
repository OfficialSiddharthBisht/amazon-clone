import React from 'react'
import "../styling/header.css";
import { Link } from 'react-router-dom';
// import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <nav className='header'>
            <Link to="/">
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon" />
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' placeholder='Search Products'/>
                <SearchIcon w={7} h={7} color = "black.500" className = "header_searchIcon" />
            </div>
            <div className="header_nav">
                {/* 1st link */}
                <Link to="/login" className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Hello Sid</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/login" className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Returns &</span>
                        <span className='header_optionLineTwo'>Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to = "/checkout" className='header_link'>
                    <div className="header_optionBasket">
                        {/* Shopping basket icon */}
                        <h6>Basket</h6>
                        {/* Number of items in the basket */}
                        <span className='header_optionLineTwo header_basketCount'>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
/*
Todo:-
logo on left -> img
Search box
3 links
basket icon with number of products in cart
*/