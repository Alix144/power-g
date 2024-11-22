import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-5 sm:mb-10 py-3 w-full flex justify-between items-center">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src="/images/dumbbells.png"
            alt="Logo"
            width={60}
            height={60}
            className="mr-2"
          />
          <span className="text-secondary font-bold text-xl">PowerG</span>
        </div>
      </Link>

<Link href={"/form"}>formm</Link>
      <Link className="main-btn-style" href={"/signin"}>
        Sign in
      </Link>
    </header>
  );
};

export default Header;
