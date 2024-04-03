import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { Button } from "../../../components/ui/button";

function MasterDetails() {

    const SocialMediaList=[
        {
            id:1,
            icon:'/instagram.png',
            url:''
        },
        {
            id:1,
            icon:'/facebook.png',
            url:''
        },
    ]

  return ( 
    <>
    <div className="grid grid-col-1 md:grid-col-3
    border-[1px] p-5 mt-5 rounded-lg">
      {/* Doctor foto */}
      <div>
        <Image
          src="/photo-4.jpg"
          alt="logo"
          width={200}
          height={200}
          className="rounded-lg h-[450px] w-[370px] object-cover"
        />
      </div>

      <div className="col-span-2 mt-5 flex flex-col gap-2 items-baseline">
        {/* Doctor info */}
        <h2 className="font-bold text-2xl">Beauty Salon</h2>
        <h2 className="font-bold">Franchesco Dutty</h2>

        <h2 className="text-md flex gap-2 text-gray-500">
          <MapPin />
          Sallvador str. 12550, Berlin
        </h2>

        <h2 className="text-md flex gap-2 text-gray-500">
          <FaPhone />
          0306676621
        </h2>
        
        <div className="flex gap-3">
            {SocialMediaList.map((item,index) =>
            <Image src={item.icon} key={index}
            width={30}
            height={30}
            />
            )}
        </div>
        
      <Button className="m-3 rounded-xl">Temrin machen</Button>

      </div>

    </div>

<div className="p-3 border-[1px] rounded-lg mt-5">
<h2 className="font-bold text-[20px]">About Me</h2>
<p className="text-gray-500 tracking-wide mt-2">Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. In asperiores voluptates 
    excepturi qui eum accusamus quos doloribus, 
    beatae dolorum quaerat illo natus quae veniam 
    doloremque ut incidunt ullam blanditiis nulla!
    Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. In asperiores voluptates 
    excepturi qui eum accusamus quos doloribus, 
    beatae dolorum quaerat illo natus quae veniam 
    doloremque ut incidunt ullam blanditiis nulla!</p>
</div>
</>
  );
}

export default MasterDetails;

