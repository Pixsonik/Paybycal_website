import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FooterTwo from '../FooterTwo/FooterTwo'
import "./mainblog.css";
import Blogimg from "../../asset/img/banner/user (2).png";
import Slider from "react-slick";
import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function MainBlog() {
    const [newData, setNewData]=useState([])
    const [similar, setSimilar]=useState([])
    const [Bid, setBid]=useState('')
    const [catId, setcatId]=useState('')
    const [NoSimialrCatFound, setNoSimialrCatFound]=useState(false)

    useEffect(()=>{
        oncardClick()
        // similarProductAPI()

        window.scrollTo(0,0)
    },[])

    useEffect(() => {
      similarProductAPI()
      
    }, [catId,Bid])
    

    const location = useLocation()
    let newId = location.state.id
    // console.log('location idddd',newId)
    // const sliderSettings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 560, // Adjust this breakpoint as needed
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 840, // Adjust this breakpoint as needed
    //             settings: {
    //                 slidesToShow: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 1200, // Adjust this breakpoint as needed
    //             settings: {
    //                 slidesToShow: 3,
    //             },
    //         },
    //     ],
    // };
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            dots: true
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const oncardClick = (id)=>{
        console.log('onclick card', id)
        let url = `https://paybycal.com/api/h_single_article_web.php?id=${newId}`
        // let url = `https://paybycal.com/api/h_article_cat_list_web.php?id=11`
        console.log(url);
        axios.get(url).then((resp) => {
            // console.log('new resp oncard', resp.data.data[0])
            setNewData(resp.data.data)
            setBid(resp.data.data[0].id)
            setcatId(resp.data.data[0].cat_id)
            // console.log('similar catid check',Bid, catId)
        }).catch((err) => {
            console.log('err', err)
        })
        // navigate('/mainblog')
    }

    const similarProductAPI = () => {
        let url = `https://paybycal.com/api/h_article_category_list_web_similar.php?c_id=${catId}&b_id=${Bid}`
        console.log('urlll',url)
        axios.get(url).then((resp) => {
            console.log('similar product api', resp.data)
            if(resp.data.status == 'true'){
                setSimilar(resp.data.data)
                setNoSimialrCatFound(false)
                // setCategory(resp.data.data)
                // setCatID(resp.data.data[0].id)
                // changeCategory()
            }else{
                setNoSimialrCatFound(true)
            }
        }).catch((err) => {
            console.log('cat errrorrr', err)
            setNoSimialrCatFound(true)
        })
    }

    const mainpage = (id)=>{
        window.scrollTo(0,0)
        console.log('mainpage func',id)
        let url = `https://paybycal.com/api/h_single_article_web.php?id=${id}`
        // let url = `https://paybycal.com/api/h_article_cat_list_web.php?id=11`
        console.log(url);
        axios.get(url).then((resp) => {
            // console.log('new resp oncard', resp.data.data[0])
            setNewData(resp.data.data)
            setBid(resp.data.data[0].id)
            setcatId(resp.data.data[0].cat_id)
            // console.log('similar catid check',Bid, catId)
        }).catch((err) => {
            console.log('err', err)
        })
    }


    return (
        <>
            <Navbar />
            <div className="container">
                {newData.map((element)=>{
                    return (<div className="mblogMaindiv">
                    <span class="badge text-bg-primary">{element.cat_name}</span>
                    <h5 class="card-title">{element.title}</h5>
                    <div className="authanddate2">
                        <div className="authur2">
                            <div className="blogSingleImg2">
                                <img src={element.author_image? element.author_image: Blogimg} alt="" /></div>
                            <p>{element.author}</p>
                        </div>
                        <div className="blogDate2">{new Date(element.create_time).toDateString().slice(3)}</div>
                    </div>
                    {/* <div className="mblogMainPicDiv">
                        <img src={element.image} alt="" />
                    </div> */}

                    <div id='respBlog'
                        dangerouslySetInnerHTML={{__html: newData[0].content}}
                        />
                    </div>)
                })}
      
                {
                    NoSimialrCatFound ? <h2 className='text-center mt-5 p-3'>No Similar Blogs </h2> : 
                    <Carousel
                        className='mblogslider'
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        // arrows={true}
                        showDots={false}
                        arrows={false}
                        // showDots={false}
                        emulateTouch={true}
                        renderButtonGroupOutside={true}
                        renderDotsOutside={false}
                        // centerMode={centerMode}
                        rewindWithAnimation={true}
                    >
                        {similar.map((item)=>{
                            return (<div className='simcol'> <div onClick={()=>{mainpage(item.id)}} class="card" style={{ }}>
                            <img src={item.image} class="card-img-top simimg" alt="..." />
                            <div class="card-body catbody">
                                <span class="badge text-bg-primary">{item.cat_name}</span>
                                {/* <h5 class="card-title cardT">{item.title}</h5> */}
                                <h5 class="card-title cardT">
                                            {item.title.split(' ').slice(0, 6).join(' ')}
                                            {item.title.split(' ').length > 6 ? '...' : ''}
                                            </h5>
                                <div className="authanddate">
                                    <div className="authur">
                                        <div className="blogSingleImg">
                                            <img src={item.author_image? item.author_image: Blogimg} alt="" /></div>
                                        <p>{item.author}</p>
                                    </div>
                                    <div className="blogDate">{new Date(item.create_time).toDateString().slice(3)}</div>
                                </div>
                            </div>
                        </div></div>)
                        })}

                
                    </Carousel>
                }  
            </div>
            <FooterTwo />
        </>
    )
}
