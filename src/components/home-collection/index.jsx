import React, { useState } from "react";
import Mushroom from "../../assets/mushroom.svg";
import Avatar from "../../assets/heroAvatar.svg";

const Index = () => {
  const [collections, setCollections] = useState([
    {
      url: Mushroom,
      thumb_url1: Mushroom,
      thumb_url2: Mushroom,
      avatar: Avatar,
      name: "DSGN Animals",
      title: "MrFox",
    },
    {
      url: Mushroom,
      thumb_url1: Mushroom,
      thumb_url2: Mushroom,
      avatar: Avatar,
      name: "DSGN Animals",
      title: "MrFox",
    },
    {
      url: Mushroom,
      thumb_url1: Mushroom,
      thumb_url2: Mushroom,
      avatar: Avatar,
      name: "DSGN Animals",
      title: "MrFox",
    },
  ]);
  return (
    <div className="max-w-[1780px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px] flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[white] text-[30px] font-semibold xl:text-[50px]">
          Trending Collection
        </h1>
        <p className="text-[white] text-[20px]">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="flex gap-[50px] flex-col lg:flex-row">
        {collections.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-[20px]">
              <div className="">
                <img src={item.url} className="w-[100%]" />
              </div>
              <div className="flex gap-[25px] lg:gap-[15px] xl:gap-[20px]">
                <img src={item.thumb_url1} className="w-[30%]" />
                <img src={item.thumb_url2} className="w-[30%]" />
                <div className="w-[40%] bg-[#A259FF] flex justify-center items-center rounded-md">
                  <h1 className="text-[white] text-[25px] font-semibold sm:text-[50px] md:text-[60px] lg:text-[20px]">1025+</h1>
                </div>
              </div>
              <h1 className="text-[25px] font-semibold text-[white] xl:text-[35px]">
                {item.name}
              </h1>
              <span className="flex gap-[10px]">
                <img src={Avatar}/>
                <p className="text-[white]">{item.name}</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
