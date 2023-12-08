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
</div>

    <FooterTwo />
    </>
  )
}

// display:'flex',justifyContent:'center',alignItems:'center'