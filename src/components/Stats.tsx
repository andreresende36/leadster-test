import Image from "next/image";
import Link from "next/link";
import { links } from "../../public/links";

function Stats() {
  return (
    <section
      className={`
      bg-[#F0F8FF] h-[48rem] w-[100%] 
      flex justify-center items-center gap-10 text-[#15364A]
      phone: flex-col phone:gap-0 phone:h-fit
      `}
    >
      <div className="w-[50%] flex justify-end items-center phone:w-full phone:min-h-0 phone:h-80 phone:mt-2">
        <Image
          src="/comparativo.png"
          alt="Comparativo captações de leads"
          width={739}
          height={687}
          className="scale-[0.88]"
        />
      </div>

      <div className="w-[50%] flex flex-col justify-start items-center phone:w-full ">
        <div className="w-full flex flex-col gap-4 phone:gap-2 phone:ml-20">
          <p className="text-4xl font-medium phone:text-2xl">
            Pronto para triplicar sua <br />
            <span className="font-bold">Geração de Leads?</span>
          </p>
          <p className="w-fit text-xl font-medium pb-5 pr-48 border-b-2 border-[#15364a2c] phone:text-base phone:pr-0 phone:border-hidden phone:pb-0">
            Criação e ativações em <span className="font-bold">4 minutos.</span>
          </p>
        </div>

        <div className="w-full flex items-center mt-4 gap-3 phone:flex-col">
          <Link
            href={links.demonstracao}
            className="phone:w-full phone:flex phone:justify-center"
          >
            <button
              className={`btn rounded-full bg-[#0083FF] border-0 text-white 
              font-semibold px-8 py-[1.5rem] w-fit h-fit shadow-md 
              hover:bg-[#0077e7] phone:w-80
              `}
            >
              Ver Demonstração
            </button>
          </Link>
          <Image
            src="/selo_RD.png"
            alt="Selo RD Station"
            width={205}
            height={73}
            className="scale-[0.88] phone:hidden"
          />
        </div>

        {/* Phone view */}
        <div className="hidden phone:flex mt-4 phone:justify-around phone:items-center phone:w-[92%]">
          <Image
            src="/selo_RD.png"
            alt="Selo RD Station"
            width={205}
            height={73}
            className="scale-[0.75]"
          />
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/card.webp"
              alt="Cartão de crédito"
              width={16}
              height={16}
              className="w-fit h-fit"
            />
            <p className="font-medium text-center text-sm">
              <span className="font-extrabold">Não</span> é necessário Cartão de
              Crédito
            </p>
          </div>
        </div>
        <div className="hidden phone:flex phone:flex-col phone:gap-3 phone:my-4 phone:w-[92%] phone:justify-center phone:items-center">
          <Image
            src="/rating.webp"
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
        <div className="w-full flex items-center mt-2 gap-1 text-[0.8rem] max-h-5 phone:max-tablet-portrait:hidden">
          <Image
            src="/card.webp"
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
            src="/rating.webp"
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
