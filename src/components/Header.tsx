import Image from "next/image";
import Link from "next/link";
import { links } from "../../public/links";

function Header() {
  return (
    <header className="flex justify-center items-center h-[128px] w-[100%]">
      <Link href={links.home}>
        <Image src="/../public/logo.png" alt="Leadster Logo" width={194} height={42} />
      </Link>
    </header>
  );
}

export default Header;
