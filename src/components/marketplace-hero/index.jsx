import img1 from "../../assets/discover1.svg";
import img2 from "../../assets/discover2.svg";
import img3 from "../../assets/discover3.svg";
import avatar from "../../assets/dis-avatar.svg";
import { useState } from "react";

const Index = () => {
    const [discover, setDiscover] = useState([
        { img: img1, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img2, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img3, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img1, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img2, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img3, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img1, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img2, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img3, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img2, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img1, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        { img: img3, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
      ]);
  return (
    <div className="flex flex-col">

        <div className="px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] pt-[70px] pb-[50px] flex flex-col gap-[20px]">
            <h1 className="text-[white] text-[40px] font-bold">Browce Marketplace</h1>
            <p className="text-[white] tet-[22px]">Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <div className="border-[1px] flex items-center justify-between rounded-[20px] w-full px-[25px] border-[#858584]">
                <input type="text" placeholder="Search your favourite NFTs" className="outline-none py-[15px] bg-transparent placeholder:text-[#858584] placeholder:text-[20px] w-full"/>
                <i class="fa-solid fa-magnifying-glass text-[white]"></i>
            </div>
        </div>

        <div className="cards flex border-t-[1px] border-t-[#858584] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px]">
        <div className="card w-[50%] flex gap-[15px] justify-center items-center py-[20px] border-b-[2px] border-b-[#858584]">
          <h1 className="cursor-pointer text-[20px] lg:text-[30px] text-[white]">Created</h1>
          <p className="px-[15px] rounded-[20px] bg-[#858584] text-[white] text-[16px] lg:text-[24px]">
            302
          </p>
        </div>

        <div className="card w-[50%] flex gap-[15px] justify-center items-center py-[20px]">
          <h1 className="cursor-pointer text-[20px] lg:text-[30px] text-[#858584]">Owned</h1>
          <p className="px-[15px] rounded-[20px] bg-[#3b3b3b] text-[white] text-[16px] lg:text-[24px]">
            67
          </p>
        </div>
        </div>

        <div className="bg-[#3b3b3b] py-[70px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px]">
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 xl:grid-cols-3">
          {discover.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <img src={item.img} className="w-full" />
                <div className="flex flex-col gap-[10px] py-[25px] px-[30px] bg-[#2b2b2b] rounded-b-[25px]">
                  <h1 className="text-[white] text-[28px] font-semibold">
                    {item.title}
                  </h1>

                  <div className="flex gap-[20px] mb-[20px] items-center">
                    <img src={item.avatar} />
                    <p className="text-[white] text-[18px]">{item.name}</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="flex flex-col gap-[8px]">
                      <p className="text-[#858584] text-[18px]">Price</p>
                      <p className="text-[white] text-[24px]">{item.price}</p>
                    </span>
                    <span className="flex flex-col gap-[8px]">
                      <p className="text-[#858584] text-[18px]">Highest Bid</p>
                      <p className="text-[white] text-[24px]">{item.highest}</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Index
