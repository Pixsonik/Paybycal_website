import React from 'react'
import './How.css';
import oneImage from '../../asset/img/How/oneimg.png' 
import twoImage from '../../asset/img/How/howTwoImg.png'

const How = () => {
  return (
    <div >
        <div className='HowTitle'>How it works</div>
        <div className='container firstCont'>
            <p className='one'>1</p>
            <div className='oneContent'>
                <p  className='oneTitle'>complete your activities</p>
                <p className='oneText'>It pays to complete your activities</p>
            </div>
            <img src={oneImage} alt="img" className='HowImgOne' />
        </div>
        <div className='container secondCont'>
        <img src={twoImage} alt="2img" />
          <div className='secContent'>
            <p className='howSecTitle'>earn calcoins</p>
            <p className='howSecText'>start earning your calcoins today</p>
          </div>
          <p className='one'>2</p>
        </div>
        <div className='container firstCont'>
            <p className='one'>3</p>
            <div className='oneContent col-4'>
                <p  className='oneTitle'>Spend on Paybycal Store</p>
                <p className='oneText'>Choose from variety of branded goods and services in our store from supplements to organic products, wearables, online trainers, nutritionists and more!</p>
            </div>
            <img src={oneImage} alt="img" className='HowImgOne' />
        </div>
    </div>
  )
}

export default How