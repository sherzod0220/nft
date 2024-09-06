import { useState } from "react";
import img from "../../assets/category1.svg";
import './index.scss'
const Index = () => {
    const [categories, setCategories] = useState([
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
        { url: img, title: "Art", icon: <i class="fa-solid fa-paintbrush"></i> },
      ])
  return (
    <div className="flex flex-col gap-[40px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px]">
      <h1 className="text-[28px] text-[white] font-semibold">Browse Categories</h1>
      <div className="cards grid grid-cols-2 md:grid-cols-4 gap-[30px] pb-[50px]">
        {
            categories.map((item,index)=>{
                return(
                <div key={index} className="card relative flex justify-center items-center mb-[60px]">
                    <img src={item.url} className="card__img w-full"/>
                    <div className="icon w-full h-[100%] absolute top-0 left-0 rounded-[30px] flex justify-center items-center">
                        <button className="absolute text-[white] text-[50px]">
                            {item.icon}
                        </button>
                    </div>
                    <p className="card__text absolute top-[5%] text-[26px] px-[20px] py-[12px] bg-[#3b3b3b] w-full rounded-br-[15px] rounded-bl-[15px] text-[white]">{item.title}</p>
                </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Index
