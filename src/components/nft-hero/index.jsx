import img from '../../assets/nft.svg'
import img2 from '../../assets/nft2.svg'
import img3 from '../../assets/nft-avatar.svg'

const Index = () => {
  return (
    <div className="flex flex-col">
      <div>
        <img src={img} className='w-full hidden md:block'/>
        <img src={img2} className='w-full md:hidden'/>
      </div>

      <div className="py-[50px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px]">
        <div className='flex justify-between'>
            <div className='flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[46px] font-bold text-[white]'>The Orbitians</h1>
                    <p className='text-[#858584]'>Minted on Sep 30, 2022</p>
                </div>

                <div className='p-[40px] rounded-[25px] bg-[#3b3b3b] flex flex-col sm:hidden'>
                    <p className='text-[white] text-[14px]'>Auction ends in:</p>
                    <h1 className='text-[48px] text-[white] font-bold'>
                        59 : 59 : 59
                    </h1>
                    <span className='w-full flex justify-between mb-[40px]'>
                        <p className='text-[white] text-[14px]'>Hours</p>
                        <p className='text-[white] text-[14px]'>Minutes</p>
                        <p className='text-[white] text-[14px]'>Secunds</p>
                    </span>
                    <button className='py-[15px] bg-[#A259FF] rounded-[20px] text-[white]'>Place Bid</button>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <p className='text-[18px] text-[#858584]'>Cretaed By</p>
                    <div className='flex gap-[15px]'>
                        <img src={img3} className='roundex-[50%]'/>
                        <h1 className='text-[24px] text-[white]'>Orbitians</h1>
                    </div>
                </div>
            </div>

            <div className='p-[40px] rounded-[25px] bg-[#3b3b3b] flex-col hidden sm:flex'>
                <p className='text-[white] text-[14px]'>Auction ends in:</p>
                <h1 className='text-[48px] text-[white] font-bold'>
                    59 : 59 : 59
                </h1>
                <span className='w-full flex justify-between mb-[40px]'>
                    <p className='text-[white] text-[14px]'>Hours</p>
                    <p className='text-[white] text-[14px]'>Minutes</p>
                    <p className='text-[white] text-[14px]'>Secunds</p>
                </span>
                <button className='py-[15px] bg-[#A259FF] rounded-[20px] text-[white]'>Place Bid</button>
            </div>
            
        </div>
        <div className='py-[30px] flex flex-col gap-[15px]'>
            <p className='text-[#858584]'>Description</p>
            <p className='sm:w-[50%] text-[white] mb-[20px]'> 
                The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br/><br/> There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.<br/><br/> They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
            </p>
            <div className='flex flex-col gap-[10px] mb-[20px]'>
                <p className='text-[#858584]'>Details</p>
                <div className='flex gap-[15px] items-center'>
                    <i class="fa-solid fa-globe text-[#858584] text-[18px]"></i>
                    <p className='text-[white] text-[18px]'>View on Etherscan</p>
                </div>
                <div className='flex gap-[15px] items-center'>
                    <i class="fa-solid fa-globe text-[#858584] text-[18px]"></i>
                    <p className='text-[white] text-[18px]'>View on Etherscan</p>
                </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[#858584]'>Tags</p>
                <div className='flex gap-[10px] flex-col lg:flex-row'>
                    <p className='py-[8px] px-[25px] rounded-[15px] bg-[#3b3b3b] text-[white] w-[140px]'>ANIMATION</p>
                    <p className='py-[8px] px-[25px] rounded-[15px] bg-[#3b3b3b] text-[white] w-[153px]'>ILLUSTRATION</p>
                    <p className='py-[8px] px-[25px] rounded-[15px] bg-[#3b3b3b] text-[white] w-[100px]'>MOON</p>
                    <p className='py-[8px] px-[25px] rounded-[15px] bg-[#3b3b3b] text-[white] w-[100px]'>MOON</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Index
