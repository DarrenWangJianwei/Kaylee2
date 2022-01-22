import banner from '../css/Banner.module.css';

const BannerComponent = (props) => {
    return (
        <div  className={banner.container} style={{backgroundImage:`url(${props.backgroundImage})`}}>
            <h1 className='title'>{props.content}</h1>
        </div>
      );
}
export default BannerComponent;