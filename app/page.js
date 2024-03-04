import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import MasterList from "./_components/MasterList";



export default function Home() {
  return (
    <div>
      <Hero/>
      <CategorySearch/>
      <MasterList/>
    </div>
  );
}
