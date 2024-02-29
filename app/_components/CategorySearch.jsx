import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function CategorySearch() {
  return (
    <div className="mb-10 items-center flex flex-col gap-4">
      <h2 className="font-bold text-4xl tracking-wide">
        Finde einen <span className="text-green-800">Meister</span>{" "}
      </h2>
      <h2 className="text-gray-500 text-xl">
        Suchen Sie Ihren Master und buchen Sie einen Termin mit einem Klick
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Was möchtest du finden?" />
        <Button type="submit">
            <Search className='h-4 w-4 mr-2' />
            Finden</Button>
      </div>

    </div>
  );
}

export default CategorySearch;
