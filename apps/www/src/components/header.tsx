import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 border-b bg-white z-50 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/backoffice-logo.svg"
            width={32}
            height={32}
            alt="Back Office Design System"
          />
          <span className="font-semibold text-lg">
            Back Office Design System
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
            Brand
          </Link>
          <Link href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
            About
          </Link>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="search"
              placeholder="Search Back Office"
              className="pl-10 pr-4 py-1.5 text-sm border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
