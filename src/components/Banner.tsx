import Image from "next/image";

function Banner(): JSX.Element {
  return (
    // Full banner
    <section className={`
      flex bg-[#F0F8FF] w-[100%] justify-center items-center
      phone:h-fit phone:py-8
      tablet-portrait:h-[26rem]
      tablet-landscape:h-[36rem]
      desktop:h-[36rem]
      big-desktop:h-[36rem]
      `}>

      {/* Texts div */}
      <div className={`
      flex flex-col items-center text-center
      phone:w-[90%]
      tablet-portrait:w-full
      tablet-landscape:w-full
      desktop:w-full
      big-desktop:w-full
      `}>

        {/* Webinars */}
        <div className={`
        uppercase flex justify-center items-center 
        rounded-tl-3xl rounded-bl-lg rounded-r-3xl font-extrabold 
        text-[#2383fb] border-[#2383fb] border-[0.15rem]
        phone:w-[10rem] phone:h-[1.6rem] phone:text-xs phone:mb-1
        tablet-portrait:w-[12.5rem] tablet-portrait:h-[2rem] tablet-portrait:text-sm tablet-portrait:mb-4
        tablet-landscape:w-[12.5rem] tablet-landscape:h-[2rem] tablet-landscape:text-sm tablet-landscape:mb-4
        desktop:w-[12.5rem] desktop:h-[2rem] desktop:text-sm desktop:mb-4
        big-desktop:w-[12.5rem] big-desktop:h-[2rem] big-desktop:text-sm big-desktop:mb-4
        `}>
          Webinars Exclusivos
        </div>

        {/* Menos conversinha */}
        <div className={`
          text-[#1C3C50] font-medium
          phone:text-xl
          tablet-portrait:text-5xl
          tablet-landscape:text-5xl
          desktop:text-5xl
          big-desktop:text-5xl
          `}>
          Menos Conversinha,
        </div>

        {/* Mais conversão div */}
        <div className={'mt-[-0.5rem] relative'}>
          {/* Text */}
          <span className={`
          bg-gradient-to-br from-[#2c83fb] to-[#1f76f0] text-transparent bg-clip-text text-[5rem] font-bold
          phone:text-[2.5rem]
          min-[0px]:max-[320px]:text-[2.2rem]
          tablet-portrait:text-[5rem]
          tablet-landscape:text-[5rem]
          desktop:text-[5rem]
          big-desktop:text-[5rem]
          `}>
            Mais Conversão
          </span>
          {/* Leadster Icon */}
          <Image
            src='/asset-header.png'
            alt='Ícone leadster'
            width={49}
            height={32}
            className={`
            absolute
            phone:scale-[0.60] phone:top-[0.1rem] phone:left-[91.5%]
            min-[0px]:max-[320px]:-top-[0.1rem] min-[0px]:max-[320px]:left-[90%]
            tablet-portrait:scale-100 tablet-portrait:top-[1.4rem] tablet-portrait:left-[95%]
            tablet-landscape:scale-100 tablet-landscape:top-[1.4rem] tablet-landscape:left-[95%]
            desktop:scale-100 desktop:top-[1.4rem] desktop:left-[95%]
            big-desktop:scale-100 big-desktop:top-[1.4rem] big-desktop:left-[95%]
            `}
          />
        </div>

        {/* Final text - Strategies */}
        <div className={
          `text-[#1C3C50] font-semibold text-center border-t-2 border-[#D7E2EA] w-[108%]
          phone:text-xs phone:p-2 phone:max-tablet-portrait:w-fit
          tablet-portrait:text-lg tablet-portrait:p-4 tablet-portrait:w-[80%]
          tablet-landscape:text-base tablet-landscape:p-4
          desktop:text-base desktop:p-4
          big-desktop:text-base big-desktop:p-4
          `}>
            <div className="tablet-portrait:w-[80%] tablet-portrait:m-auto">
              Conheça as estratégias que <span className='font-extrabold tablet-portrait:text-[1.1rem]'>mudaram o jogo</span> e como aplicá-las no seu negócio
            </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;