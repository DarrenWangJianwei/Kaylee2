import React from 'react';
import Swiper from 'react-id-swiper';
import portfolio from '../css/Portfolio.module.css';
import 'swiper/css/swiper.css';

function PortfolioComponent(props) {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        }
      }
      
      return(
        <div className={portfolio.container}>
          <h1 className='title centrelizeText'>Portfolio</h1>
          <Swiper {...params}>
            {props.images.map((image,index)=>(
              <div key={index} style={{ backgroundImage:`url(${image.path})`,  backgroundSize:'600px', width:'600px',height:'400px'}} />
            ))}
          </Swiper>
        </div>

      )
}

export default PortfolioComponent;