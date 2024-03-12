import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explorePage",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-between ml-4 mr-4 mt-1 ">
      <div className="flex items-center gap-20 right-4">
        <Link href="/">
          <Image src="/logo3.png" alt="logo" width={100} height={100} />
        </Link>

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li
                className="hover:text-green-700
            cursor-pointer hover:scale-105
            transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Link href="/auth"><Button>Get Started</Button></Link>
      
    </div>
  );
}

export default Header;

