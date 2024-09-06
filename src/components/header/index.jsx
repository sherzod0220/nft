import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom"
import {routes} from "../../router/routes"
const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-[999] max-w-[1780px] h-[100px] flex px-[20px] justify-between items-center bg-[#2B2B2B] m-[auto] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] top-0 sticky">
      <div>
        <img src={logo} alt='Logo'/>
      </div>

      <div  className="flex gap-[10px] items-center"  open={open} toggle={() => setOpen(false)}>
        <ul className='flex gap-[10px] md:items-center md:gap-[10px]'>
        {
          routes.map((item,index)=>{
            return(
              <span key={index} className=''>
                <NavLink to={item.path}>
                  <li className='text-[white] text-[18px]'>{item.nav}</li>
                </NavLink>
              </span>
            )
          })
        }
        </ul>
        <button className="text-[white] py-[10px] px-[15px] rounded-[10px] bg-[#A259FF]">Sign Up</button>
      </div>
      <div className='hidden '>
        <button  onClick={() => setOpen(true)}>  
          <i class="fa-solid fa-bars-staggered text-[20px] text-[white]"></i>
        </button>
      </div>
    </div>
  );
};

export default Index;
