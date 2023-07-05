import Image from "next/image";
import Link from "next/link";
import * as Icons from "react-icons/fa";
import { links } from "../db/links";
function Footer() {
  const {
    home,
    contato,
    cases,
    ferramenta,
    preco,
    b2b,
    imobiliaria,
    software,
    blog,
    gratuitos,
    guia,
    parceria,
    telefone,
    termosDeUso,
    privacidade,
    linkedin,
    facebook,
    instagram
  } = links;
  return (
    <footer
      className={`
      h-fit
      flex flex-col items-center
      phone:max-tablet-portrait:items-start gap-9 phone:max-tablet-portrait:min-w-0 phone:max-tablet-portrait:w-[85%] phone:max-tablet-portrait:m-auto
      text-[#15364A] pt-12
      `}
    >
      <div className="w-full flex flex-col items-center justify-center phone:max-tablet-portrait:items-start">
        <Link href={home}>
          <Image
            src="/imgs/leadster_270.gif"
            alt="Leadster Logo"
            width={194}
            height={42}
          />
          <span className="text-[0.7rem] pt-1 text-[#15364aa8]">
            Transformando visitantes em clientes.
          </span>
        </Link>
      </div>
      <div className="flex justify-between phone:max-tablet-portrait:flex-col phone:max-tablet-portrait:gap-6 tablet-portrait:w-[95%] tablet-landscape:w-[90%] desktop:w-[70%] big-desktop:w-[45%]">
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[1.2rem] tablet-portrait:max-tablet-landscape:text-[0.95rem] pb-6 phone:max-tablet-portrait:pb-2">
            Links Principais
          </h3>
          <Link href={home} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Home
          </Link>
          <Link href={ferramenta} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Ferramenta
          </Link>
          <Link href={preco} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Preços
          </Link>
          <Link href={contato} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Contato
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[1.2rem] tablet-portrait:max-tablet-landscape:text-[0.95rem] pb-6 phone:max-tablet-portrait:pb-2">Cases</h3>
          <Link href={b2b} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads B2B
          </Link>
          <Link href={software} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads em Software
          </Link>
          <Link href={imobiliaria} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads em Imobiliária
          </Link>
          <Link href={cases} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Cases de Sucesso
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[1.2rem] tablet-portrait:max-tablet-landscape:text-[0.95rem] pb-6 phone:max-tablet-portrait:pb-2">Materiais</h3>
          <Link href={blog} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Blog
          </Link>
          <Link href={parceria} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Parceria com Agências
          </Link>
          <Link href={guia} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Guia Definitivo do Marketing
          </Link>
          <Link href={gratuitos} className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Materiais Gratuitos
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[1.2rem] tablet-portrait:max-tablet-landscape:text-[0.95rem] pb-2">
            Siga a Leadster
          </h3>
          <div className="flex gap-2">
            <Link target="_blank" href={linkedin} className="btn btn-circle border-0 bg-[#F7F8FB] hover:bg-[#e3e4e9] scale-90">
              <Icons.FaLinkedinIn size={18} color="#7D87A8" />
            </Link>
            <Link target="_blank" href={facebook} className="btn btn-circle border-0 bg-[#F7F8FB] hover:bg-[#e3e4e9] scale-90">
              <Icons.FaFacebookF size={18} color="#7D87A8" />
            </Link>
            <Link target="_blank" href={instagram} className="btn btn-circle border-0 bg-[#F7F8FB] hover:bg-[#e3e4e9] scale-90">
              <Icons.FaInstagram size={18} color="#7D87A8" />
            </Link>
          </div>
          <div className="text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium">
            <span>
              contato@leadster.com.br
            </span>
          </div>
          <Link href={telefone} className="group text-[#15364aa8] text-base tablet-portrait:max-tablet-landscape:text-sm font-medium link no-underline transition duration-200">
            <span className="font-extrabold">Telefone: </span>
            <span className="group-hover:text-[#15364a]">(42) 98828-9851</span>
          </Link>
        </div>
      </div>
      <div className="w-full gap-16 font-semibold text-sm tablet-portrait:max-tablet-landscape:text-xs border-t-2 text-[#15364a80] py-8 mt-12 phone:max-desktop:mt-0 phone:max-desktop:py-3 tablet-portrait:max-desktop:pb-5">
        <div className="w-[80%] flex justify-between m-auto phone:max-tablet-portrait:w-full phone:max-desktop:flex-col tablet-portrait:max-desktop:items-center tablet-portrait:max-desktop:text-sm desktop:w-[85%] big-desktop:w-[50%]">
          <p className="phone:max-tablet-portrait:text-center">
            Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
            <Link
              href={home}
              className="text-[#007EFF] hover:text-[#0077e7]"
            >
              Leadster
            </Link>
          </p>
          <p className="text-end phone:max-tablet-portrait:text-center">
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP:80010-000 |{" "}
            <Link
              href={termosDeUso}
              className="text-[#007EFF] hover:text-[#0077e7]"
            >
              Termos de uso
            </Link>
            <span> | </span>
            <Link
              href={privacidade}
              className="text-[#007EFF] hover:text-[#0077e7]"
            >
              Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
