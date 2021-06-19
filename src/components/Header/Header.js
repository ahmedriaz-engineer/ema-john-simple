import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header bg-light ">
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button onClick={()=>setLoggedInUser('')}>Sign out</button>
            </nav>

            <form className="d-flex input ">
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>

        </div>
    );
};

export default Header;