import React,{useState} from 'react';
import testimonials from '../css/Testimonials.module.css'

const TestimonialsComponent = ({data}) => {
    const [stateIndex,setStateIndex] = useState(0);
    
    const handleClickLeft = (e) => {
        e.preventDefault();
        if(stateIndex === 0){
            setStateIndex(data.length-1);
        }else{
            setStateIndex(stateIndex-1);
        }
    };
    
    const handleClickRight = (e) => {
        e.preventDefault();
        if(stateIndex === data.length - 1){
            setStateIndex(0);
        }else{
            setStateIndex(stateIndex+1);
        }
    };
    return (
        <div className={testimonials.container}>
            <h1 className={testimonials.title}>Testimonials</h1>
            <p className={testimonials.subTitle} >SOME OF THE APPRECIATION WE’VE RECEIVED OVER THE YEARS</p>
            <div className={testimonials.items}>
                {data.map((item,index)=>(
                    <div key={index} className={`${stateIndex === index ? testimonials.visible : testimonials.invisible} ${testimonials.item}`}>
                        <p className={testimonials.content}>{item.content}</p>
                        <div className={testimonials.author}>
                            <div className={testimonials.image} style={{backgroundImage:`url(${item.photoUrl})`}}/>
                            <p className={testimonials.name}>{item.name}</p>
                                <p className={testimonials.occupation}>{item.occupation}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={testimonials.arrowsContainer}>
                <div className={testimonials.buttonArrowLeft}>
                    <a href="#Home" onClick={handleClickLeft}><span className={testimonials.left}></span></a>
                </div>
                <div className={testimonials.buttonArrowRight}>
                    <a href="#Home" onClick={handleClickRight}><span className={testimonials.right}></span></a>
                </div>
            </div>
        </div>
      );
}
 
export default TestimonialsComponent;