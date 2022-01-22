import React from 'react';
import '../css/gallery.css'

const GalleryComponent = (props) => {
  const renderImageContent = (item, index) => {
    return (
      <div key={index} className='img-hover-container'>
        <div className='img-hover-zoom' onClick={(e) => redirectTo(e, index)}>
          <img src={item.src} key={item.src} alt={item.alt}/>
        </div>
        <div className='img-hover-info'>
          <h5>{item.title}</h5>
          <p>{item.brand}</p>
          <img src='./images/arrow-right.png' alt='arrow right icon'/>
        </div>
      </div>
    ) 
  }
  
  const redirectTo = (e, index) => {
    console.log('e',e)
    console.log('index',index);
  }

  return (
    <div className="gallery-container">
      <h1 className='title'>Gallery</h1>
      <div className="gallery-grid">
        {props.imgUrls.map(renderImageContent)}
      </div>
    </div>
  )
}
 
export default GalleryComponent;