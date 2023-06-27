import Image from "next/image";

function Stats() {
  return (
    <section className='bg-[#F0F8FF] h-[735px] w-[100%] flex justify-center items-center gap-10 text-[#15364A]'>
      
      <div className="w-[50%] flex justify-end items-center ">
        <Image 
          src="/../public/comparativo.png"
          alt="Comparativo captações de leads"
          width={739}
          height={687}
          className="scale-[0.88]"
        />
      </div>
      
      <div className="w-[50%] flex flex-col justify-start items-center">
        
        <div className="w-full flex flex-col gap-4">
          <p className="text-4xl font-medium">
            Pronto para triplicar sua
            <br></br>
            <span className="font-bold">Geração de Leads?</span>
          </p>
          <p className="w-fit text-xl font-medium pb-5 pr-48 border-b-2 border-[#15364a2c]">Criação e ativações em <span className="font-bold">4 minutos.</span></p>
        </div>
        
        <div className="w-full flex items-center mt-4 gap-3">
          <button className={`
            btn rounded-full bg-[#0083FF] border-0 
            text-white font-semibold 
            px-8 py-[1.5rem] w-fit h-fit
            shadow-md
            hover:bg-[#0077e7]
            `}>Ver Demonstração</button>
          <Image 
            src="/../public/selo_RD.png"
            alt="Selo RD Station"
            width={205}
            height={73}
            className="scale-[0.88]"
          />
        </div>

        <div className="w-full flex items-center mt-2 gap-1 text-[0.8rem] max-h-5">
          <Image 
            src="/../public/card.webp"
            alt="Cartão de crédito"
            width={16}
            height={16}
            className="w-fit h-fit"
          />
          <p className="font-medium pr-3 border-r-2 border-[#15364a98]">
            <span className="font-bold">Não</span> é necessário Cartão de Crédito
          </p>
          <Image 
              src="/../public/rating.webp"
              alt="Nota de avaliação"
              width={92}
              height={16}
              className="pl-2 pr-1 object-contain"
            />
          <p className="font-medium">
            <span className="font-bold">4.9/5</span> média de satisfação</p>
        </div>
      </div>

    </section>
  );
}

export default Stats;
