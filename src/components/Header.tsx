import Image from "next/image";

function Header() {
  return ( <header className='flex justify-center items-center h-[128px] w-[100%]'>
    <Image
    src="/../public/logo.png"
    alt="Leadster Logo"
    width={194}
    height={42}
    />
</header> );
}

export default Header;