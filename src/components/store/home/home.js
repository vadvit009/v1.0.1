import React, { useState, useContext } from 'react';
import Cart from '../../htmlComponents/cart';
import context from '../../../userContext';
import Header from '../../../header/header';

const Home = () => {

    const cardStore = useContext(context).cards.all;
    let [filterStore, setFiltered] = useState(cardStore);
    const [categories] = useState(['first', 'second', 'third']);
    let [priceFromValue, setPriceFromValue] = useState('');
    let [priceToValue, setPriceToValue] = useState('');

    return (
        <>
            <Header />
            <div className='container'>
                <div className='container my-3'>
                    <div className='input-group shadow p-2 my-3 col-md-8 offset-md-1'>
                        <div className="input-group-prepend">
                            <label className="input-group-text">
                                <i className="fas fa-th-large"></i>
                            </label>
                        </div>
                        <select className="custom-select" onChange={(e) =>
                            setFiltered(cardStore.filter(card => card.category === e.target.value)
                            )
                        }>
                            <option defaultValue={'selected'}>Choose Categories</option>
                            {categories.map((cat, i) => <option key={i}>{cat}</option>)}
                        </select>
                        <input type="number" className="form-control ml-2" placeholder="Price from (USD)"
                            defaultValue={priceFromValue}
                            onChange={(e) =>
                                setPriceFromValue(priceFromValue = +e.target.value,
                                    setFiltered(cardStore.filter(card => +card.price >= priceFromValue)))
                            } />
                        <input type="text" className="form-control" placeholder="Price to (USD)"
                            value={priceToValue}
                            onChange={(e) =>
                                setPriceToValue(priceToValue = +e.target.value,
                                    setFiltered(cardStore.filter(card => +card.price <= priceToValue))
                                )
                            } />
                    </div>
                </div>
                <div className='container my-3 col-md-10'>
                    <div className='row'>
                        {
                            filterStore.map(
                                (card, i) => <Cart {...card} key={i} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    )
}
export default Home;