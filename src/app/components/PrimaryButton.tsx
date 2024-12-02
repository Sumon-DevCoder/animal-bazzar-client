/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

type TButton = {
  path: string;
  name: string;
  icons?: any;
};

const PrimaryButton = ({ path, name, icons }: TButton) => {
  return (
    <div>
      <Link
        href={path}
        className="flex items-center text-sm md:text-md bg-green-600 text-white rounded-lg px-4 py-2 transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {icons} {name}
      </Link>
    </div>
  );
};

export default PrimaryButton;
