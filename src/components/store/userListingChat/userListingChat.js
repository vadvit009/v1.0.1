import React, { useContext } from 'react';
import tonyStark from '../../../tonyStark.png';
import { set } from 'mobx';
import context from '../../../userContext';
import { Redirect } from 'react-router-dom';

const UserListingChat = (...card) => {

    const cardDetails = card[0];
    const cardStore = useContext(context).cards.all;
    const addToFav = (e) => {
        set(cardStore[cardDetails.id - 1], { favorite: true });
        e.target.style.backgroundColor = 'pink'
        console.log('work');
    }

    const isEmpty = (cardDetails) => {
        for (const key in cardDetails) {
            if (cardDetails.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    if (isEmpty(cardDetails) === true) {
        return <Redirect to='/' />
    }

    return (
        <div className='container shadow-lg p-3 col-12 my-3 col-md-8 mx-auto'>
            < div className='row' >
                <div className='col-8'>
                    <div className="card border-0">
                        <img src={tonyStark} className="card-img-top" alt="img" style={{ height: '150px' }} />
                        <div className="card-body">
                            <div className='row'>
                                <h5 className="card-title col-6">{cardDetails.name} <span className='text-muted'>{cardDetails.createdAt}</span></h5>
                                <h5 className="card-title col-6 text-right">{cardDetails.price + '$'}</h5>
                            </div>
                            <p className='text-muted'>{cardDetails.adress}</p>
                            <p className="card-text">{cardDetails.desc}</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <div className=' text-center'>
                            <img src={tonyStark} alt='user' style={{ width: '50%', borderRadius: '100px' }} />
                            <p className='title font-weight-bold mb-0'>Tony Stark</p>
                            <p className='text-muted my-0'>Jakarta, Indonesia</p>
                            <button className="btn btn-info my-1" data-toggle="modal" data-target="#exampleModal">
                                CHAT WITH SELLER</button>
                            <button className="btn px-3 btn-outline-info my-1" onClick={addToFav}>ADD TO FAVORITE</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
};

export default UserListingChat;