import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import context from '../../../userContext';
import { get, set } from 'mobx';
import Header from '../../../header/header';

const Login = () => {

    const userStore = useContext(context);

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

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const loginCheck = () => {

        for (let i = 0; i < userStore.users.all.length; i++) {
            if (get(userStore.users.all[i], 'email') === email
                && reg.test(email)
                && get(userStore.users.all[i], 'pass') === password) {
                redirect(userStore.users.all[i])
            } else {
                errorLogin()
            }
        }

    }

    const redirect = (user) => {
        history.push('/profile');
        history.location.state = user;
        set(userStore.isLogged, 'isLogged', true);
    }


    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="container col-md-5 shadow-lg p-3 bg-white rounded">
                    <h3 className='text-center my-2'>Login</h3>
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
                        onClick={loginCheck}
                    >Continue</button>
                    <p className="text-center my-5">I have no account,
                    <Link to={'/register'} className="text-info"> REGISTER NOW</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;