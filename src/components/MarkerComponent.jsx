import React, { useState, useRef} from 'react';
import useOutsideAlerter from './HOC/useOutsideAlerter';
import marker from '../css/Marker.module.css';

const MarkerComponent = ({position,detailShowLeft}) => {
    const [detailOpen, setDetailOpen] = useState(false)


    const handleToggle = () => {
        setDetailOpen(prev => !prev)
    }

    const closeMenu = () => {
        setDetailOpen(false)
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter({wrapperRef,closeMenu});

    return ( 
        <>
            <div className={marker.markerContainer} ref={wrapperRef} style={position}>
                <div className={marker.marker} onClick={handleToggle}/>
            </div>

            <div className={marker.detailContainer} style={position}>
                <div className={`${marker.markerDetail} ${detailOpen ? ` ${marker.showDetail}` : ""} ${detailShowLeft ? `${marker.markerDetailShowLeftSide}`:''}`}>
                    <h4>Project Name</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        </>

     );
}
 
export default MarkerComponent;