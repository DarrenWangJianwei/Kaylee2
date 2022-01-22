import React,{useEffect,useState} from 'react';
import Lottie from 'react-lottie';
import * as location from '../Animation/1012-construction-site.json' 
import * as success from '../Animation/55905-check.json'

const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}
const LoadingComponent = (props) => {
    const [loading, setLoading] = useState(undefined);

    useEffect(()=>{
        let timer1 = setTimeout(() => setLoading(true), 2000);
        return () => {
            clearTimeout(timer1);
          };
    },[]);
    return (
        <>
            {!props.completed ? 
                (<div style={{height:'100vh', backgroundColor:'#373a33', display:'grid', placeContent:'center'}}>
                        {!loading ? 
                            (<Lottie options={defaultOptions1} height={210} width={'auto'}/>):
                            (<Lottie options={defaultOptions2} height={210} width={'auto'}/>)
                        }
                </div>):
                (props.children)
            }
        </>
    )
}
 
export default LoadingComponent;