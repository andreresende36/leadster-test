import Image from "next/image";

function Banner(): JSX.Element {
  return (
    // Full banner
    <section className={`
      flex bg-[#F0F8FF] w-[100%] justify-center items-center
      phone:h-fit phone:py-8
      tablet-portrait:h-[26rem]
      desktop:h-[28rem]
      big-desktop:h-[34rem]
      `}>

      {/* Texts div */}
      <div className={`
      flex flex-col items-center text-center w-full
      phone:max-tablet-portrait:w-[90%]
      `}>

        {/* Webinars */}
        <h3 className={`
        uppercase flex justify-center items-center w-[12.5rem] h-[2rem] text-sm mb-4
        rounded-tl-3xl rounded-bl-lg rounded-r-3xl font-extrabold 
        text-[#2383fb] border-[#2383fb] border-[0.15rem]
        phone:max-tablet-portrait:w-[10rem] 
        phone:max-tablet-portrait:h-[1.6rem] 
        phone:max-tablet-portrait:text-xs 
        phone:max-tablet-portrait:mb-1
        `}>
          Webinars Exclusivos
        </h3>

        {/* Menos conversinha */}
        <h2 className={`
          text-[#1C3C50] font-medium text-5xl
          phone:max-tablet-portrait:text-xl
          `}>
          Menos Conversinha,
        </h2>

        {/* Mais conversão div */}
        <h1 className={'mt-[-0.5rem] relative'}>
          {/* Text */}
          <span className={`
          bg-gradient-to-br from-[#2c83fb] to-[#1f76f0] text-transparent bg-clip-text text-[5rem] font-bold
          phone:max-tablet-portrait:text-[2.5rem]
          min-[0px]:max-[320px]:text-[2.2rem]
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
            absolute scale-100 top-[1.4rem] left-[95%]
            phone:max-tablet-portrait:scale-[0.60] phone:max-tablet-portrait:top-[0.1rem] phone:max-tablet-portrait:left-[91.5%]
            min-[0px]:max-[320px]:-top-[0.1rem] min-[0px]:max-[320px]:left-[90%]
            `}
          />
        </h1>

        {/* Final text - Strategies */}
        <div className={
          `text-[#1C3C50] font-semibold text-center border-t-2 border-[#D7E2EA] w-[108%] p-4
          phone:text-xs phone:max-tablet-portrait:p-2 phone:max-tablet-portrait:w-fit
          tablet-portrait:text-lg tablet-portrait:w-[80%]
          tablet-landscape:w-fit
          desktop:text-base
          `}>
            <p className="tablet-portrait:w-[80%] tablet-portrait:m-auto tablet-landscape:w-full">
              Conheça as estratégias que <span className='font-extrabold tablet-portrait:text-[1.1rem]'>mudaram o jogo</span> e como aplicá-las no seu negócio
            </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;