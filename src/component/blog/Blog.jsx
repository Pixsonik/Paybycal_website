import React, { useState } from 'react'
import "./blog.css";
import Blogimg from "../../asset/img/blogs/m-post-card-overlay.png";
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import FooterTwo from '../FooterTwo/FooterTwo'

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

    return (
        <>
        <Navbar/>
            <h1 className='blogHeading'>Blogs</h1>
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
