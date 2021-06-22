import React from 'react';

export default ({handlePrevious,values}) => {


    return <div>

        <div className="">
            <div className="row ">
                <div className="col-12 ">
                    <div className="container mt-5 w-80per">
                        <h1 >Review and Confirm</h1>
                        <p className="mt-n2">Review your order and Confirm</p>

                        <div className="mt-5">
                            <div className="row">
                                <div className="col-md-8">
                                <div className="row">
                                <div className="col-md-12">
                                    <h3>Sender’s Address:</h3>
                                    <h5>Name: <span>{values.from.name}</span></h5>
                                    <h5>Street: <span>{values.from.stree}</span></h5>
                                    
                                </div>
                                <div className="col-md-12">
                                <div className="row">
                                <div className="col-md-4">
                                <h5>City:<span> {values.from.city}</span></h5>
                                </div>
                                <div className="col-md-4">
                                <h5>State: <span>{values.from.state}</span></h5>
                                </div>
                                <div className="col-md-4">
                                <h5>Zip: <span>{values.from.zip}</span></h5>
                                </div>
                                </div>
                                </div>
                                
                                <div className="col-md-12 mt-4">
                                    <h3>Receiver’s Address:</h3>
                                    <h5>Name: <span>{values.to.name}</span></h5>
                                    <h5>Street: <span>{values.to.street}</span></h5>
                                    
                                </div>
                                <div className="col-md-12">
                                <div className="row">
                                <div className="col-md-4">
                                <h5>City: <span>{values.to.city}</span></h5>
                                </div>
                                <div className="col-md-4">
                                <h5>State: <span>{values.to.state}</span></h5>
                                </div>
                                <div className="col-md-4">
                                <h5>Zip: <span>{values.to.zip}</span></h5>
                                </div>
                                </div>
                                </div>
                                
                            </div>
                      
                                </div>
                                <div className="col-md-4">
                                    <h5>Shipping Date: <span></span></h5>
                                    <h5>Weight: <span>{values.weight}</span></h5>
                                    <h5>Shipping Typet: <span>{values.shippingOption&&values.shippingOption==1?"Ground":"Priority"}</span></h5>
                                    <h5>Total Amount: <span>{values.shippingCost}</span></h5>
                                </div>
                                
                                </div> 
                         <div>
                           <button onClick={()=>handlePrevious()} type="button"  className="btn bg-main mt-4" >
                                            Previous  
                            </button>
                            <button type="button"  className="btn bg-main mt-4 ml-2" >
                            Confirm 

                            </button>
                                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
}
