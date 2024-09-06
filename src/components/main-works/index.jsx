import { useState } from 'react'
import img from '../../assets/works.svg'
const index = () => {
    const [works,setWorks] = useState([
        {url: img, title: "Setup Your wallet", body: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."},
        {url: img, title: "Setup Your wallet", body: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."},
        {url: img, title: "Setup Your wallet", body: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."},
    ])
  return (
    <div className="flex flex-col gap-[20px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px]">
      <h1 className="text-[white] text-[35px] lg:text-[40px] font-semibold">How it works</h1>
      <p className="text-[white] text-[20px]">Find out how to get started</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
        {
            works.map((item,index)=>{
                return(
                    <div key={index} className='py-[30px] px-[20px] bg-[#3b3b3b] flex md:flex-col gap-[20px] items-center rounded-[20px]'>
                        <img src={item.url} className='w-[30%] md:w-[80%] lg:w-[60%]'/>
                        <div className='flex flex-col gap-[10px] md:text-center'>
                            <h1 className='text-[white] text-[26px] md:text-[32px] font-semibold'>{item.title}</h1>
                            <p className='text-[white] text-[16px]'>{item.body}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default index
