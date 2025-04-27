import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center mx-auto min-w-dvh">
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
      </div>
    </div>
  );
}
