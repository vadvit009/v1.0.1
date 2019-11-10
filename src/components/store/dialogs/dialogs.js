import React from 'react';
import Header from '../../../header/header';

const Dialogs = () => {

    return (
        <>
            <Header />
            <div className='container-fluid my-3'>
                <h4 className='text-center'>Inbox</h4><hr />
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='row border border-warning rounded p-2'>
                            <p className='col-md-6 text-left'>Seller Name</p>
                            <p className='com-md-6 text-muted ml-auto'>10:41</p>
                            <p className='col-md-12 text-muted text-truncate'>World lorem a lorem</p>
                        </div>
                        <div className='row border border-warning rounded p-2'>
                            <p className='col-md-6 text-left'>Seller Name</p>
                            <p className='com-md-6 text-muted ml-auto'>10:41</p>
                            <p className='col-md-12 text-muted text-truncate'>World lorem a lorem</p>
                        </div>
                        <div className='row border border-warning rounded p-2'>
                            <p className='col-md-6 text-left'>Seller Name</p>
                            <p className='com-md-6 text-muted ml-auto'>10:41</p>
                            <p className='col-md-12 text-muted text-truncate'>World lorem a lorem</p>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <p className='border border-info rounded p-2 text-right'>World lorem a lorem</p>
                        <p className='border border-info rounded p-2 text-right'>World lorem a lorem</p>
                        <p className='border border-info rounded p-2 text-right'>World lorem a lorem</p>
                        <p className='border border-info rounded p-2 text-right'>World lorem a lorem</p>
                        <p className='border border-info rounded p-2 text-right'>World lorem a lorem</p>
                        <div className='input-group my-3'>
                            <input type='text' className='form-control' />
                            <input type='button' className='btn btn-info' value='Send' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialogs;