import React from 'react';
import hero from '../css/Hero1.module.css'

const HeroComponent1 = () => {
    return (
        <div className={hero.container}>
          <div className={hero.content}>
            <h1 className={hero.title}>MUJI Townhome</h1>
            <p className={hero.subTitle}>Modern Style</p>
            <p className={hero.description}>Is well crafted 20 boutique townhouse development that will last to enhance the true essence of Zen living and offer flexibility that can adapt to changing lifestyle and needs of the whole family. </p>
          </div>
        </div>
      );
}
 
export default HeroComponent1;