"use client";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function CategorySearch() {


  const [categoryList, setCategoryList] = useState([]);
  
  useEffect(() => {
    getCategoryList();
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
    <div className="mb-10 items-center flex flex-col gap-4 px-5">
      <h2 className="font-bold text-4xl tracking-wide">
        Finde einen <span className="text-green-800">Meister</span>{" "}
      </h2>
      <h2 className="text-gray-500 text-xl">
        Suchen Sie Ihren Master und buchen Sie einen Termin mit einem Klick
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Was möchtest du finden?" />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Finden
        </Button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
        {categoryList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col text-center items-center p-5 hover:scale-110 transition-all ease-in-out cursor-pointer 
          "
          >
            <Image src="/menu-1.png" alt="logo" width={100} height={100} />
            <label>{item.name}</label>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CategorySearch;

