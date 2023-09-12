import React from 'react'

export default function Contact() {
    return (
      <>
      <div style={{backgroundColor:'white', marginTop:10, padding:20}}>
        <div style={{alignItems:'center', justifyContent:'center'}}>
        <h1>We are always here to help you out </h1>     
<p>Direct communication is necessary? Contact us using any of the following means below. Your <br /> feedback or opinions are highly valued to us.</p>
     
        </div>
 <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
  <div className='contactCard1' style={{height:300,width:300 ,margin:20, padding:20, alignItems:'center', justifyContent:'center'}}>
    <img style={{height:100, width:100}} src="map.png" alt="" />
  <h2>Visit us (Saturday to Thursday):</h2>
  <p> 2nd floor,54/3,Pallabi,Dhaka-1216</p>
  </div>
  <div className='contactCard1' style={{height:300,width:300 ,margin:20,padding:20}}>
    <img style={{height:100, width:100}} src="call.jpg" alt="" />
  <h2>10:00AM to 8:00PM</h2>
  <p> +880-1911666994</p>
  </div>
  <div className='contactCard1' style={{height:300,width:300 ,margin:20,padding:20}}>
    <img style={{height:100, width:100,}} src="email.jpg" alt="" />
  <h2>Email us on:</h2>
  <p > support@bongodev.com</p>
  </div>

      </div>

      </div>
      </>
    );
  }
