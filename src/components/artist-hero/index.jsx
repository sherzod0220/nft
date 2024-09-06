import './index.scss'
import avatar from '../../assets/artist-avatar.svg'
const Index = () => {
  return (
    <div className='artist-hero flex justify-center md:justify-start px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px] relative'>
      <div className='absolute bottom-[-60px]'>
        <img src={avatar} className=''/>
      </div>
      
    </div>
  )
}

export default Index
