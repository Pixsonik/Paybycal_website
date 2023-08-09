import React from 'react'
import Navbar from '../Navbar/Navbar'
import FooterTwo from '../FooterTwo/FooterTwo'
import "./mainblog.css";
import Blogimg from "../../asset/img/blogs/m-post-card-overlay.png";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MainBlog() {
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
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="mblogMaindiv">
                    <span class="badge text-bg-primary">Primary</span>
                    <h5 class="card-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quaerat suscipit perferendis minima? Nostrum nesciunt itaque suscipit expedita qui voluptatibus!</h5>
                    <div className="authanddate2">
                        <div className="authur2">
                            <div className="blogSingleImg2">
                                <img src={Blogimg} alt="" /></div>
                            <p>Ernie Smith</p>
                        </div>
                        <div className="blogDate2">August 20, 2022</div>
                    </div>
                    <div className="mblogMainPicDiv">
                        <img src={Blogimg} alt="" />
                    </div>
                    <div className="mblogtext">
                        <p>Healthy eating is more than just a temporary diet trend; it is a lifelong commitment to nourishing our bodies with the best possible fuel. In this article, we explore the principles of healthy eating and how making mindful choices can transform our well-being, inside and out.</p>
                    </div>
                    <div className="mblogheading">
                        <h6>1. Prioritize Whole, Nutrient-Dense Foods:</h6>
                    </div>
                    <div className="mblogtext2">
                        <p>At the core of healthy eating lies the emphasis on whole, nutrient-dense foods. These include a variety of colorful fruits and vegetables, whole grains, lean proteins, and healthy fats. Packed with vitamins, minerals, and essential nutrients, these foods nourish our bodies and support various bodily functions. Minimizing processed and sugary foods helps reduce the risk of chronic diseases and maintains a balanced diet, ensuring optimal health.</p>
                    </div>
                    <div className="mblogheading">
                        <h6>2. Portion Control and Mindful Eating :</h6>
                    </div>
                    <div className="mblogtext2">
                        <p>In our fast-paced world, it's easy to overlook portion sizes and eat mindlessly. Practicing portion control is key to maintaining a healthy weight and preventing overeating. Additionally, embracing mindful eating encourages us to savor each bite, eat slowly, and pay attention to hunger and satiety cues. This practice fosters a healthier relationship with food and allows us to enjoy our meals without guilt or unnecessary consumption.</p>
                    </div>
                    <div className="mblogMainPicDiv">
                        <img src={Blogimg} alt="" />
                    </div>
                    <div className="mblogheading">
                        <h6>3. Hydration: The Foundation of Healthy Eating:</h6>
                    </div>
                    <div className="mblogtext2">
                        <p>Staying well-hydrated is vital for overall health. Water aids in digestion, nutrient absorption, and temperature regulation. It is recommended to drink an adequate amount of water daily, and adding herbal teas or infused water can make hydration enjoyable and refreshing.</p>
                    </div>
                    <div className="mblogheading">
                        <h6>4. Balance and Moderation:</h6>
                    </div>
                    <div className="mblogtext2">
                        <p>A healthy eating approach acknowledges the importance of balance and moderation. It's okay to indulge in occasional treats or favourite foods, as long as it's done in moderation. Rather than following restrictive diets, finding a balance between nourishing meals and occasional indulgences supports a sustainable and enjoyable healthy eating lifestyle.</p>
                    </div>
                    <div className="mblogheading">
                        <h6>Summing up:</h6>
                    </div>
                    <div className="mblogtext2">
                        <p>Healthy eating is not about depriving ourselves of the foods we love but rather making informed choices that contribute to our well-being. By prioritizing whole foods, practicing portion control, staying hydrated, and embracing balance, we can foster a healthier relationship with food and transform our bodies and minds for the better. Let's start nourishing our bodies and savoring the journey to a healthier life.</p>
                    </div>
                </div>
                {/* slider  */}

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

                    <div class="card" style={{ width: '25rem' }}>
                        <img src={Blogimg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <span class="badge text-bg-primary">Primary</span>
                            <h5 class="card-title">fdgfdgfgd</h5>
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
                    <div class="card" style={{ width: '25rem' }}>
                        <img src={Blogimg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <span class="badge text-bg-primary">Primary</span>
                            <h5 class="card-title">fdgfdgfgd</h5>
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
                    <div class="card" style={{ width: '25rem' }}>
                        <img src={Blogimg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <span class="badge text-bg-primary">Primary</span>
                            <h5 class="card-title">fdgfdgfgd</h5>
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
                    <div class="card" style={{ width: '25rem' }}>
                        <img src={Blogimg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <span class="badge text-bg-primary">Primary</span>
                            <h5 class="card-title">fdgfdgfgd</h5>
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
                    <div class="card" style={{ width: '25rem' }}>
                        <img src={Blogimg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <span class="badge text-bg-primary">Primary</span>
                            <h5 class="card-title">fdgfdgfgd</h5>
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
                </Carousel>
            </div>
            <FooterTwo />
        </>
    )
}
