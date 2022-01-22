import React from 'react';
import NavComponent from '../components/NavComponent';
import MarkerComponent from '../components/MarkerComponent';
import project from '../css/Project.module.css'
import imageMap from '../images/hero_map.png';
import imageLogo from '../images/logo_1.png';

const Home = () => {
    return ( 
        <div className={project.container}>
            <div className={project.navContainer}>
                <div className={project.logo}>
                    <img src={imageLogo} alt="TK Red" width='60%'></img>
                </div>
                <div className={project.nav}>
                    <NavComponent/>
                </div>
            </div>

            <div className={project.map}>
                {/*width:1100px ---- width:300px*/}
                <img src={imageMap} alt="map of vancvouer" useMap="#map"/>
                {/* 120px 190px ---- 25px 63px*/}
                <MarkerComponent position={{top:'14%',left:'20%'}}/>
                {/* 415px 190px */}
                <MarkerComponent position={{top:'46.5%',left:'20%'}}/>
                {/* 400px 240px */}
                <MarkerComponent position={{top:'45%',left:'25%'}}/>
                {/* 360px 565px */}
                <MarkerComponent position={{top:'40.5%',left:'58%'}} detailShowLeft={true}/>
                {/* 570px 705px */}
                <MarkerComponent position={{top:'63.5%',left:'71.5%'}} detailShowLeft={true}/>
                {/* 625px 880px */}
                <MarkerComponent position={{top:'69.5%',left:'89.5%'}} detailShowLeft={true}/>
                {/* 435px 950px */}
                <MarkerComponent position={{top:'48.5%',left:'96%'}} detailShowLeft={true}/>
                <div className={project.subLogo}/>    
            </div>

        </div>
    );
}
 
export default Home;