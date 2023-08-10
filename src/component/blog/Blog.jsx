import React, { useState } from 'react'
import "./blog.css";
import Blogimg from "../../asset/img/blogs/m-post-card-overlay.png";
import Blogimg2 from "../../asset/img/blogs/Rectangle 38.png";
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import FooterTwo from '../FooterTwo/FooterTwo'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import ReactHtmlParser from 'react-html-parser'


export default function Blog() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = () => {
        let url = "https://paybycal.com/api/h_article_cat_list_web.php"
        axios.get(url).then((resp) => {
            console.log('new resp', resp.data)
            setData(resp.data.data)
        }).catch((err) => {
            console.log('err', err)
        })
    }
    const oncardClick = (id)=>{
        console.log('onclick card')
        let url = `https://paybycal.com/api/h_single_article_web.php?id=${id}`
        // let url = `https://paybycal.com/api/h_single_article_web.php?id=20`
        console.log(url);
        axios.get(url).then((resp) => {
            console.log('new resp', resp.data.data)
            // setData(resp.data.data)
            // onClick={oncardClick}
        }).catch((err) => {
            console.log('err', err)
        })
        navigate('/mainblog')
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            dots: true
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
        <Navbar/>
            <h1 className='blogHeading'>Blogs</h1>

        {/* category sections */}
        <div className="categoryDivv">
        <Carousel
                    className='catblogslider'
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

                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    <div class="card catmaincard" style={{ width: '25rem' }}>
                        <img src={Blogimg2} class="card-img-top catmainimg" alt="..." />
                        <div class="card-body catbody">
                            <h5 class="card-title cathead">Mental health & mindfulness</h5>
                        </div>
                    </div>
                    
                   
                </Carousel>
                </div>
            <div className="blogMainPicDiv">
                <img src={Blogimg} alt="" />
            </div>
            <div className="container allblogs">
                <div className="row blogsRow">
                    {data.map((element) => {
                        console.log('--element',element);
                        return (<div className="col-md-4">
                            {/* <a href={`https://paybycal.com/api/h_single_article_web.php?id=${element.id}`} target='_blank'> */}
                            <div  onClick={()=>oncardClick(element.id)} class="card" style={{ width: '25rem' }}>
                                <img src={Blogimg} class="card-img-top" alt="..." />
                                <div class="card-body">
                                <span class="badge text-bg-primary">Primary</span>
                                    <h5 class="card-title">{element.title}</h5>
                                    {/* <p class="card-text">{ReactHtmlParser(element.content)}</p> */}
                                    {/* <div class="card-text" dangerouslySetInnerHTML={element.content} /> */}
                                    {/* <a target='_blank' href={`https://paybycal.com/api/h_single_article_web.php?id=${element.id}`} class="btn btn-primary">Go somewhere</a> */}
                                    <div className="authanddate">
                                        <div className="authur">
                                            <div className="blogSingleImg">
                                            <img src={Blogimg} alt="" /></div>
                                            <p>Ernie Smith</p>
                                        </div>
                                        <div className="blogDate">August 20, 2022</div>
                                    </div>
                                </div>
                            </div>
                            {/* </a> */}
                        </div>)
                    })}

                </div>
            </div>
            <FooterTwo/>
        </>
    )
}
