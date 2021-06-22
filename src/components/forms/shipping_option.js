import React from 'react';
import { FiEyeOff } from 'react-icons/fi'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Toast ,ButtonGroup,Button} from 'react-bootstrap'
const DisplayingErrorMessagesSchema = Yup.object().shape({
});
export default ({handleNext,handlePrevious,values}) => {
    const shippingRate = 0.40;

    return <div>

        <div className="">
            <div className="row ">
                <div className="col-12 ">
                    <div className="container mt-5 w-80per">
                        <h1 >Shipping Option</h1>
                        <p className="mt-n2">Select Shipping Option</p>

                        <div className="mt-5">
                            <Formik
                                initialValues={{
                                    shippingOption:values&&values.shippingOption?values.shippingOption:1,
                                    shippingCost :values&&values.shippingCost?values.shippingCost:0
                                }}
                                validationSchema={DisplayingErrorMessagesSchema}
                                onSubmit={async (formvalues, { setSubmitting }) => {
                                    console.log(formvalues,"shipping")
                                      handleNext({...formvalues,shippingCost: values&&values.weight?parseFloat(values.weight):0 * shippingRate * (formvalues.shippingOption == 1? 1 : 1.5)})
                                      console.log(values.weight) 
                                      console.log(formvalues.shippingOption == 1? 1 : 2222.5) 
                                      console.log(values&&values.weight?parseFloat(values.weight):0 * shippingRate * (formvalues.shippingOption == 1? 1 : 2222.5)) 
                                      // alert(formvalues.shippingOption == 1? 1 : 2222.5)
                                }}
                            >
                                {({ errors, touched, getFieldProps, handleSubmit ,values,setFieldValue}) => {
                                    // cstErrors = errors;

                                    return (
                                        <Form>

                                            <div className="row ">
                                               <div className="col-md-12">
                                               <ButtonGroup className="grp-btns">
                                                    <Button values={values.shippingOption==1?true:false} onClick={()=>setFieldValue("shippingOption",1)} className="grp-btn">Ground
        <input   type="radio" name="radioButtonSet" className="ml-3" value='1' standalone checked={values.shippingOption==1?true:false} />
                                                    </Button>
                                                    <Button className="grp-btn" values={values.shippingOption==2?true:false}  onClick={()=>setFieldValue("shippingOption",2)}>Priority
        <input   type="radio" name="radioButtonSet" className="ml-3" value='2' standalone checked={values.shippingOption==2?true:false} />
                                                    </Button>
                                                </ButtonGroup>
                                               </div>
                                            </div>

                                            <div>
                                            
                                            <button type="button" onClick={()=>handlePrevious()} className="btn bg-main mt-4 ml-2" >
                                            Previous
                
                                            </button>
                                            <button type="button" onClick={handleSubmit} className="btn bg-main mt-4 ml-3" >
                                                                Next
                                            </button>
                                            </div>


                                        </Form>
                                    )

                                }}
                            </Formik>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
}
