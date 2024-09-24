import thankyouImage from '../../assets/images/aboard.jpg'
import NavMenu from '../../navigations/Nav_Menu'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotties/Animation - 1726974530888.json'

export default function ReaderThankyou ()
{
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   
    return (
        
        <>

            <NavMenu/>
        <div className="thankyou">
        <div className='thanks-image'>
       
        <div>
        <Lottie options={defaultOptions}
              height={100}
              width={100}
             />
    <p className='desc-thanks text-center'> Now you can follow bloggers, comment, like and share blogs</p>
        </div>
        </div>
        </div>
        </>
    )
}