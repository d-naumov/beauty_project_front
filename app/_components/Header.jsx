import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
  ];
  return (
    <div className='flex items-center justify-between ml-4 mr-4 mt-1'>
        
        <div className='flex items-center gap-20 right-4'>
    
         <Image src="/logo3.png" alt="logo" width={100} height={100}  />

      <ul className='md:flex gap-8 hidden'>
        {Menu.map((item,index)=>(
            <Link href={item.path}>
            <li className='hover:text-green-700
            cursor-pointer hover:scale-105
            transition-all ease-in-out'>{item.name}</li>
            </Link>
        ))}
      </ul>
        </div>
     <Button>Get Started</Button>
    </div>
  );
}

export default Header;

