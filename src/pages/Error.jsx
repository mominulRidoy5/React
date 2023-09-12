import React from 'react'
import { Link } from 'react-router-dom';
export default 
function Error() {
  return (
    <>
     <div className="errorPage">
        <h1>404:Page Not Found</h1>
      <span><img className="errImg" src="error.jpg" alt="hola" />
 </span>
 </div>
 <div className="backbtnAlignment">
    <Link to="/" className="backBtn">Go Home</Link>
    </div>

    </>
   
  );
}


