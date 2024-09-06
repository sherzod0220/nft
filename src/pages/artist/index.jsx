import './index.scss'
import { ArtistHero,ArtistSecond,ArtistCards } from '@components'

const Index = () => {
  return (
    <div className='artist-main max-w-[1780px] flex flex-col bg-[#2B2B2B] m-[auto]'> 
      <ArtistHero/>
      <ArtistSecond/>
      <ArtistCards/>
    </div>
  )
}

export default Index
