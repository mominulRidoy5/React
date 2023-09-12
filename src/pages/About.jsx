import React from 'react'

function About() {
    return (
    <>
    
    <div className='aboutUs'>
    <h2 style={{color:'orangered', marginLeft:500, paddingTop:20}}>Welcome To bongoDev</h2>

  <p style={{paddingLeft:200,paddingRight:200,paddingBottom:20, fontWeight:500, alignItems:'center', justifyContent:'center',}}>bongoDev is an EdTech bootcamp where web development,programming, problem-solving, and DevOps subjects are taught. It has been established with the aim of taking the Bengali community ahead in the global tech industry. Founded by the experienced engineers and web developers who still works and worked in renowned companies at home and abroad. The subjects of web technology are explained in an easy and accessible manner in live classes conducted in Bengali. We are building largest tech community in Bangladesh, believe in this vision, and the bongoDev team is committed to it.</p>

  <img style={{width:1200, height:1000}} src="coading.jpg" alt="" />

      <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
        <span style={{padding:50}}>
          <h2>co-founder and CEO</h2>
          <p>Having spent more than twelve years in the tech industry, Nur Siddique is an accomplished programmer and engineering leader. His profound love for programming is matched by his understanding of the challenges faced by beginners and self-learners, fueling his passion for teaching. In 2021, he founded the bongoDev platform and promptly began sharing programming videos on YouTube whenever he could spare the time.</p>
          <p>His areas of expertise and passion lie in coding, mentoring, hiring, teaching, and learning. With over twelve years of experience, he has worked extensively at renowned organizations like NewsCred and Optimizely.</p>
          <p>Despite the apparent complexity of web technologies, one can acquire substantial knowledge through consistent discussions, appropriate guidance, and practical experience. While we can offer discussions and precise guidance, the responsibility lies with you to actively practice and apply what you learn.</p>

          <p >Believe in yourself and be industrious <br />
Nure Siddiq | Co-founder –<span style={{fontWeight:500}}> bongoDev</span></p>
        </span>
        <span>
          <img src="nurevai.jpg" alt="" />
        </span>
      </div>

    </div>
    </>
    ) 
  }

  export default About;
