import React from 'react';
import '../css/Modal.css'

const Modal = (props) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            props.setSelectedImg(null)
        }
    }
    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={props.selectedImg} alt='Selected Pic' />
        </div>
      );
}
 
export default Modal;