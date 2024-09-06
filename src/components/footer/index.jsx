import logo from '../../assets/logo.svg'

const Index = () => {
  return (
    <div className="max-w-[1780px] py-[50px] bg-[#3B3B3B] m-[auto] flex flex-col gap-[20px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px]">
      <div className='footer-top flex flex-col gap-[30px] py-[20px] border-b-[2px] border-b-[#cccccc] lg:flex-row lg:justify-between'>

        <div className='flex flex-col gap-[10px]'>
          <img src={logo} alt='Logo' className='w-[350px] mb-[20px]'/>
          <p className='text-[#CCCCCC]'>NFT marketplace UI created with Anima for Figma.</p>
          <p className='text-[#CCCCCC]'>Join our community</p>
          <div className='flex gap-[10px]'>
            <button>    
              <i class="fa-brands fa-discord text-[#858584] text-[28px]"></i>
            </button>
            <button>
              <i class="fa-brands fa-youtube text-[#858584] text-[28px]"></i>
            </button>
            <button>
              <i class="fa-brands fa-twitter text-[#858584] text-[28px]"></i>
            </button>
            <button>
              <i class="fa-brands fa-instagram text-[#858584] text-[28px]"></i>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h3 className='text-[white] text-[25px] font-semibold mb-[20px]'>Explore</h3>
          <p className='text-[#CCCCCC]'>MarketPlace</p>
          <p className='text-[#CCCCCC]'>Rankings</p>
          <p className='text-[#CCCCCC]'>Connect a wallet</p>
        
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h3 className='text-[white] text-[25px] font-semibold mb-[20px]'>Join our weekly digest</h3>
          <p className='text-[#CCCCCC]'>Get exclusive promotions & updates straight to your inbox.</p>
          <span className='bg-[white] w-[350px] flex rounded-[15px]'>
            <input type='email' placeholder='Enter your email here' className='py-[10px] px-[15px] rounded-[15px] w-[100%] outline-none'/>
            <button className='bg-[#A259FF] text-[white] py-[10px] px-[20px] rounded-[15px]'>Subscribe</button>
          </span>
        
        </div>

      </div>

      <p className='text-[#CCCCCC]'>
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
  );
};

export default Index;
