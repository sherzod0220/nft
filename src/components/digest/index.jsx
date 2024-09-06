import img from '../../assets/digest.svg'
const Index = () => {
  return (
    <div className='gap-[40px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px]'>
      <div className='bg-[#3b3b3b] py-[50px] px-[40px] rounded-[25px] flex flex-col md:flex-row gap-[30px] '>
        <div className='md:w-[50%]'>
            <img src={img} className='w-full'/>
        </div>
        <div className='flex flex-col gap-[15px] md:w-[50%]'>
            <h1 className='text-[white] text-[48px] md:text-[26px] lg:text-[42px] xl:text-[52px] 2xl:text-[56px] font-semibold'>Join our weekly digest</h1>
            <p className='text-[white] text-[25px] lg:text-[28px] 2xl:text-[36px] md:text-[16px]'>Get exclusive promotions & updates straight to your inbox.</p>
            <span className='flex flex-col lg:flex-row lg:gap-[0] lg:bg-[white] lg:rounded-[30px] gap-[15px]'>
                <input type='email' placeholder='Enter your email here' className='outline-none py-[10px] px-[20px] rounded-[30px] lg:w-full'/>
                <button className='text-[white] bg-[#A259FF] py-[10px] px-[20px] rounded-[30px] text-[18px]'>
                    Subscribe
                </button>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Index
