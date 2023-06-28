import Image from "next/image";
import Link from "next/link";
import * as Icons from "react-icons/fa";
import { links } from "../../public/links";
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
    email,
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
          <Link href={home} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Home
          </Link>
          <Link href={ferramenta} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Ferramenta
          </Link>
          <Link href={preco} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Preços
          </Link>
          <Link href={contato} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Contato
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-[0.95rem] pb-6">Cases</span>
          <Link href={b2b} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads B2B
          </Link>
          <Link href={software} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads em Software
          </Link>
          <Link href={imobiliaria} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Geração de Leads em Imobiliária
          </Link>
          <Link href={cases} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Cases de Sucesso
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-[0.95rem] pb-6">Materiais</span>
          <Link href={blog} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Blog
          </Link>
          <Link href={parceria} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Parceria com Agências
          </Link>
          <Link href={guia} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Guia Definitivo do Marketing
          </Link>
          <Link href={gratuitos} className="text-[#15364aa8] text-sm font-medium link no-underline hover:text-[#1d4c69] transition duration-200">
            Materiais Gratuitos
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-[0.95rem] pb-1">
            Siga a Leadster
          </span>
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
          <div className="text-[#15364aa8] text-sm font-medium">
            <span>
              contato@leadster.com.br
            </span>
          </div>
          <Link href={telefone} className="group text-[#15364aa8] text-sm font-medium link no-underline transition duration-200">
            <span className="font-extrabold">Telefone: </span>
            <span className="group-hover:text-[#15364a]">(42) 98828-9851</span>
          </Link>
        </div>
      </div>
      <div className="w-full gap-16 font-semibold text-xs border-t-2 text-[#15364a80] py-8 mt-12">
        <div className="w-[80%] flex justify-between m-auto">
          <p>
            Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
            <Link
              href={home}
              className="text-[#007EFF] hover:text-[#0077e7]"
            >
              Leadster
            </Link>
          </p>
          <p className="text-end">
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
