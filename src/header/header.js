import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Sell from '../components/store/sell/sell';
import context from '../userContext';

const Header = () => {

    const [headerColor] = useState(['light', 'dark']);
    const isLogged = useContext(context).isLogged;

    const logger = () => {
        if (isLogged.isLogged) {
            return <Link to={'/'} className="text-decoration-none text-dark"
                onClick={() => { isLogged.isLogged = false }}>LOGOUT</Link>
        }
        else {
            return <Link to={'/login'} className="text-decoration-none text-dark">LOGIN</Link>
        }
    }

    const bg = () => {
        if (isLogged.isLogged) {
            return 1
        }
        else {
            return 0
        }
    }

    const text = () => {
        if (isLogged.isLogged) {
            return 0
        }
        else {
            return 1
        }
    }

    return (
        <header className={'bg-' + headerColor[bg()]}>
            <nav className="navbar navbar-expand-lg navbar-light container">
                <h1 className="navbar-brand font-weight-bold">
                    <Link to="/" className={"text-decoration-none text-" + headerColor[text()]}>apiko</Link>
                </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse offset-md-8 col-md-3 col-12" id="navbarSupportedContent">
                    {/* <div> */}
                    <button className="btn btn-info px-5 py-1" data-target='#sellModal' data-toggle='modal' >
                        SELL
                        </button>
                    {/* </div>
                    <div> */}
                    <button className="btn btn-light mx-1 px-5 py-1">
                        {logger()}
                    </button>
                    {/* </div> */}
                    < button className="btn btn-light py-1 text-center" >
                        <Link to="/favorite-goods-listing" className="text-decoration-none text-dark">
                            <i className="far fa-heart"></i>
                        </Link>
                    </button>
                </div>
            </nav>
            <Sell isLogged={isLogged.isLogged} />
        </header >
    )
};

export default Header;