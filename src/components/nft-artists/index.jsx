import img1 from '../../assets/discover1.svg'
import img2 from '../../assets/discover2.svg'
import img3 from '../../assets/discover3.svg'
import avatar from '../../assets/dis-avatar.svg'
import { useState } from 'react'

const index = () => {
    const  [discover,setDiscover] = useState([
        {img: img1, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img2, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img3, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img1, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img2, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img3, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img1, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img2, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
        {img: img3, avatar: avatar, title: "Distance Galaxy", name: "MoonDancer", price: "1.63ETH", highest: "0.33wETH"},
    ])
  return (
    <div className="flex flex-col gap-[40px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px]">
      <div className='flex justify-between items-end'>
        <div className='flex flex-col gap-[5px]'>
            <h1 className='text-[white] text-[35px] font-semibold'>More From This Artist</h1>
        </div>
        <button className='hidden md:block py-[10px] px-[40px] rounded-[20px] border-[2px] border-[#A259FF] text-[white] text-[18px]'>
            Go to Artist Page
        </button>
      </div>

      <div className='grid grid-cols-1 gap-[50px] md:grid-cols-2 xl:grid-cols-3'>
        {
            discover.map((item,index)=>{
                return(
                    <div key={index} className='flex flex-col'>
                        <img src={item.img} className='w-full'/>
                        <div className='flex flex-col gap-[10px] py-[25px] px-[30px] bg-[#3b3b3b] rounded-b-[25px]'>
                            <h1 className='text-[white] text-[28px] font-semibold'>{item.title}</h1>

                            <div className='flex gap-[20px] mb-[20px] items-center'>
                                <img src={item.avatar}/>
                                <p className='text-[white] text-[18px]'>{item.name}</p>
                            </div>

                            <div className='flex justify-between'>
                                <span className='flex flex-col gap-[8px]'>
                                    <p className='text-[#858584] text-[18px]'>Price</p>
                                    <p className='text-[white] text-[24px]'>{item.price}</p>
                                </span>
                                <span className='flex flex-col gap-[8px]'>
                                    <p className='text-[#858584] text-[18px]'>Highest Bid</p>
                                    <p className='text-[white] text-[24px]'>{item.highest}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>

      <div>
      <button className='w-full md:hidden py-[10px] px-[40px] rounded-[20px] border-[2px] border-[#A259FF] text-[white] text-[18px]'>
            Go To Artist Page
        </button>
      </div>
    </div>
  )
}

export default index
