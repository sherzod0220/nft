import homehero from "../../assets/hero.svg";
import avatar from "../../assets/heroAvatar.svg";
const Index = () => {
  return (
    <div className="max-w-[1780px] px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[150px] py-[50px] lg:flex lg:justify-between">
      <div className="flex flex-col gap-[20px] lg:w-[50%]">
        <h1 className="text-[white] text-[36px] font-bold lg:text-[51px] xl:text-[60px]">
          Discover digital art & Collect NFTs
        </h1>
        <p className="text-[white] text-[20px]">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>

        <div className="flex flex-col bg-[#3b3b3b] rounded-[40px] md:rounded-t-[60px] my-[30px] lg:hidden">
          <img src={homehero} className="w-[100%]"/>
          <div className="flex gap-[15px] flex-col px-[30px] py-[30px]">
            <h2 className="text-[white] text-[25px] font-semibold">
              Space Walking
            </h2>
            <span className="flex gap-[15px]">
              <img src={avatar} />
              <p className="text-[white]">Animakid</p>
            </span>
          </div>
        </div>

        <button className="bg-[#A259FF] py-[10px] rounded-[20px] w-[100%] text-[white] text-[20px] font-semibold lg:w-[200px]">
          Get Started
        </button>
        <div className="flex justify-between lg:justify-start lg:gap-[25px]">
          <span className="flex flex-col gap-[10px]">
            <h2 className="text-[28px] lg:text-[32px] font-semibold text-[white]">240k+</h2>
            <p className="text-[white]">Total Sale</p>
          </span>
          <span className="flex flex-col gap-[10px]">
            <h2 className="text-[28px] lg:text-[32px] font-semibold text-[white]">100k+</h2>
            <p className="text-[white]">Auctions</p>
          </span>
          <span className="flex flex-col gap-[10px]">
            <h2 className="text-[28px] lg:text-[32px] font-semibold text-[white]">240k+</h2>
            <p className="text-[white]">Artists</p>
          </span>
        </div>
      </div>

      <div className="hidden lg:flex flex-col bg-[#3b3b3b] rounded-[30px] lg:w-[40%]">
        <img src={homehero} className="w-[100%]" />
        <div className="flex gap-[15px] flex-col px-[30px] py-[30px]">
          <h2 className="text-[white] text-[25px] font-semibold">
            Space Walking
          </h2>
          <span className="flex gap-[15px]">
            <img src={avatar} />
            <p className="text-[white]">Animakid</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
