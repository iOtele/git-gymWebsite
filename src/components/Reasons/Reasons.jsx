import React from 'react'
import './Reasons.css'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import NumberCounter from 'number-counter'

const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
    <div className="left-r">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
    </div>
    <div className="right-r">
        <span>Some reasons</span>

    <div >
        <span className="stroke-text">Why </span>
        <span>choose us</span>
    </div>
    <div className='details-r'>
    <div><img src={tick} alt="" /><span>Over <NumberCounter className='number' end={140} start={100} delays='4' preFix='+'/> expert Coaches</span> </div>
    <div><img src={tick} alt="" /><span>Train smarter and Faster than before</span></div>
    <div><img src={tick} alt="" /><span>1 free program for new member</span></div>
    <div><img src={tick} alt="" /><span>Reliable partner</span></div>    
    </div>
    <span style={{
      color:"var(--gray)", fontWeight:"normal"
    }}>OUR PARTNERS</span>
    <div className="partners">
      <img src={nb} alt="" />
      <img src={adidas} alt="" />
      <img src={nike} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Reasons