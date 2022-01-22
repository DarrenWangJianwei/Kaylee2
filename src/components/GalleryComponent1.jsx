import React from 'react';
import '../css/gallery1.css'

const GalleryComponent = (props) => {
  const renderImageContent = (item, index) => {
    return (
      <div key={index} className={`img-hover-container ${item.gridItem}`} onClick={(e) => handleClick(item)}>
        <div className='img-hover-zoom' style={{backgroundImage:`url(${item.src})`}}/>
        <div className='img-hover-info'>
          <h5>{item.title}</h5>
          <p>{item.brand}</p>
          <img src='./images/arrow-right.png' alt='arrow right icon'/>
        </div>
      </div>
    ) 
  }
  
  const handleClick = (item) => {
    props.setSelectedImg(item.src)
  }

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {props.imgUrls.map(renderImageContent)}
        <div className='content'><p>{props.content}</p></div>
      </div>
    </div>
  )
}
 
export default GalleryComponent;