import './index.scss'
import shroome from '../../assets/magic2.svg'
const Index = () => {
  return (
    <div className="">
      <div class="magic px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px]">
        <div class="shroomie">
          <img src={shroome} alt="" />
          <p>Shroomie</p>
        </div>
        <div class="magic__bottom">
          <div class="magic__bottom__left">
            <h1>Magic Mahsrooms</h1>
            <button><i class="fa-solid fa-eye"></i> See NFT</button>
          </div>
          <div class="magic__bottom__right">
            <input type="time" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
