import React from 'react';
import services from '../css/Services.module.css';
import Item from '../components/ServicesComponent/item';

const ServicesComponent = (props) => {

    return (
        <>
        {props.title}
        <div className={services.container}>
          {props.data.map((item,index)=>
            <div className={services.items} key={index}>
              <Item
                imagePath={item.imagePath}
                iconAlt={item.iconAlt}
                title={item.title}
                description={item.description}
                subDescription1={item.subDescription1}
                subDescription2={item.subDescription2}
                button={item.button}
              />
            </div>
          )}
        </div>
        </>
      );
}
 
export default ServicesComponent;