import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    useEffect(() => {
        focusInput.current.focus();
    }, [])

    let [email, setEmail] = useState('');
    let [fullName, setFullName] = useState('');
    let [password, setPassword] = useState('');
    let [againPassword, setAgainPassword] = useState('');

    const focusInput = useRef();
    const errorPass = useRef();
    const errorPassAgain = useRef();

    const errorPassword = () => {
        errorPass.current.className += ' border-danger';
        errorPassAgain.current.className += ' border-danger'
        console.log(errorPass.current);
    }

    const passwordHidden = () => {
        errorPass.current.type === 'password'
            ? errorPass.current.type === 'text'
                ? console.log('hidden dont works')
                : errorPass.current.type = 'text'
            : errorPass.current.type = 'password'
    }

    const passwordAgainHidden = () => {
        errorPassAgain.current.type === 'password'
            ? errorPassAgain.current.type === 'text'
                ? console.log('hidden dont works')
                : errorPassAgain.current.type = 'text'
            : errorPassAgain.current.type = 'password'
    }

    const setUser = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        console.log(localStorage);        
    }

    return (
        <div className="container my-5">
            <h3 className="container text-center">Register</h3>
            <div className="container col-md-5">
                <p>EMAIL</p>
                <input type="email" className="form-control" placeholder="Example@gmail.com"
                    value={email}
                    ref={focusInput}
                    onChange={(e) => setEmail(email = e.target.value)} /><br />
                <p>FULL NAME</p>
                <input type="text" className="form-control" placeholder="Tony Stark"
                    value={fullName}
                    onChange={(e) => setFullName(fullName = e.target.value)} /> <br />
                <p>PASSWORD</p>
                <div className="input-group mb-3" >
                    <input type="password" className="form-control" placeholder="Password"
                        aria-label="Recipient's username" aria-describedby="basic-addon2"
                        value={password}
                        ref={errorPass}
                        onChange={(e) => setPassword(password = e.target.value)} />
                    <div className="input-group-append">
                        <span className="input-group-text border-0" id="basic-addon2"
                            onClick={passwordHidden}>
                            <i className="far fa-eye-slash"></i>
                        </span>
                    </div>
                </div>
                <p>PASSWORD AGAIN</p>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password"
                        aria-label="Recipient's username" aria-describedby="basic-addon2"
                        value={againPassword}
                        ref={errorPassAgain}
                        onChange={(e) => setAgainPassword(againPassword = e.target.value)}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text border-0" id="basic-addon2" onClick={passwordAgainHidden}>
                            <i className="far fa-eye-slash"></i>
                        </span>
                    </div>
                </div>
                <button className="btn btn-info w-100 py-3"
                    onClick={() => {
                        password === againPassword
                            ? setUser()
                            : errorPassword()
                    }}>Register</button>
                <p className="text-center my-5">I already have an account,
                <Link to={'/login'} className="text-info">LOGIN</Link>
                </p>
            </div>
        </div >
    )
}

export default Register;