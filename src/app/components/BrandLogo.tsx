import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/assets/logo.png";

const BrandLogo = () => {
  return (
    <div>
      <Link href={`/`} className="flex items-center -space-x-3">
        <Image
          className="h-14 w-24 md:h-16 md:w-24 mt-1 brightness-150 dark:brightness-200"
          src={logoImg}
          alt="Animal Bazaar Logo"
        />
        <span className="text-lg md:text-2xl text-[#27B5AC] font-semibold dark:text-[#016A62]  dark:brightness-200 text-nowrap">
          Animal Bazaar
        </span>
      </Link>
    </div>
  );
};

export default BrandLogo;
