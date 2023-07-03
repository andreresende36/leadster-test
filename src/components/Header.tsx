import Link from "next/link";
import Image from "next/image";
import { links } from "../../public/links";

const Header = () => (
  <header className={`
    flex justify-center items-center w-[100%] 
    phone:h-[4rem]
    tablet-portrait:h-[6rem]
    desktop:h-[7rem]
    `}>
    <Link href={links.home}>
      <Image src="/logo.png" alt="Leadster Logo" width={194} height={42} className="phone:max-tablet-portrait:scale-[0.65]"/>
    </Link>
  </header>
);

export default Header;
