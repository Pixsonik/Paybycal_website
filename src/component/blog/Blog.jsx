import React, { useState } from 'react'
import "./blog.css";
import Blogimg from "../../asset/img/banner/user (2).png";
import Blogimg2 from "../../asset/img/blogs/Rectangle 38.png";
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import FooterTwo from '../FooterTwo/FooterTwo'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainBlog from './MainBlog';
import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';

// import ReactHtmlParser from 'react-html-parser'


export default function Blog() {
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const [catID, setCatID] = useState(1)
    const [noArticle, setNOarticle] = useState(false)
    const [mainBlog, setMainblog] = useState([])
    const [catshow, setCatshow]= useState(false)
    const [view, setView]= useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getCategory()
        mainBlogSlider()
        // fetchBlogs()
    }, [])

    useEffect(() => {
        changeCategory()
    }, [catID])


    const getCategory = () => {
        let url = "https://paybycal.com/api/h_article_category_list_web.php"

        axios.get(url).then((resp) => {
            console.log('new categoryyyyyy', resp.data)
            // if(resp.data.status == 'true'){

            setCategory(resp.data.data)
            // setCatID(resp.data.data[0].id)
            // changeCategory()
            // }else{}
        }).catch((err) => {
            console.log('cat errrorrr', err)
        })
    }



    const changeCategory = () => {
        // console.log('change cat func',id)
        let url = `https://paybycal.com/api/h_article_cat_list_web.php?id=${catID}`
        console.log("ur l==> ", url);
        axios.get(url).then((resp) => {
            console.log('new resp', resp.data)
            if (resp.data.status == 'true') {
                setData(resp.data.data)
                setNOarticle(false)
            } else {
                setNOarticle(true)
            }
        }).catch((err) => {
            console.log('err', err)
            setNOarticle(true)

        })
    }

    const mainBlogSlider = () => {
        let url = "https://paybycal.com/api/h_article_category_list_web_trending.php"
        axios.get(url).then((resp) => {
            console.log('new categoryyyyyy', resp.data)
            if (resp.data.status == 'true') {

                setMainblog(resp.data.data)
                // changeCategory()
            } else { }
        }).catch((err) => {
            console.log('cat errrorrr', err)
        })
    }

    // const oncardClick = (id)=>{
    //     console.log('onclick card', id)
    //     let url = `https://paybycal.com/api/h_single_article_web.php?id=${id}`
    //     console.log(url);
    //     axios.get(url).then((resp) => {
    //         console.log('new resp', resp.data.data)
    //     }).catch((err) => {
    //         console.log('err', err)
    //     })
    //     navigate('/mainblog')
    // }

    const navtoMain = (id) => {
        console.log('navigate id', id)
        navigate(`/mainblog/${id}`, { state: { id: id } })
    }

    const categoryshow = ()=>{
        setCatshow(!catshow)
        setView(!view)
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2000 },
            items: 6
        },
        LargeDesktop: {
            breakpoint: { max: 2000, min: 1500 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1500, min: 1300 },
            items: 5,
            dots: true
        },
        minidesktop: {
            breakpoint: { max: 1300, min: 1100 },
            items: 4,
            dots: true
        },
        tablet: {
            breakpoint: { max: 1100, min: 850 },
            items: 3
        },
        minitablet: {
            breakpoint: { max: 850, min: 604 },
            items: 2
        },
        extraminitablet: {
            breakpoint: { max: 604, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsive2 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            dots: true
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Navbar />
            <h1 className='blogHeading'>Blogs</h1>

            {/* category sections mobile view */}
            <div style={{display:'none'}} className="categoryDivv">
                <Carousel
                    className='catblogslider'
                    responsive={responsive}
                    infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    // arrows={true}
                    showDots={false}
                    arrows={true}
                    // showDots={false}
                    emulateTouch={true}
                    renderButtonGroupOutside={true}
                    renderDotsOutside={false}
                    // centerMode={centerMode}
                    rewindWithAnimation={true}
                >
                    {/* onClick={changeCategory(item.id)} */}
                    {category.map((item) => {
                        return (<div onClick={() => setCatID(item.id)} class={`card ${catID === item.id ? 'catmaincard' : 'catmaincard2'} `} style={{ width: '27rem',padding:'10px' }}>
                            <img src={item.image} class="card-img-top catmainimg" alt="..." />
                            <div class="card-body catbody">
                                <h5 class={`card-title ${catID === item.id ?'cathead':'cathead2'} `}>{item.article_name}</h5>
                            </div>
                        </div>)
                    })}

                   

                </Carousel>
            </div>

            {/* category desktop view */}
            <div className={catshow? "catDesk2":'catDesk'}>
            {category.map((item) => {
                        return (<div onClick={() => setCatID(item.id)} class={`card ${catID === item.id ? 'catmaincard' : 'catmaincard2'} `} style={{ width: '27rem',padding:'10px' }}>
                            <img src={item.image} class="card-img-top catmainimg" alt="..." />
                            <div class="card-body catbody">
                                <h5 class={`card-title ${catID === item.id ?'cathead':'cathead2'} `}>{item.article_name}</h5>
                            </div>
                        </div>)
                    })}
            </div>
            <a onClick={categoryshow} href='#'  id='catshowbtn' >{view? "View All":"View Less"}</a>

            <Carousel
                className='catblogslider'
                responsive={responsive2}
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={3000}
                // arrows={true}
                showDots={false}
                arrows={true}
                // showDots={false}
                emulateTouch={true}
                renderButtonGroupOutside={true}
                renderDotsOutside={false}
                // centerMode={centerMode}
                rewindWithAnimation={true}
            >
                {mainBlog.map((element) => {
                    return (<div onClick={() => { navtoMain(element.id) }} className="blogMainPicDiv">
                        <img src={element.image} alt="" />
                        <div className="bloginnerContent">
                            <span class="badge text-bg-primary">{element.cat_name}</span>
                            <h1 style={{ padding: '3px 0px' }}>{element.title}</h1>
                            <div className="authanddate2">
                                <div className="authur2">
                                    <div className="blogSingleImg2">
                                        <img src={element.author_image? element.author_image: Blogimg} alt="" /></div>
                                    <p style={{ color: 'black', fontWeight: '700' }}>{element.author}</p>
                                </div>
                                <div style={{ color: 'black', fontWeight: '700' }} className="blogDate2">{new Date(element.create_time).toDateString().slice(3)}</div>
                            </div>
                        </div>
                    </div>)
                })}


                {/* <div className="blogMainPicDiv">
                    <img src={Blogimg} alt="" />
                    <div className="bloginnerContent">
                        <span class="badge text-bg-primary">primary</span>
                        <h1 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas exercitationem iure molestias. </h1>
                        <div  className="authanddate2">
                            <div className="authur2">
                                <div className="blogSingleImg2">
                                    <img src={Blogimg} alt="" /></div>
                                <p style={{ color: 'black', fontWeight: '700' }}>Libin Mathew</p>
                            </div>
                            <div style={{ color: 'black', fontWeight: '700' }} className="blogDate2">May 22 2022</div>
                        </div>
                    </div>
                </div>
                <div className="blogMainPicDiv">
                    <img src={Blogimg} alt="" />
                    <div className="bloginnerContent">
                        <span class="badge text-bg-primary">primary</span>
                        <h1 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas exercitationem iure molestias. </h1>
                        <div  className="authanddate2">
                            <div className="authur2">
                                <div className="blogSingleImg2">
                                    <img src={Blogimg} alt="" /></div>
                                <p style={{ color: 'black', fontWeight: '700' }}>Libin Mathew</p>
                            </div>
                            <div style={{ color: 'black', fontWeight: '700' }} className="blogDate2">May 22 2022</div>
                        </div>
                    </div>
                </div>
                <div className="blogMainPicDiv">
                    <img src={Blogimg} alt="" />
                    <div className="bloginnerContent">
                        <span class="badge text-bg-primary">primary</span>
                        <h1 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas exercitationem iure molestias. </h1>
                        <div  className="authanddate2">
                            <div className="authur2">
                                <div className="blogSingleImg2">
                                    <img src={Blogimg} alt="" /></div>
                                <p style={{ color: 'black', fontWeight: '700' }}>Libin Mathew</p>
                            </div>
                            <div style={{ color: 'black', fontWeight: '700' }} className="blogDate2">May 22 2022</div>
                        </div>
                    </div>
                </div> */}



            </Carousel>


            {/* my blog  */}
            {/* <div className='blogmainpicdiv2'>
                <div className="blogMainPicDiv">
                    <div className="bloginnerContent">
                        <span class="badge text-bg-primary">primary</span>
                        <h1 style={{ color: 'white' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas exercitationem iure molestias. </h1>
                        <div style={{ color: 'white' }} className="authanddate2">
                            <div className="authur2">
                                <div className="blogSingleImg2">
                                    <img src={Blogimg} alt="" /></div>
                                <p style={{ color: 'white',fontWeight:'700' }}>Libin Mathew</p>
                            </div>
                            <div style={{ color: 'white',fontWeight:'700' }} className="blogDate2">May 22 2022</div>
                        </div>
                    </div>
                </div>
            </div> */}

            {
                noArticle ? <h1 className='text-center mt-3'>No Article Found</h1> :
                    <div className="container allblogs">
                        <div className="row blogsRow">
                            {data.map((element) => {
                                console.log('--element', element);
                                return (<div className="col-md-4 col-sm-6 delecol">
                                    <div onClick={() => { navtoMain(element.id) }} class="card" style={{ }}>
                                        <img src={element.image} class="card-img-top imgtopp" alt="..." />
                                        <div class="card-body catbody">
                                            <span class="badge text-bg-primary">{element.cat_name}</span>
                                            {/* <h5 class="card-title cardT">{element.title}</h5> */}
                                            <h5 class="card-title cardT">
                                            {element.title.split(' ').slice(0, 6).join(' ')}
                                            {element.title.split(' ').length > 6 ? '...' : ''}
                                            </h5>
                                            <div className="authanddate">
                                                <div className="authur">
                                                    <div className="blogSingleImg">
                                                        <img src={element.author_image? element.author_image: Blogimg} alt="" /></div>
                                                    <p id='authorP'>{element.author}</p>
                                                </div>
                                                <div className="blogDate">{new Date(element.create_time).toDateString().slice(3)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })}

                        </div>
                    </div>
            }

            {/* <div style={{display:'none'}}><MainBlog data={data} /></div>
             */}
            <FooterTwo />
        </>
    )
}
