import React from 'react'
import "../styling/header.css";
import { Link } from 'react-router-dom';
import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <nav className='header'>
            <Link to="/">
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon" />
            </Link>
            {/* <input type="text" className="header_searchInput" /> */}
            <Input  placeholder='Search Products' />
            <SearchIcon w={7} h={7} />
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