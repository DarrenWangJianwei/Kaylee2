import React from 'react';
import hero from '../css/Hero2.module.css'
import MUJI_hero from '../images/MUJI_hero.png'
const HeroComponent2 = () => {
    return (
        <>
        <div className={hero.container}>
          <div className={hero.backgroundImage}>
            <div><img src={MUJI_hero} alt='MUJI hero' width='30%'/></div>
            <h1 className={hero.title2}>COMING IN 2023</h1>
          </div>
        </div>
        <div className={hero.subContainer}>
            <div className={hero.subContent}>
                <h2>MUJI Townhome</h2>
                <p>Is well crafted 20 boutique townhouse development that will last to enhance the true essence of Zen living and offer flexibility that can adapt to changing lifestyle and needs of the whole family.</p>
            </div>
            <div className={hero.subImage} />
        </div>
        </>
      );
}
 
export default HeroComponent2;