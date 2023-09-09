import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
     const [show, handleShow] = useState(false);

    useEffect(()=>{
       window.addEventListener("scroll", ()=>{
        if(window.scrollY > 150){
            handleShow(true);
        }else handleShow(false);
       });
       return ()=>{
        window.removeEventListener("scroll", ()=>{
            console.log("removed eventlistener");
        });
       }
    },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
         className='nav_logo'
         src = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
       // src = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
         alt = "Netflix LOGO"
        />
      <img className = "nav_avatar"
      src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt = "Netflix LOGO"
      />
    </div>
  )
}

export default Nav
