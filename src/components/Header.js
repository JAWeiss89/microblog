import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <h1>Microblog</h1>
            <p>Get in the Rithm of blogging!</p>
            <div>
                <Link to="/">Blog</Link>
                <Link to="/new">Add a new post</Link>
            </div>
        </div>
    )
}

export default Header;