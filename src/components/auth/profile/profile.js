import React from 'react';

function Profile() {
    return(
        <main className="container my-5">
        <div className="container col-md-5 bg-white border border-muted rounded">
            <div className="container text-center pb-3">
                <h4>Edit Profile</h4>
            </div>
            <div className="container text-center">
                <img src={"logo"} alt="profilePhoto" className="border rounded-circle w-50"/><br/>
                <button className="btn btn-success bg-white text-success py-0 mb-3">Upgrade Photo</button>
            </div>
            <div className="container">
                <p>FULL NAME</p>
                <input type="text" className="form-control" placeholder="Tony Stark"/><br/>
                <p>PHONE NUMBER</p>
                <input type="telephone" className="form-control" placeholder="+ 380 95 975 867"/><br/>
                <button className="btn btn-success w-100 py-2">Save</button>
            </div>
        </div>
    </main>
    )
}

export default Profile;