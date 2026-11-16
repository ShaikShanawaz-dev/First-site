import react from 'react';
import kfc from '../images/kfc_png.webp';
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";


const Hero = () => {
  return (
    <div className='hero'>
      <div className='left'>
       <span className='title'>TASTE THE BEST KFC CHICKEN</span>
       <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
       <div className='btns'>
        <button className='btn1'>ORDERNOW</button>
        <button className='btn2'>KFC CHICKEN</button>
       </div>
       <div className='social'>
        <span className='social-1'>ALSO AVILABLE ON</span>
        <div className='social-icons'>
         <img src={swiggy} alt='Swiggy'></img>
         <img src={zomato} alt='Zomato'></img>
        </div>
       </div>
      </div>
      <div className='right'>
        <img src={kfc}></img>
      </div>
    </div>
  );
};

export default Hero;