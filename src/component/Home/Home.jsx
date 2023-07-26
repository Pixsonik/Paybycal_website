import React from 'react'
import Navbar from '../Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner/Banner'
import About from '../About/About'
import How from '../How/How'
import IndividualIntervalsExample from '../Slider/Slider'
import Comming from '../CommingSoon/CommingSoon'
import Privacy from '../Privacy/Privacy'
import Freecoins from '../FreeCoins/FreeCoins'
import FooterTwo from '../FooterTwo/FooterTwo'


const Home = () => {
  return (
      <>
      <Navbar/>
      <Banner/>
      <div  style={{background: "linear-gradient(104.31deg, #F95B30 5.98%, #D81C65 93.2%)"}}>
        <About/>
        <How/>
        <IndividualIntervalsExample/>
        <Comming/>
      </div>
      <Privacy/>
      <div  style={{background: "linear-gradient(104.31deg, #F95B30 5.98%, #D81C65 93.2%)"}}>
          <Freecoins/>
      </div>
      <FooterTwo/>
    </>
  )
}

export default Home