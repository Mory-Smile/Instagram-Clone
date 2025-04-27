import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="shadow-sm border-b-0.99 sticky top-0 bg-white z-50 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/Instagram_logo_black.webp"
            width={96}
            height={96}
            alt="Instagram logo"
          />
        </Link>

        <Link href="/" className="lg:hidden">
          <Image
            src="/Instagram_logo.webp"
            width={40}
            height={40}
            alt="Instagram logo"
          />
        </Link>

        <input
          type="search"
          placeholder="search..."
          className="bg-gray-50 border border-gray-300 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />

        <button className="text-sm font-semibold text-blue-500 cursor-pointer">
          Log In
        </button>
      </div>
    </div>
  );
}
