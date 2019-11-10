import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { get, set } from 'mobx';
import tonyStark from '../../../tonyStark.png'
import context from '../../../userContext';
import Header from '../../../header/header';

const Profile = (user) => {

    const userDetails = useContext(context).users.all;
    let [name, setName] = useState('' || get(userDetails, 'name'));
    let [phone, setPhone] = useState(get('' || userDetails, 'phone'));
    const save = (name, phone) => {
        set(userDetails[user.location.state.id - 1], { name: name })
        set(userDetails[user.location.state.id - 1], { phone: phone })
        console.log('works', userDetails[user.location.state.id - 1])
    }

    if (user.location.state === undefined) { return <Redirect to='/login' /> }

    return (
        <>
        <Header />
        <main className="container my-5">
            <div className="container col-md-5 bg-white shadow-lg p-3 rounded">
                <div className="container text-center pb-3">
                    <h4>Edit Profile</h4>
                </div>
                <div className="container text-center">
                    <img src={tonyStark} alt="profilePhoto" className="border border-success rounded-circle w-25" /><br />
                    <button className="btn btn-success bg-white text-success py-0 mb-3">
                        Upgrade Photo</button>
                </div>
                <div className="container">
                    <p>FULL NAME</p>
                    <input type="text" className="form-control"
                        value={name}
                        onChange={(e) => setName(name = e.target.value)}
                        placeholder={userDetails[user.location.state.id - 1].name || 'Tony Stark'} /><br />
                    <p>PHONE NUMBER</p>
                    <input type="telephone" className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(phone = e.target.value)}
                        placeholder={userDetails[user.location.state.id - 1].phone || '+ 380 97 385 12 12'} /><br />
                    <button className="btn btn-success w-100 py-2"
                        onClick={() => save(name, phone)}
                    >Save</button>
                </div>
            </div>
        </main >
        </>
    )
}

export default Profile;