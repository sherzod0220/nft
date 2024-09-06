import { useState } from "react";
import fox from "../../assets/mrfox.svg";

const Index = () => {
  const [creators, setCreators] = useState([
    { url: fox, name: "Keepitreal", sale: "34.53 ETH" },
    { url: fox, name: "DigiLab", sale: "34.53 ETH" },
    { url: fox, name: "GravityOne", sale: "34.53 ETH" },
    { url: fox, name: "Juanie", sale: "34.53 ETH" },
    { url: fox, name: "BlueWhale", sale: "34.53 ETH" },
    { url: fox, name: "Mr Fox", sale: "34.53 ETH" },
    { url: fox, name: "Shroomie", sale: "34.53 ETH" },
    { url: fox, name: "Robotica", sale: "34.53 ETH" },
    { url: fox, name: "RustyRobot", sale: "34.53 ETH" },
    { url: fox, name: "Animakid", sale: "34.53 ETH" },
    { url: fox, name: "Dotgu", sale: "34.53 ETH" },
    { url: fox, name: "Ghiblier", sale: "34.53 ETH" }
  ])
  return (
    <div className="flex flex-col gap-[40px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px]">
      <div className="md:flex md:justify-between md:items-end md:gap-[20px] ">
        <span className="flex flex-col gap-[10px]">
          <h1 className="text-[white] text-[36px] font-semibold">Top Creators</h1>
          <p className="text-[white] text-[20px]">Checkout Top Rated Creators on the NFT Marketplace</p>
        </span>
        <span className="hidden md:block">

        <button className="border-[#A259FF] border-[2px] py-[10px] px-[40px] rounded-[20px] w-[100%] text-[white] text-[20px] font-semibold lg:w-[200px] text-nowrap">
            View Rankings
        </button>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-4">
        {
            creators.map((item,index)=>{
                return (
                    <div key={index} className="px-[30px] py-[15px] bg-[#3b3b3b] rounded-[25px] flex gap-[10px] items-center xl:flex-col justify-center">
                        <div className="relative w-[80px] xl:w-[120px]">
                            <img src={item.url} className="w-full"/>
                            <p className="absolute top-[-8px] left-[-8px] w-[40px] h-[40px] rounded-[50px] flex justify-center items-center bg-[#2b2b2b] text-[20px] text-[#858584] xl:top-0 xl:left-[-50px] xl:w-[30px] xl:h-[30px]">{index + 1}</p>
                        </div>
                        <div className="flex flex-col justify-center gap-[10px] xl:items-center">
                            <h1 className="text-[25px] font-semibold text-[white]">{item.name}</h1>
                            <span className="flex gap-[15px] items-center">
                                <p className="text-[#858584] text-[16px]">Total Sales:</p>
                                <p className="text-[white] text-[18px]">{item.sale}</p>
                            </span>
                        </div>
                    </div>
                )
            })
        }
      </div>
      <div>
        <button className="border-[#A259FF] border-[2px] py-[10px] rounded-[20px] w-[100%] text-[white] text-[20px] font-semibold lg:w-[200px] md:hidden">
            View Rankings
        </button>
      </div>
    </div>
  );
};

export default Index;
