import React from 'react';

const NavBar = ({cartCount, onPageChange}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/" onClick={
                    (e) => {
                        e.preventDefault()
                        onPageChange('store')
                    }
                }>MyShop</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={
                                (e) => {
                                    e.preventDefault()
                                    onPageChange('store')
                                }
                            }>Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart" onClick={
                                (e) => {
                                    e.preventDefault()
                                    onPageChange('cart')
                                }
                            }>Cart: {cartCount === 0 ? 'Empty' : cartCount}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;