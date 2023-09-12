import React from "react";


export default function Home() {
    return (
    <>
    <div className="backC" style={{color:"white"}}>

    <h3><span style={{color:"yellow"}}>| </span>SOMETHING INNOVATIVE WITH A TOUCH OF UNIQUENESS</h3>
    <h1>One Stop Tech <br /> Learning Platform  To Fuel Your Career</h1>
    <p>Irrespective of your location,engage in online live classes <br /> to gain extensive expertise in web development, programming, problem-solving,<br /> and DevOps. elevate your skills in these domains through top-notch education and position yourself for rewarding career prospects. </p>
<br />
<div className="downBtn">
<a href="https://bongodev.com/" target="blank" className="allBtn">All Courses</a>
<img className="playImg" src="playbtn.jpg" alt="" />
<h2>How It Works</h2>
</div>
   </div>

   <div className="secondSite">
    <p className="holaClass">What makes up special</p>
    <p className="paraghraph">What makes us unique is our English professional training program included in each course to improve your communication skill that goes above and beyond traditional methods. We believe in the power of hands-on learning, which is why our students actively participate in real-world projects executed under the Scrum project management framework, using the industry-standard JIRA tool. Moreover, our online live classes create an engaging environment where students can interact with both their peers and our industry-experienced mentors, who provide invaluable insights and guidance. As part of our commitment to fostering a culture of continuous improvement, we host monthly internal hackathons or programming contests, encouraging students to showcase their skills and push their boundaries. Moreover, our course curriculum includes DevOps basics, providing a comprehensive understanding of this crucial industry practice. All of this comes at a competitive course price, ensuring that quality education remains accessible to aspiring software professionals. With our unique combination of practical experience, industry expertise, and affordability, we take pride in offering a truly exceptional learning experience.</p>
   
   <div className="thirdRoll">
<h1 style={{color:'orange'}}>Discover New Way of Learning <br /> 
<span style={{color:"black"}}>Our Oline Live Courses</span>
    </h1>
    <p style={{fontWeight:500}}> Enroll in your preferred course and shape yourself as a competent candidate in the job market</p>
       </div>
<div className="firstLane">
<div className="card1">
   <p className="imageItem">Enrollment Started | Class Starts -7th September 2023</p>
  <div>
  <h1>Bootcamp <br />
  Front End
  Web Development</h1>
    </div>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <span>
      <h1>Become a<br /><span style={{backgroundColor:"yellowgreen", fontSize:40}}>React & <br /> javaScript</span> Master</h1>
      </span>
      <span>
        <img className="cardImg" src="react2.png" alt="" />
      </span>
    </div>
  </div>

  <div className="card1">
   <p className="imageItem">Enrollment Started | Class Starts -7th September 2023</p>
  <div>
  <h1>Bootcamp <br />
  Python-Django <br />
 full Stack</h1>
    </div>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <span>
      <h1>Become a<br /><span style={{backgroundColor:"yellowgreen", fontSize:40}}>Django & <br />Python</span><br /> Master</h1>
      </span>
      <span>
        <img className="cardImg" src="python.png" alt="" />
      </span>
    </div>
  </div>

</div>
<div  className="firstLane">

<div className="card1">
   <p className="imageItem">Enrollment Started | Class Starts -7th September 2023</p>
  <div>
  <h1>Bootcamp <br />
  MERN & PERN <br />
 Full Stack</h1>
    </div>
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap
  :20}}>
      <span>
        <h2  style={{backgroundColor:"yellowgreen", borderRadius:20, padding:3}}>MongoDB</h2>
        <h2 style={{backgroundColor:"yellowgreen", borderRadius:20, padding:5}}>PostgreeSQL</h2>
        <h2 style={{backgroundColor:"yellowgreen", borderRadius:20, padding:4}}>Express.js</h2>
        <h2 style={{backgroundColor:"yellowgreen", borderRadius:20, padding:3}}>React</h2>
        <h2 style={{backgroundColor:"yellowgreen", borderRadius:20, padding:2}}>Node.js</h2>
      </span>
      <span>
        <img className="cardImg" src="mern.webp" alt="" />
      </span>
    </div>
  </div>
 
<div className="card1">
   <p className="imageItem">Enrollment Started | Class Starts -7th September 2023</p>
  <div>
  <h1>Bootcamp <br />
  Front End
  Web Development</h1>
    </div>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <span>
      <h1>Solve<br /><span style={{backgroundColor:"yellowgreen", fontSize:40}}>100+ <br />Leetcode</span> Problems</h1>
      </span>
      <span>
        <img className="cardImg" src="prblm.jpg" alt="" />
      </span>
    </div>
  </div>

</div>
 <div style={{ color:"white", padding:50}}>

<div className="card1" >
   <p className="imageItem">Enrollment Started | Class Starts -7th September 2023</p>
  <div>
  <h1>Bootcamp <br />
  Front End
  Web Development</h1>
    </div>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <span>
      <h1>Become a<br /><span style={{backgroundColor:"yellow", fontSize:40}}>Machine <br /> Learning </span><br /> Expert</h1>
      </span>
      <span>
        <img className="cardImg" src="machine.jpg" alt="" />
      </span>
    </div>
  </div>
  </div>

   </div>

   
    </>
    )  
}