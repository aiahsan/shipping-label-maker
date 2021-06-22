import React from 'react';
import {FiEyeOff} from 'react-icons/fi'
import Stepper from 'react-stepper-horizontal'
import SenderForm from '../components/forms/senders_address'
import ReceiverForm from '../components/forms/receivers_address'
import WeightForm from '../components/forms/weight_form'
import ShippingOption from '../components/forms/shipping_option'
import Review from '../components/forms/review'
const MainContetn=(step,handlePrevious,handleNext,values)=>{
    switch(step)
    {
        case 0:{
            return  <SenderForm handleNext={handleNext} values={values} />
        }   
       
        case 1:{
            return  <ReceiverForm handlePrevious={handlePrevious} handleNext={handleNext} values={values}/>
        }   
       
        case 2:{
            return  <WeightForm handlePrevious={handlePrevious} handleNext={handleNext} values={values}/>
                }   
       
        case 3:{
            return  <ShippingOption handlePrevious={handlePrevious} handleNext={handleNext} values={values}/>
                }   
       
        case 4:{
            return  <Review handlePrevious={handlePrevious} values={values} />
        }   
       
    }
}

export default () => {
    const [step,setStep]=React.useState(0);
    
    const [dataForm,setdataForm]=React.useState({
        from:{name:'',street:'',city:'',zip:''},
        to:{name:'',street:'',city:'',zip:''},
        weight:0,
        shippingOption:0,
        shippingCost:0
    });

    const handleNext=(data)=>
    {
        setdataForm({...dataForm,...data})
        setStep(step+1);
    }
    const handlePrevious=()=>
    {
        setdataForm({...dataForm});
        setStep(step-1);
        
    }
    return <div className="main-page" >
        <div className="mt-5 container">
            
        <div className="w-100">
            <div className="d-flex justify-content-center flex-column align-items-center">
            <h1 className="sadbasiu83120ikas3-asdn3u">Shipping Label Maker</h1>

            <Stepper
      
          steps={3}
          activeStep={step}
          activeColor="#f3508d"
          activeTitleColor="white"
          completeColor="#5064f3"
          defaultBarColor="#FFFFFF"
          completeBarColor="#a1a7bd"
          defaultColor="#a0a0a0"
          defaultTitleColor="#d6d6d6"
          completeTitleColor="#a1a7bd"
          activeBarColor="white"
          barStyle="solid"
          
          circleFontSize={16}
          steps={ [{title: 'Sender’s Address'}, {title: 'Receiver’s Address'}, {title: 'Package Weight'}, {title: 'Shipping option'}, {title: 'Review and Confirm'}] } 
        />
            </div>
       

                {
                    MainContetn(step,handlePrevious,handleNext,dataForm)
                }


          </div>
        </div>
    </div>
}
