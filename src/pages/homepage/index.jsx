import { HomeHero,HomeCollection,Creators,Categories,Discover,MainWorks,Digest,Magic } from "@components"
const Index = () => {
  return (
    <div className='max-w-[1780px] flex flex-col bg-[#2B2B2B] m-[auto]'>
      <HomeHero/>
      <HomeCollection/>
      <Creators/>
      <Categories/>
      <Discover/>
      <Magic/>
      <MainWorks/>
      <Digest/>
    </div>
  )
}

export default Index
