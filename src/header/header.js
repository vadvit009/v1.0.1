import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [headerColor] = useState(['light', 'dark']);

    return (
        <header className={'bg-' + headerColor[0]}>
            <nav className="navbar navbar-expand-lg navbar-light container">
                <h1 className="navbar-brand font-weight-bold">
                    <Link to="/" className="text-decoration-none text-dark">apiko</Link>
                </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse offset-md-8 col-md-3" id="navbarSupportedContent">
                    <div>
                        <button className="btn btn-info px-5 py-1">
                            <Link to="/sell" className="text-decoration-none text-white">SELL</Link>
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-light px-5 py-1">
                            <Link to={'/login'} className="text-decoration-none text-dark">LOGIN</Link>
                        </button>
                    </div>
                    <div className="text-center">
                        <Link to="/goods-listing" className="text-decoration-none text-dark">
                            <i className="far fa-heart"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </header >
    )
};

export default Header;