import React from "react";
import Image from "next/image";
import Link from "next/link";

function MasterList() {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl ">Beliebte Meister</h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-7 mt-4" 
      >
        <div className="border-[1px] rounded-lg p-3
        cursor-pointer hover:border-green-700 hover:shadow-sm transition-all 
        ease-in-out
        "> 
          <Image
            src="/photo-4.jpg"
            alt="logo"
            width={500}
            height={400}
            className="h-[400px] w-full object-cover rounded-lg"
          />
          <div className="mt-3 items-baseline flex flex-col">
            <h2
              className="text-[11px] bg-green-900 p-2 rounded-full px-2
             text-white "
            >
              Franchesco Dutty
            </h2>
            <h2 className="font-bold">Beauty Salon</h2>
            <Link className="w-full" href={"/details/1"}>
            <h2
              className="p-2 px-3 border-[1px] border-green-700
            text-green-700 rounded-full w-full text-center m-2
            cursor-pointer hover:bg-green-700 hover:text-white
            "
            >
              Buchen Jetzt
            </h2>
            </Link>
          </div>
        </div>

        <div className="border-[1px] rounded-lg p-3
        cursor-pointer hover:border-green-700 hover:shadow-sm transition-all 
        ease-in-out
        "> 
          <Image
            src="/photo-1.jpg"
            alt="logo"
            width={500}
            height={400}
            className="h-[400px] w-full object-cover rounded-lg"
          />
          <div className="mt-3 items-baseline flex flex-col">
            <h2
              className="text-[11px] bg-green-900 p-2 rounded-full px-2
             text-white "
            >
              Franchesco Dutty
            </h2>
            <h2 className="font-bold">Beauty Salon</h2>
            <Link className="w-full" href={"/details/2"}>
            <h2
              className="p-2 px-3 border-[1px] border-green-700
            text-green-700 rounded-full w-full text-center m-2
            cursor-pointer hover:bg-green-700 hover:text-white
            "
            >
              Buchen Jetzt
            </h2>
            </Link>
          </div>
        </div>

        <div className="border-[1px] rounded-lg p-3
        cursor-pointer hover:border-green-700 hover:shadow-sm transition-all 
        ease-in-out
        "> 
          <Image
            src="/photo-2.jpg"
            alt="logo"
            width={500}
            height={400}
            className="h-[400px] w-full object-cover rounded-lg"
          />
          <div className="mt-3 items-baseline flex flex-col">
            <h2
              className="text-[11px] bg-green-900 p-2 rounded-full px-2
             text-white "
            >
              Franchesco Dutty
            </h2>
            <h2 className="font-bold">Beauty Salon</h2>
            <Link className="w-full" href={"/details/3"}>
            <h2
              className="p-2 px-3 border-[1px] border-green-700
            text-green-700 rounded-full w-full text-center m-2
            cursor-pointer hover:bg-green-700 hover:text-white
            "
            >
              Buchen Jetzt
            </h2>
            </Link>
          </div>
        </div>

        <div className="border-[1px] rounded-lg p-3
        cursor-pointer hover:border-green-700 hover:shadow-sm transition-all 
        ease-in-out
        "> 
          <Image
            src="/photo-3.jpg"
            alt="logo"
            width={500}
            height={400}
            className="h-[400px] w-full object-cover rounded-lg"
          />
          <div className="mt-3 items-baseline flex flex-col">
            <h2
              className="text-[11px] bg-green-900 p-2 rounded-full px-2
             text-white "
            >
              Franchesco Dutty
            </h2>
            <h2 className="font-bold">Beauty Salon</h2>
            <Link className="w-full" href={"/details/4"}>
            <h2
              className="p-2 px-3 border-[1px] border-green-700
            text-green-700 rounded-full w-full text-center m-2
            cursor-pointer hover:bg-green-700 hover:text-white
            "
            >
              Buchen Jetzt
            </h2>
            </Link>
          </div>
        </div>

    
      
     
      
      </div>
    </div>
  );
}

export default MasterList;

