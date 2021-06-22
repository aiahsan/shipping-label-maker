import React from 'react';
import { FiEyeOff } from 'react-icons/fi'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Toast } from 'react-bootstrap'

export default ({handleNext,handlePrevious,values}) => {

    const validationRefs=React.useRef();
    const [required,setrequired]=React.useState(null)
  
    const handleBlur=()=>{

        if(validationRefs.current.value!="")
        {
            
            setrequired(true);
        }
        else
       {

        setrequired(false);
       }
    } 
    const checkSubmitValidation=()=>{
        if(validationRefs.current.value.trim()=="")
          return false;
          else
          return true
    }

    return <div>

        <div className="">
            <div className="row ">
                <div className="col-12 ">
                    <div className="container mt-5 w-80per">
                        <h1 >Package Weight</h1>
                        <p className="mt-n2">Enter Package weight</p>

                        <div className="mt-5">
                            <Formik
                                initialValues={{
                                    weight: values&&values.weight?values.weight:"",
                                  
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                    handleNext(values)

                                }}
                            >
                                {({ errors, touched, getFieldProps, handleSubmit }) => {
                                    // cstErrors = errors;

                                    return (
                                        <Form>

                                            <div className="row ">
                                                <div className="col-md-12  ">
                                                    <label className="">Weight</label>
                                                    <input ref={validationRefs} {...getFieldProps("weight")} onBlur={()=>{
                                                        handleBlur("weight");
                                                    }}  className="form-control" />
                                                    {validationRefs && validationRefs.current &&validationRefs.current.value=="" && required==false && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>required</div>}
                                                </div>
                                            </div>
                                          
                                            <div>
                                            
                                            <button type="button" onClick={()=>handlePrevious()} className="btn bg-main mt-4 ml-2" >
                                            Previous
                
                                            </button>
                                            <button type="button" onClick={(e)=>checkSubmitValidation()&&handleSubmit(e)} className="btn bg-main mt-4 ml-3" >
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
