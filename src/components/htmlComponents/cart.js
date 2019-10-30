import React from 'react';
import tonyStark from '../../tonyStark.png'

const Cart = () => {

    return (
        <div className="card">
            <img src={tonyStark} className="card-img-top" alt="photoOfCard" />
            <div className="card-body">
                <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                    style={{ bottom: '80px', right: '10px' }}></i>
                <h5 className="card-title text-muted">Item Name</h5>
                <p className="card-text font-weight-bold">555.99$</p>
            </div>
        </div>
    )
}
export default Cart;