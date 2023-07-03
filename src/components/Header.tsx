import Image from "next/image";

const Header = () => (
  <header
    className={`
    flex justify-center items-center w-[100%] 
    phone:h-[4rem]
    tablet-portrait:h-[6rem]
    desktop:h-[7rem]
    `}
  >
    <Image
      src="/logo.png"
      alt="Leadster Logo"
      width={194}
      height={42}
      className="phone:max-tablet-portrait:scale-[0.65]"
    />
  </header>
);

export default Header;