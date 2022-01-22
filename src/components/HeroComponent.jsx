import React from 'react';
import hero from '../css/Hero.module.css';

const HeroComponent = (props) => {
  
  const reduceSideBarHeight = () =>{
    if(props.windowScrollY > 0){
      const reducer = Math.round(props.windowScrollY/5);
      if((reducer-props.reducerVar) <= 110){
        return {height:`${110-(reducer-props.reducerVar)}px`}
      }else{
        return {height:'0px'}
      }
    }
  }
  const renderBackgroundImage = () => {
    if(props.backgroundImage === 'none' || !props.backgroundImage){
      return {backgroundColor:`${props.backgroundColor}`}
    }else {
      return {backgroundColor:`${props.backgroundColor}`, backgroundImage:`url(${props.backgroundImage})`}
    }
  }
    return ( 
        <div className={hero.container} style={{height:`${props.containerHeight}vh`}}>
        <div className={hero.white_space}>
          <div className={hero.white_space_footBar} style={reduceSideBarHeight()}></div>
        </div>
        <div className={hero.content} style={renderBackgroundImage()}>
          <div className={hero.content_wrapper}>
            {props.children}
          </div>
        </div>
      </div>
     );
}
 
export default HeroComponent;