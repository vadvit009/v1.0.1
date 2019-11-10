import React, { useState, useContext, useRef } from 'react';
import context from '../../../userContext';
import { useHistory } from 'react-router-dom';

const Sell = (...props) => {

    const logger = props[0].isLogged;
    const history = useHistory()

    const alpha = (logger) => {
        if (logger === false) {
            history.push('/login')
        }
    }

    const cardStore = useContext(context).cards.all;
    const [card] = useState({});

    const errorName = useRef();
    const errorDesc = useRef();
    const date = new Date();
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const fieldsError = (card) => {
        if (card.name === undefined && card.desc === undefined) {
            alert('Error, fields is empty');
            errorName.current.style.border = '1px solid red';
            errorDesc.current.style.border = '1px solid red';
        } else {
            card.createdAt = days[date.getDay()] + ', ' + date.getHours() + ':' + date.getMinutes();
            cardStore.push(card);
        }
    }

    return (
        <div className="modal fade" id="sellModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content mx-0">
                    <div className="modal-header">
                        <h5 className="modal-title mx-auto text-right" id="exampleModalLabel">Sell product</h5>
                        <button type="button" className="close p-0 m-0" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Name:</p>
                        <input type='text' className='form-control'
                            ref={errorName}
                            onChange={(e) => {
                                card.id = cardStore.length + 1
                                card.name = e.target.value
                            }} />
                        <p>Description:</p>
                        <input type='text' className='form-control'
                            ref={errorDesc}
                            onChange={(e) => {
                                card.desc = e.target.value
                            }} />
                        <p>Price:</p>
                        <input type='number' className='form-control'
                            onChange={(e) => {
                                card.price = +e.target.value
                            }} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-info mx-auto w-75"
                            onClick={() => {
                                alpha(logger)
                                fieldsError(card)
                            }
                            }
                        >Sell</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Sell;