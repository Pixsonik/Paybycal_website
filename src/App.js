// import React from "react";
// // import Navbar from "./component/Navbar/Navbar";
// import Navbar from './component/Navbar/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from "./component/Banner/Banner";
// import AboutContent from "./component/About/About";
// import How from "./component/How/How";
// import IndividualIntervalsExample from "./component/Slider/Slider";
// import CommingSoon from "./component/CommingSoon/CommingSoon";
// import Privacy from "./component/Privacy/Privacy";
// import FreeCoins from "./component/FreeCoins/FreeCoins";
// import FooterTwo from "./component/FooterTwo/FooterTwo";
// // import contact from "./component/Contact/contact";

// import './style.css';

// const App = () => {
//   return <>
//     {/* <Navbar/> */}
//     <Navbar/>
//     <Banner/>
//     <div style={{background: "linear-gradient(104.31deg, #F95B30 5.98%, #D81C65 93.2%)"}}>
//     <AboutContent/>
//     <How/>
//     <IndividualIntervalsExample/>
//     {/* <CommingSoon/> */}
//     </div>
//     <Privacy/>
//     <div style={{background: "linear-gradient(104.31deg, #F95B30 5.98%, #D81C65 93.2%)"}}>
//       <FreeCoins/>
//     </div>
//     <FooterTwo/>
//   </>;
// };

// export default App;

import React from 'react'
import './style.css';
import Pageroute from './Route/Route';

const App = () => {
  return (
    <div>
         <Pageroute/>   
    </div>
  )
}

export default App