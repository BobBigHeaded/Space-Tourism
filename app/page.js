export default function Home() {

  return (
    <div className="flex-1">

      <div className="py-[128px] px-[40px] xl:px-[128px] h-full flex flex-col 
                      xl:flex-row justify-between md:justify-center xl:justify-between items-center
                      xl:items-end">

        <div className="flex flex-col justify-center items-center xl:items-start w-[540px] 
                        h-[294px] md:h-[334px] xl:h-[343px] gap-y-[24px] md:gap-y-[0px]">

          <p className="font-barlowCondensed text-[26px] tracking-[4px] font-thin">
            SO, YOU WANT TO TRAVEL TO
          </p>

          <p className="font-bellefair text-[130px] md:text-[144px] text-[#FFFFFF]">
            SPACE</p>

          <p className="font-barlow text-[24px] md:text-[20px] text-[#D0D6F9] leading-[180%] 
                        font-thin text-center xl:text-start
                        w-[500px] md:w-[580px] xl:w-[590px]">
            Let&apos;s face it; if you want to go to space, you might as well genuinely go
            to outer space and not hover kind of on the edge of it. Well sit back,
            and relax because we&apos;ll give you a truly out of this world experience!</p>
        </div>
        <div className="pt-[160px] md:py-[120px] xl:py-[24px]">
          <a className="transition-all min-h-[240px] min-w-[240px] md:min-h-[272px] md:min-w-[272px] bg-[#FFFFFF] rounded-full 
                      flex items-center justify-center font-bellefair
                      text-[32px] text-[#0B0D17] ring-[#FFFFFF]/10 ring ring-0 
                      hover:ring-[100px] hover:text-[#0B0D17]/40"
            href="/destination">
            EXPLORE</a>
        </div>
      </div>
    </div>
  );
}
