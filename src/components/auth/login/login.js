import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = (...x) => {
    // console.log('aloha',Users);
    console.log(x);

    const history = useHistory();
    const focusLoginEmail = useRef();

    useEffect(() => {
        focusLoginEmail.current.focus();

    }, []);

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const errorPass = useRef();

    const passwordHidden = () => {
        errorPass.current.type === 'password'
            ? errorPass.current.type === 'text'
                ? console.log('hidden dont works')
                : errorPass.current.type = 'text'
            : errorPass.current.type = 'password'
    }

    const errorLogin = () => {
        focusLoginEmail.current.className += ' border-danger';
        errorPass.current.className += ' border-danger';
    }

    const getUser = () => {
        localStorage.getItem('email') === email && localStorage.getItem('password') === password
            ? redirect()
            : errorLogin()
    }

    const redirect = () => {
        history.push('/profile');
    }


    return (
        <div className="container my-5">
            <div className="container text-center">
                <h3>Login</h3>
            </div>
            <div className="container col-md-5">
                <p>EMAIL</p>
                <input type="email" className="form-control" placeholder="Example@gmail.com"
                    ref={focusLoginEmail}
                    value={email}
                    onChange={(e) => setEmail(email = e.target.value)}
                /><br />
                <p>PASSWORD</p>
                <div className="input-group mb-3">
                    <input type="password" className="form-control"
                        placeholder="Password" aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={password}
                        ref={errorPass}
                        onChange={(e) => setPassword(password = e.target.value)}
                    />
                    <div className="input-group-append" onClick={passwordHidden}>
                        <span className="input-group-text border-0" id="basic-addon2">
                            <i className="far fa-eye-slash"></i>
                        </span>
                    </div>
                </div>
                <p className="text-right"><Link to={'/restore-password'} className="text-decoration-none text-muted">Don't remember password?</Link></p>
                <button className="btn btn-info w-100 py-3"
                    onClick={getUser}
                >Continue</button>
                <p className="text-center my-5">I have no account,
                    <Link to={'/register'} className="text-info">REGISTER NOW</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;