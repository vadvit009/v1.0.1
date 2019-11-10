import React, { useContext } from 'react';
import tonyStark from '../../tonyStark.png';
import { useHistory } from 'react-router-dom';
import { set, get } from 'mobx';
import context from '../../userContext';

const Cart = (...props) => {
    const cardStore = useContext(context).cards.all;
    // console.log(props);

    const history = useHistory();
    const redirect = () => {
        history.push('/product-detail')
        history.location.state = props[0];
    }

    const addToFav = (e) => {
        ;

        if (get(cardStore[props[0].id - 1], 'favorite')) {
            set(cardStore[props[0].id - 1], { favorite: false })
            e.target.style.backgroundColor = 'red'
        }
        else {
            e.target.style.backgroundColor = 'green'
            set(cardStore[props[0].id - 1], { favorite: true })
        }
    }

    return (
        <div className="col-6 col-md-3 card shadow p-2 border-0 my-1">
            <img src={tonyStark} className="card-img-top" alt="photoOfCard" />
            <div className="card-body">
                <i className="position-absolute btn btn-info text-light rounded-circle fas fa-heart"
                    style={{ bottom: '90px', right: '5px' }}
                    onClick={addToFav}
                ></i>
                <h5 className="card-title text-muted" onClick={redirect}>{props[0].name}</h5>
                <p className="card-text font-weight-bold">{props[0].price}$</p>
            </div>
        </div>
    )
}
export default Cart;