import React from "react";
import { Users } from 'lucide-react';
import Image from "next/image"
import Link from "next/link";


const App = () => {
  return (
    <Users size={48} color="black" />
  );
};


export default function CarData (){
    return(
        <div className="flex flex-wrap justify-around">
            <div>
      <Image src="/civic.png" alt="CIVIC" width={450} height={450} className="text-red mx-4 mt-2"/>
      
    <p className="text-red-400 mx-4">Honda Civic 2024</p>
    <div >
    <Link href="../../Component/CarCard"><button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">Self Pickup</button></Link>
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">With Driver</button></div>
</div>
<div>
<Image src="/city.jpg" alt="City" width={450} height={450} className="text-red mx-4 mt-2"/>
      
    <p className="text-red-400 mx-4">Honda City 2024</p>
    <div >
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">Self Pickup</button>
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">With Driver</button></div>
</div>

<div>
<Image src="/corolla.jfif" alt="corolla" width={450} height={450} className="text-red mx-4 mt-2"/>
      
    <p className="text-red-400 mx-4">Toyota Corolla 2024</p>
    <div >
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">Self Pickup</button>
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">With Driver</button></div>
</div>

<div>
<Image src="/hondabrv.jpg" alt="Honda BRV" width={450} height={450} className="text-red mx-4 mt-2"/>
      
    <p className="text-red-400 mx-4">Honda BRV 2024</p>
    <div >
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">Self Pickup</button>
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">With Driver</button></div>
</div>

<div>
<Image src="/MG.jpg" alt="MG Cars" width={450} height={450} className="text-red mx-4 mt-2"/>
      
    <p className="text-red-400 mx-4">MG Cars</p>
    <div >
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">Self Pickup</button>
    <button className="bg-blue-900 text-white px-2 py-2 rounded-2xl mx-2">With Driver</button></div>
</div>


        </div>
    )
}
