import React, { useRef, useEffect } from 'react';
import Header from '../../../header/header';

function RestorePassword() {
    const focusEmail = useRef();

    useEffect(() => {
        focusEmail.current.focus();
    }, []);

    return (
        <>
            <Header />
            <main className="container my-5">
                <div className="container col-md-5 border border-muted rounded">
                    <div className="container text-center pb-3">
                        <h3>Restore Password</h3>
                    </div>
                    <div className="container">
                        <p>EMAIL</p>
                        <input ref={focusEmail} type="email" className="form-control" placeholder="Example@gmail.com" /><br />
                        <button className="btn btn-info w-100 py-3"
                            onClick={() => {
                            focusEmail.value === '' || focusEmail.value === ' ' || focusEmail.value !== '@'
                                ? alert('The field empty')
                                : alert('The new passwort was sent to your email')
                            }}
                        >Continue</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default RestorePassword;