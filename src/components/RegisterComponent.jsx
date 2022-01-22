import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import register from '../css/Register.module.css'
import{ init,send } from 'emailjs-com';

const RegisterComponent = () => {
    const [formData,setFormData] = useState({name:'',cell:'',email:'',firstTimeHomeBuyer:false,haveARealtor:false});
    const [sendSuccess,setSendSuccess] = useState(false);
    init("user_fPxhevcL0lSA01h2D8Am9");
    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: !formData[e.target.name]
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(sendSuccess){
            return toast.warn('You did already', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        send(
            'service_u4kg8ms',
            'template_jyjh9un',
            formData,
            'user_fPxhevcL0lSA01h2D8Am9'
          )
            .then((response) => {
                toast.success('SUCCESS!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setSendSuccess(true);
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                toast.error('UNSUCCESS! Please try again.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
              console.log('FAILED...', err);
            });
    };
    
    return (  
        <>
        
        <div className={register.container}>
            <div className={register.whiteBorder} />
            <form className={register.form} onSubmit={onSubmit}>
                <legend>REGISTER NOW</legend>
                <div className={register.formLayout}>                    
                    <label htmlFor="name">NAME:</label>
                    <input type="text" id="name" name='name' onChange={handleInputChange}  value={formData.name}/>
                    <label htmlFor="cell">CELL:</label>
                    <input type="text" id="cell" name='cell' onChange={handleInputChange}  value={formData.cell}/>
                    <label htmlFor="email">EMAIL:</label>
                    <input type="text" id="email" name='email' onChange={handleInputChange}  value={formData.email}/>
                    <label htmlFor="firstTimeHomeBuyer">First Time Home Buyer:</label>
                    <input type="checkbox" id='firstTimeHomeBuyer' name='firstTimeHomeBuyer' onChange={handleCheckboxChange} value={formData.firstTimeHomeBuyer}/>
                    <label htmlFor="haveARealtor">Do you have a realtor:</label>
                    <input type="checkbox" id='haveARealtor' name='haveARealtor'  onChange={handleCheckboxChange} value={formData.haveARealtor}/>
                </div>
                <button className='primaryButton' type='submit'>{sendSuccess===true ? 'Already Send':'SEND'}</button>
            </form>
        </div>
        <ToastContainer />
        </>
    );
}
 
export default RegisterComponent;