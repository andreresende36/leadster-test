import Image from "next/image";
import Link from "next/link";
import { links } from "../db/links";

function Stats() {
  return (
    <section
      className={`
      bg-[#F0F8FF] h-[48rem] w-[100%] 
      flex justify-center items-center gap-10 text-[#15364A]
      phone:max-tablet-portrait:flex-col phone:max-tablet-portrait:gap-0 phone:max-tablet-portrait:h-fit phone:max-tablet-portrait:py-3
      tablet-portrait:max-desktop:h-fit tablet-portrait:max-tablet-landscape:py-20 tablet-portrait:max-tablet-landscape:gap-12
      `}
    >
      <div className={`
      w-[50%] flex justify-end items-center 
      phone:max-tablet-portrait:w-full phone:max-tablet-portrait:min-h-0 phone:max-tablet-portrait:h-80 phone:max-tablet-portrait:mt-2
      tablet-portrait:max-desktop:w-[60%] tablet-portrait:max-desktop:ml-10
      `}>
        <Image
          src="/imgs/comparativo.png"
          alt="Comparativo captações de leads"
          width={739}
          height={687}
          className="scale-[0.88] tablet-portrait:max-desktop:scale-[1.1]"
        />
      </div>

      <div className="w-[50%] flex flex-col justify-start items-center phone:max-tablet-portrait:w-full ">
        <div className="w-full flex flex-col gap-4 phone:max-tablet-portrait:gap-2 phone:max-tablet-portrait:pl-10">
          <p className="text-4xl font-medium phone:max-desktop:text-2xl">
            Pronto para triplicar sua <br />
            <span className="font-bold">Geração de Leads?</span>
          </p>
          <p className={`
          w-fit text-xl font-medium pb-5 pr-48 border-b-2 border-[#15364a2c] 
          phone:max-desktop:text-base phone:max-desktop:pr-0 phone:max-desktop:border-hidden phone:max-desktop:pb-0
          `}>
            Criação e ativações em <span className="font-bold">4 minutos.</span>
          </p>
        </div>

        <div className="w-full flex items-center mt-4 gap-3 phone:max-desktop:flex-col tablet-portrait:max-desktop:items-start">
          <Link
            href={links.demonstracao}
            className="phone:max-tablet-portrait:w-full phone:max-tablet-portrait:flex phone:max-tablet-portrait:justify-center"
          >
            <button
              className={`btn rounded-full bg-[#0083FF] border-0 text-white 
              font-semibold px-8 py-[1.5rem] w-fit h-fit shadow-md 
              hover:bg-[#0077e7] phone:max-tablet-portrait:w-80 phone:max-tablet-portrait:my-2
              tablet-portrait:max-desktop:w-[18.5rem] 
              `}
            >
              Ver Demonstração
            </button>
          </Link>
          <Image
            src="/imgs/selo_RD.png"
            alt="Selo RD Station"
            width={205}
            height={73}
            className="scale-[0.88] phone:max-desktop:hidden"
          />
        </div>

        {/* Phone/Tablet Portrait/Tablet Landscape view */}
        <div className={`
          hidden phone:max-desktop:flex mt-4 phone:max-tablet-portrait:justify-center phone:max-tablet-portrait:items-center phone:max-desktop:w-[80%] 
          tablet-portrait:max-desktop:w-full tablet-portrait:max-desktop:gap-3 tablet-portrait:max-desktop:-ml-10 tablet-portrait:max-desktop:pt-2`}>
          <Image
            src="/imgs/selo_RD.png"
            alt="Selo RD Station"
            width={205}
            height={73}
            className="phone:max-tablet-portrait:w-[50%] tablet-portrait:max-desktop:w-[11rem]"
          />
          <div className="flex flex-col justify-center items-end tablet-portrait:max-desktop:gap-1">
            <Image
              src="/imgs/card.webp"
              alt="Cartão de crédito"
              width={16}
              height={16}
              className="w-[1.4rem] h-[1.4rem] m-auto"
            />
            <p className="font-medium text-center text-sm tablet-portrait:max-desktop:w-36 tablet-portrait:max-desktop:pb-1">
              <span className="font-extrabold">Não</span> é necessário Cartão de
              Crédito
            </p>
          </div>
        </div>
        <div className={
          `hidden phone:max-desktop:flex phone:max-desktop:flex-col phone:max-desktop:gap-3 phone:max-desktop:my-4 phone:max-desktop:w-[92%] 
          phone:max-desktop:justify-center phone:max-desktop:items-center phone:max-tablet-portrait:ml-4 tablet-portrait:max-desktop:-ml-8 max-desktop:pt-2 tablet-landscape:max-desktop:-ml-24`}>
          <Image
            src="/imgs/rating.webp"
            alt="Nota de avaliação"
            width={92}
            height={16}
            className="object-contain w-36"
          />
          <p className="font-medium">
            <span className="font-bold">4.9/5</span> média de satisfação
          </p>
        </div>

        {/* Other devices */}
        <div className="w-full flex items-center mt-2 gap-1 text-[0.8rem] max-h-5 phone:max-desktop:hidden">
          <Image
            src="/imgs/card.webp"
            alt="Cartão de crédito"
            width={16}
            height={16}
            className="w-fit h-fit"
          />

          <p className="font-medium pr-3 border-r-2 border-[#15364a98]">
            <span className="font-bold">Não</span> é necessário Cartão de
            Crédito
          </p>

          <Image
            src="/imgs/rating.webp"
            alt="Nota de avaliação"
            width={92}
            height={16}
            className="pl-2 pr-1 object-contain"
          />

          <p className="font-medium">
            <span className="font-bold">4.9/5</span> média de satisfação
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
