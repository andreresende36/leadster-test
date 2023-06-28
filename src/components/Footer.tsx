import Image from "next/image";
import Link from "next/link";
import * as Icons from "react-icons/fa";
function Footer() {
  return (
    <footer
      className={`
      h-fit
      flex flex-col items-center gap-9
      text-[#15364A] pt-12
      `}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src="/../public/leadster_270.gif"
          alt="Leadster Logo"
          width={194}
          height={42}
        />
        <span className="text-[0.7rem] pt-1 text-[#15364aa8]">
          Transformando visitantes em clientes.
        </span>
      </div>
      <div className="flex w-[70%] justify-between">
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-[0.95rem] pb-6">
            Links Principais
          </span>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Home
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Ferramenta
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Preços
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Contato
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-[0.95rem] pb-6">Cases</span>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads B2B
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads em Software
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads em Imobiliária
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Cases de Sucesso
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-[0.95rem] pb-6">Materiais</span>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Blog
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Parceria com Agências
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Guia Definitivo do Marketing
          </a>
          <a className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Materiais Gratuitos
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-[0.95rem] pb-1">
            Siga a Leadster
          </span>
          <div className="flex gap-2">
            <a className="btn btn-circle border-0 bg-[#F7F8FB] hover:bg-[#e3e4e9] scale-90">
              <Icons.FaLinkedinIn size={18} color="#7D87A8" />
            </a>
            <a className="btn btn-circle border-0 bg-[#F7F8FB] hover:bg-[#e3e4e9] scale-90">
              <Icons.FaFacebookF size={18} color="#7D87A8" />
            </a>
            <a className="btn btn-circle border-0 bg-[#F7F8FB] hover:bg-[#e3e4e9] scale-90">
              <Icons.FaInstagram size={18} color="#7D87A8" />
            </a>
          </div>
          <a className="group text-[#15364aa8] text-sm font-medium link no-underline transition duration-200">
            <span className="font-extrabold">Email: </span>
            <span className="group-hover:text-[#15364a]">
              contato@leadster.com.br
            </span>
          </a>
          <a className="group text-[#15364aa8] text-sm font-medium link no-underline transition duration-200">
            <span className="font-extrabold">Telefone: </span>
            <span className="group-hover:text-[#15364a]">(42) 98828-9851</span>
          </a>
        </div>
      </div>
      <div className="w-full gap-16 font-semibold text-xs border-t-2 text-[#15364a80] py-8 mt-12">
        <div className="w-[70%] flex justify-between m-auto">
          <p>
            Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
            <Link
              href="http://google.com.br"
              className="text-[#007EFF] hover:text-[#0077e7]"
            >
              Leadster
            </Link>
          </p>
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP:80010-000 |{" "}
            <Link
              href="http://google.com.br"
              className="text-[#007EFF] hover:text-[#0077e7]"
            >
              Termos de uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
