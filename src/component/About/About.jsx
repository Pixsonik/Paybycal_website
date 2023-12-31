import "./about.css";

function AboutContent() {
  return (
    <div>
      <div id='about' className="aboutHeadingdiv">
        <h1 className='aboutHeading'>About Us</h1>
        <div className="emptydiv4"></div>
      </div>
      <div className="aboutmain">
        {/* <h1>Health and wellness, fitness motivation</h1> */}
        <p>Located in the vibrant city of Navi Mumbai, we understand the importance of fitness, but we also know it can be tough to incorporate into daily life. That's why our mission is to inspire people to embrace daily exercise and walking while boosting local businesses and your wallet! With our app, you can turn your steps into exciting lifestyle rewards - it's a simple and enjoyable process. The more you move, the more you earn - a win-win situation for everyone! Our vision is to promote healthy habits far and wide. If you're already an avid exerciser, you can now reap rewards for your efforts! For those seeking a little motivation, our app offers fantastic rewards from local and online merchants to keep you inspired. Our ultimate goal is to encourage people everywhere to set fitness goals, leading to happier and healthier lives. Simultaneously, we're dedicated to supporting local businesses and hope to ignite your passion for fitness along the way!</p>
      </div>

      <div className="youtubeDiv">
        {/* <iframe className='rectangleImg' src="https://www.youtube.com/embed/BpoF5pOgAws" title="Discover The Secret Of Engine Maintenance" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
        <iframe className='rectangleImg' src="https://www.youtube.com/embed/oDgld1CjBVA?si=Vu82hxAuTy8P8P8l&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div> 
  );
}

export default AboutContent;
