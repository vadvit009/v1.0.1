import React, { useState } from 'react';
import Cart from '../../htmlComponents/cart';


const Home = () => {

    const [categories] = useState(['One', 'Two', 'Three']);
    let [priceFromValue, setPriceFromValue] = useState('');
    let [priceToValue, setPriceToValue] = useState('');
    (priceFromValue === priceToValue)
        ? priceToValue = +priceToValue + 1
        : console.log('work');

    return (
        <div className='container '>
            <div className='container my-3'>
                <div className='input-group my-3 col-md-8 offset-md-1'>
                    <div className="input-group-prepend">
                        <label className="input-group-text">
                            <i className="fas fa-th-large"></i>
                        </label>
                    </div>
                    <select className="custom-select">
                        <option defaultValue={'selected'} disabled>Choose Categories</option>
                        <option value="1">{categories[0]}</option>
                        <option value="2">{categories[1]}</option>
                        <option value="3">{categories[2]}</option>
                    </select>
                    <input type="text" className="form-control ml-3" placeholder="Price from (USD)"
                        value={priceFromValue}
                        onChange={(e) => setPriceFromValue(priceFromValue = e.target.value)} />
                    <input type="text" className="form-control" placeholder="Price to (USD)"
                        value={priceToValue}
                        onChange={e => setPriceToValue(priceToValue = e.target.value)} />
                </div>
            </div>
            <div className='card-group container my-3 col-md-10'>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
            <div className='card-group container my-3 col-md-10'>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
    )
}
export default Home;