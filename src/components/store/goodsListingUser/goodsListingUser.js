import React from 'react';
import Header from '../../../header/header';

const GoodsListingUser = () => {
    return (
        <>
            <Header />
            <div className="px-5 my-3">
                <div className="col-md-8 text-center mx-auto">
                    <img src="tonyStark.png" alt="photoimg" className="rounded-circle"
                        style={{ width: '100px', border: "3px solid green!important;" }} />
                    <h3 className="mb-0">Jane Hunter</h3>
                    <h6 className="text-muted">Jackarta, Indonesia</h6>
                    <div className="col-12 my-4">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className="text-success">88%</h4>
                                <h6 className="text-muted">Positive feedback</h6>
                            </div>
                            <div className="col-md-4">
                                <h4 className="text-info">112</h4>
                                <h6 className="text-muted">Sales</h6>
                            </div>
                            <div className="col-md-4 bg-info text-light">
                                <h4>12</h4>
                                <h6 className="text-light font-weight-normal">Active listings</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="container font-weight-bold col-md-10">SAVED ITEMS <span className="font-weight-normal">(34)</span></p>
                <div className="card-group container my-3 col-md-10">
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                </div>
                <div className="card-group container my-3 col-md-10">
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="tonyStark.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <i className="position-absolute btn btn-info rounded-circle fas fa-heart"
                                style={{ bottom: '80px', right: '10px' }}></i>
                            <h5 className="card-title text-muted">Item Name</h5>
                            <p className="card-text font-weight-bold">555.99$</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default GoodsListingUser;