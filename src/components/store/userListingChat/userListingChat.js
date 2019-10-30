import React from 'react';
import tonyStark from '../../../tonyStark.png';

const UserListingChat = () => {
    return (
        <div className='container col-md-8 mx-auto'>
            < div className='row' >
                <div className='col-md-9'>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">Item name <span className='text-muted'>Today, 18:24</span></h5>
                            <p className='text-muted'>365 Kuphal Glens Suite 589</p>
                            <p className="card-text">Some quick example text to
                            build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to
                            build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to
                            build on the card title and make up the bulk of
                            the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='row'>
                        <div className='container text-center'>
                            <img src={tonyStark} alt='user' style={{width:'100px', borderRadius: '100px'}}/>
                            <p className='title font-weight-bold mb-0'>Tony Stark</p>
                            <p className='text-muted my-0'>Jakarta, Indonesia</p>
                            <button className="btn btn-info my-1" data-toggle="modal" data-target="#exampleModal">
                                CHAT WITH SELLER</button>
                            <button className="btn px-3 btn-outline-info my-1">ADD TO FAVORITE</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
};

export default UserListingChat;