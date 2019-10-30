import React from 'react';
import UserListingChat from '../userListingChat/userListingChat';
import tonyStark from '../../../tonyStark.png';
const Chat = () => {
    return (
        <div>
            <UserListingChat />
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{minWidth:'800px'}} role="document">
                    <div className="modal-content mx-0">
                        <div className="modal-header">
                            <h5 className="modal-title mx-auto text-right" id="exampleModalLabel">Contact seller</h5>
                            <button type="button" className="close p-0 m-0" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4>Subject: Kittens for free</h4>
                            <div className='row my-3'>
                                <div className='col-2'>
                                    <img src={tonyStark} className='text-center mx-auto' alt='photoOfUser' style={{ width: '60px', borderRadius: '100px'}} />
                                </div>
                                <div className='col-10'>
                                    <h5>Todd Olson</h5>
                                    <h6 className='text-muted'>Jakarta, Indonesia</h6>
                                </div>
                            </div>
                            <p className='text-muted'>MESSAGE</p>
                            <textarea className='form-control' placeholder='Write your message here'></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info mx-auto w-75">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Chat;