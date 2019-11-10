import React, { useContext } from 'react';
import context from '../../../userContext';
import { get } from 'mobx';
import Cart from '../../htmlComponents/cart';
import Header from '../../../header/header';

const GoodsListing = () => {
    const store = useContext(context).cards.all;
    const favStore = store.map(item => get(item, 'favorite'));
    let favCounter = favStore.filter(item => item === true).length;

    return (
        <>
            <Header />
            <div className="container my-3">
                <p className="container font-weight-bold col-md-10">SAVED ITEMS <span className="font-weight-normal">({favCounter})</span></p>
                <div className="card-group container my-3 col-md-10">
                    {store.map((item, i) => (item.favorite
                        ? < Cart {...item} key={i} />
                        : null)) || []}
                </div>
            </div >
        </>
    )
};

export default GoodsListing;