import React from 'react';
import subHero from '../css/SubHero.module.css';

const SubHeroComponent = (props) => {
    return ( 
        <div className={subHero.subContainer}>
            <div className={subHero.subContent}>
                <h5>{props.title}</h5>
                <p>{props.content}</p>
                <div className={subHero.subContentBackground} style={{backgroundColor:`${props.backgroundColor}`}}/>
            </div>
            <div className={subHero.profolio}>
                <div className={`descriptionDiv ${subHero.profolio_description}`}>
                    {props.children}
                </div>
                <div className={subHero.profolio_image} style={{backgroundImage:`url(${props.profolioImage})`}}>
                    <div className={subHero.profolio_image_description}>
                        <h5>{props.profolioName}</h5>
                        {props.profolioOccupation && <p className='subDescription'>&nbsp;{props.profolioOccupation}&nbsp;</p>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SubHeroComponent;