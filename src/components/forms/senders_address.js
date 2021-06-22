import React,{createRef} from 'react';
import { FiEyeOff } from 'react-icons/fi'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Toast } from 'react-bootstrap'

export default ({handleNext,values}) => {
    const arrLength = 5;
    const [validationRefs, setvalidationRefs] = React.useState([]);
    const [required,setrequired]=React.useState({
        name:null,
        street:null,
        state:null,
        zip:null,
        city:null,
    })
    React.useEffect(() => {
        // add or remove refs
        setvalidationRefs(validationRefs => (
          Array(arrLength).fill().map((_, i) => validationRefs[i] || createRef())
        ));
      }, [arrLength]);

    const handleBlur=(name,type)=>{
        let requiredObj={...required};

        if(validationRefs[type].current.value!="")
        {
            requiredObj[name]=true;
            setrequired(requiredObj);
        }
        else
       {
        requiredObj[name]=false;
        setrequired(requiredObj);
       }
    } 
    const checkSubmitValidation=()=>{
        let valid=false;
        let allValid=false;
        let keys = Object.keys( required );
        let i,j;
        for (i = 0; i < arrLength; ++i) {
            if(validationRefs[i].current.value.trim()=="")
            {
                valid=false;
                required[keys[i]]=false;
                for(j=i;j<arrLength;++j)
                {
                        if(validationRefs[j].current.value.trim()=="")
                        {
                            required[keys[j]]=false;
                        }
                }
                break;
            }
           else
           {
               valid=true;
           }
            
          }
          setrequired({...required})
          return valid;
    }
    
    
    return <div>

        <div className="">
            <div className="row ">
                <div className="col-12 ">
                    <div className="container mt-5 w-80per">
                        <h1 >Sender’s Address</h1>
                        <p className="mt-n2">Enter the Sender’s Address</p>

                        <div className="mt-5">
                            <Formik
                                initialValues={{
                                    name: values&&values.from&&values.from.name?values.from.name:"",
                                    street:  values&&values.from&&values.from.street?values.from.street:"",
                                    state:  values&&values.from&&values.from.state?values.from.state:"",
                                    zip:  values&&values.from&&values.from.zip?values.from.zip:"",
                                    city: values&&values.from&&values.from.city?values.from.city:""
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                    handleNext({from:{...values}})

                                }}
                            >
                                {({ errors, touched, getFieldProps, handleSubmit }) => {
                                    // cstErrors = errors;
                                    return (
                                        <Form>

                                            <div className="row ">
                                                <div className="col-md-12  ">
                                                    <label className="">Name</label>
                                                    <input ref={validationRefs[0]} {...getFieldProps("name")} onBlur={()=>{
                                                        handleBlur("name",0);
                                                    }} className="form-control" />
                                                    {validationRefs[0] && validationRefs[0].current &&validationRefs[0].current.value=="" && required.name==false && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>required</div>}
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <label className="">Street</label>
                                                    <input ref={validationRefs[1]}{...getFieldProps("street")}  onBlur={()=>{
                                                        handleBlur("street",1);
                                                    }}  className="form-control" />
                                                    {validationRefs[1] && validationRefs[1].current &&validationRefs[1].current.value=="" && required.street==false && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>required</div>}

                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label className="">City</label>
                                                    <input  ref={validationRefs[2]}  {...getFieldProps("city")} onBlur={()=>{
                                                        handleBlur("city",2);
                                                    }} className="form-control" />
                                                    {validationRefs[2] && validationRefs[2].current &&validationRefs[2].current.value=="" && required.city==false && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>required</div>}

                                                </div>
                                                <div className="col-md-4">
                                                    <label className="">State</label>
                                                    <input  ref={validationRefs[3]} {...getFieldProps("state")}  onBlur={()=>{
                                                        handleBlur("state",3);
                                                    }} className="form-control" />
                                                    {validationRefs[3] && validationRefs[3].current &&validationRefs[3].current.value=="" && required.state==false && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>required</div>}

                                                </div>                    <div className="col-md-4">
                                                    <label className="">Zip</label>
                                                    <input  ref={validationRefs[4]} {...getFieldProps("zip")}  onBlur={()=>{
                                                        handleBlur("zip",4);
                                                    }}   className="form-control" />
                                                    {validationRefs[4] && validationRefs[4].current &&validationRefs[4].current.value=="" && required.zip==false && <div style={{ color: 'red', marginTop: 10, maxWidth: 320 }}>required</div>}

                                                </div>
                                            </div>

                                            <div>
                                    
                      
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
