import React from 'react';

function Footer() {
    return (
        <footer>
            <p className="text-muted text-center">Copyright 
                <i className="far fa-copyright"></i> 2017 
                <a href={'../privacy/privacy'} className="text-muted">Privacy </a>
                <a href={'../policy/policy'} className="text-muted">Policy</a>
            </p>
        </footer>
    )
}

export default Footer;