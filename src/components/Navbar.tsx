import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
          <Link href="/">
            <Image src="/assets/images/logos/logo.svg" alt="logo" width={165} height={36} />
          </Link>
          <ul className="flex items-center gap-[50px] w-fit">
            <li>
              <Link href="/">Browse</Link>
            </li>
            <li>
              <Link href="/">Popular</Link>
            </li>
            <li>
              <Link href="/">Categories</Link>
            </li>
            <li>
              <Link href="/">Events</Link>
            </li>
            <li>
              <Link href="/">My Booking</Link>
            </li>
          </ul>
          <Link
            href="/"
            className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
          >
            <Image
              src="/assets/images/icons/call.svg"
              className="w-6 h-6"
              alt="icon"
              width={24} height={24}
            />
            <span className="font-semibold">Contact Us</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
