"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../components/ui/command";
import { usePathname } from "next/navigation";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];

  useEffect(() => {
    getCategoryList();
    console.log(params);
  }, []);

  const getCategoryList = async () => {
    try {
      const res = await fetch("/api/categories", {
        headers: { accept: "*/*" },
      });
      const arr = await res.json();
      console.log(arr);
      setCategoryList(arr);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (

    
    <div className=" ml-2 h-screen mt-5 flex flex-col ">

      <h2 className="font-bold text-4xl tracking-wide text-center mt-10">
        Finde einen <span className="text-green-800">Meister</span>{" "}
      </h2>
      <h2 className="text-gray-500 text-xl text-center mt-5">
        Suchen Sie Ihren Master und buchen Sie einen Termin mit einem Klick
      </h2> 

<div className="m-10 max-w-[800px] mx-auto flex ">
        <div className="flex flex-grow items-center mr-2 bg-[#f0f0f0] rounded-lg overflow-hidden">
          <Search size={20} className="ml-3 text-gray-400" />
          <input
            type="search"
            placeholder="Service, stylist or salon"
            className="flex-grow bg-transparent p-2 outline-none text-sm"
          />
        </div>

        <div className="  flex flex-grow items-center bg-[#f0f0f0] rounded-lg overflow-hidden">
          <MapPin size={20} className="ml-3 text-gray-400" />
          <input
            type="search"
            placeholder="Berlin, BE"
            className="mr-2 flex-grow bg-transparent p-2 outline-none text-sm"
          />
        </div>

        <button
          type="submit"
          className="ml-2 px-5 py-2 bg-green-500 text-white rounded-lg text-sm">
          Finden
        </button>
      </div>
      
    <Command>
      <CommandList className="overflow-visible">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {categoryList &&
            categoryList.map((item, index) => (
              <CommandItem key={index}>
                <Link href={""}>
                  <div className={`block p-3 text-lg rounded-md cursor-pointer hover:bg-green-300 ${category === item.name ? "bg-green-200" : "bg-white"}`}>
                    {item.name}
                  </div>
                </Link>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
  );
}

export default CategoryList;

