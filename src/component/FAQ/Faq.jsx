import React,{ useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FooterTwo from '../FooterTwo/FooterTwo'
import axios from "axios";
import { useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./faq.css";

export default function Faq() {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
}, [])

  const getData = () => {
    let url = "https://www.paybycal.com/api/get_faq.php"

    axios.post(url).then((resp) => {
        console.log('new faq data', resp.data.data)
        if(resp.data.status == 'true'){

        setData(resp.data.data)
        // changeCategory()
        }else{}
    }).catch((err) => {
        console.log('cat errrorrr', err)
    })
}


  return (
    <>
    <Navbar />
   <div  className="faq">
    <h1 style={{textAlign:'center', padding:'3px 0px',margin:'20px'}}>FAQ</h1>
   {data.map((element, index)=>{
      return(
        <Accordion allowMultipleExpanded={false} allowZeroExpanded>
            <AccordionItem key={element.id}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {element.faq_title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    
                    {element.faq_conent}
                    
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      )
    })}
   
    

    {/* {data.map((element, index)=>{
      return(
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id={index}>
            <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               {element.faq_title}
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {element.faq_conent}
            </div>
          </div>
        </div>
      </div>
      )
    })} */}


    {/* <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div> */}



</div>

    <FooterTwo />
    </>
  )
}

// display:'flex',justifyContent:'center',alignItems:'center'