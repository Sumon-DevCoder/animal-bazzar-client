import Link from "next/link";

type TButton = {
  path: string;
  name: string;
};

const PrimaryButton = ({ path, name }: TButton) => {
  return (
    <div>
      <Link
        href={path}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold hvr-grow  py-1 px-2 md:py-2 md:px-4  rounded transition duration-300 "
      >
        {name}
      </Link>
    </div>
  );
};

export default PrimaryButton;