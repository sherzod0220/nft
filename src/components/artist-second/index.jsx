import React from 'react'

const Index = () => {
  return (
    <div className='px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px]'>
      <div className='py-[80px] flex flex-col gap-[40px]'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-[30px]'>
            <h1 className='text-[white] text-[40px] font-semibold'>Animakid</h1>
            <div className='flex flex-col gap-[20px] md:flex-row'>
                <button className='text-[white] md:px-[40px] py-[10px] rounded-[15px] text-[20px] bg-[#A259FF]'>0xc0E3...B79C</button>
                <button className='text-[white] md:px-[40px] py-[10px] rounded-[15px] text-[20px] border-[2px] border-[#A259FF]'>Follow</button>
            </div>
        </div>

        <div className='flex gap-[30px]'>
            <div className='flex flex-col gap-[8px]'>
                <h1 className='text-[white] text-[32px] font-semibold'>250k+</h1>
                <p className='text-[white] text-[20px]'>Volume</p>
            </div>
            <div className='flex flex-col gap-[8px]'>
                <h1 className='text-[white] text-[32px] font-semibold'>50+</h1>
                <p className='text-[white] text-[20px]'>NFTs Sold</p>
            </div>
            <div className='flex flex-col gap-[8px]'>
                <h1 className='text-[white] text-[32px] font-semibold'>3000+</h1>
                <p className='text-[white] text-[20px]'>Followers</p>
            </div>
        </div>

        <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#858584]'>Bio</p>
                <h1 className='text-[white]'>The internet's friendliest designer kid.</h1>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#858584]'>Links</p>
                <div className='flex gap-[10px]'>
                    <button><i class="fa-solid fa-globe text-[#858584] text-[28px]"></i></button>
                    <button><i class="fa-brands fa-discord text-[#858584] text-[28px]"></i></button>
                    <button><i class="fa-brands fa-youtube text-[#858584] text-[28px]"></i></button>
                    <button><i class="fa-brands fa-twitter text-[#858584] text-[28px]"></i></button>
                    <button><i class="fa-brands fa-instagram text-[#858584] text-[28px]"></i></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Index
