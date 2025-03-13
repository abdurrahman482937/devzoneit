"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/favicon.ico";

const Navbar = () => {
  const pathname = usePathname(); // Current route ber korar jonno

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-[#091423] h-[100px] w-[100%]">
      <div className="px-[15%] h-[100%] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image alt="Logo" src={Logo} className="w-[55px] h-[50px]"></Image>
          <h2 className="text-[35px] text-[mediumspringgreen] opacity-95 ">DevZone IT</h2>
        </div>

        <nav className="text-[#f2f2f2] font-semibold flex items-center gap-[24px] text-[18px]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded ${
                pathname === item.path ? "navButton" : "bg-none"
              }`}
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </nav>
        <div className="">
          <Link href="/login" className="px-4 py-2 rounded fillButton">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

