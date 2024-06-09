import React from "react";
import { useLocation } from "react-router-dom";
import Signin from "../../Components/Register/Signin";
import Signup from "../../Components/Register/Singup";
import "./Auth.css" 

const Auth = () => {
  const location=useLocation();
  return (
    <div>
     
        <div class="flex items-center justify-center h-[100vh]">
          <div className="relative mr-10 hidden lg:block">
            <div className=" h-[35.3rem] w-[23rem]">
              <img
              className="h-full w-full"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/441901005_354385197670951_293177183626386346_n.png?stp=dst-png_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF1L9p2lLiYEi4AdWL-NYni6kDZyScvQnLqQNnJJy9CcjANt5qnV7Xut87x3QEQ5RNGw_hMLZxbmmL2WJqclhGd&_nc_ohc=gdV0DBEsHF4Q7kNvgHunnnA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHQ38jfpkxMM_qbLX-kmnfDbXB6_8xVjlqTABi037ncpg&oe=6688D2CD"
              alt="Instagram Homepage"
            />
            <di className="mobileWallpaper rounded-3xl absolute top-6 h-[33rem] w-[15.7rem] w- right-3">
            </di>

            </div>
            
          </div>

          <div className="form md:w-[35vw] lg:w-[22vw]">

            {location.pathname === "/login" ? <Signin/> :  <Signup/>}
           
          </div>
        </div>
      </div>
    
  );
};

export default Auth;

// https://res.cloudinary.com/dnbw04gbs/image/upload/v1679490221/screenshot4_hb7xtr.png
//
// 
// 