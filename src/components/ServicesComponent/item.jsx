import React from 'react';

const Item = (props) => {
    return (
        <>
            {props.imagePath && <button  className='buttonWithImage'><img src={props.imagePath} alt={props.iconAlt} /></button>}
            {props.title &&<h2 className='hover-underline-animation'>{props.title}</h2>}
            {props.description &&<div className='descriptionDiv'>
                <p>{props.description}</p>
            </div>}
            {props.subDescription1 && <p className='subDescription'>{props.subDescription1}</p>}
            {props.subDescription2 && <p className='subDescription'>{props.subDescription1}</p>}
            {props.button && <button className='primaryButton margin-top-2rem'>{props.button}</button>}
        </>
      );
}
 
export default Item;