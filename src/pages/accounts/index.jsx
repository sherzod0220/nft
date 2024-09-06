import img from '../../assets/account.svg'
import img2 from '../../assets/account2.svg'

const Index = () => {
  return (
    <div className="max-w-[1780px] py-[50px] flex flex-col gap-[30px] bg-[#2B2B2B] m-[auto] md:flex-row lg:gap-[50px]">
      <div className='w-full md:w-[50%]'>
        <img src={img} className='w-[100%] hidden md:block'/>
        <img src={img2} className='w-[100%] md:hidden'/>
      </div>

      <div className='px-[20px] flex flex-col gap-[20px] md:p-[0] justify-center md:w-[50%] md:pr-[40px]'>
        <h1 className='text-[white] text-[40px] font-semibold lg:text-[56px]'>Create Account</h1>
        <p className='text-[white] text-[18px] lg:text-[26px]'>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        <form className='flex flex-col gap-[15px] lg:w-[400px]'>
            <input type='text' placeholder='Username' className='py-[10px] px-[20px] bg-white rounded-[30px]'/>
            <input type='email' placeholder='Email' className='py-[10px] px-[20px] bg-white rounded-[30px]'/>
            <input type='password' placeholder='Password' className='py-[10px] px-[20px] bg-white rounded-[30px]'/>
            <input type='password' placeholder='Confirm Password' className='py-[10px] px-[20px] bg-white rounded-[30px]'/>
            <button type='submit' className='py-[10px] px-[20px] rounded-[30px] bg-[#A259FF] text-[white]'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Index
