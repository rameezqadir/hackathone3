import React from "react";
import Image from "next/image";
import Link from "next/link";
import RentalSummary from "@/app/RentalSummary/page";



const CarCard = ({ car = {} }: any) => {
  const { name, type, imageSrc, capacity, transmission, fuel, pricePerDay } = car;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full md:max-w-2xl relative">
      {/* Heart Icon */}
      <div className="absolute top-3 right-3 text-red-500 text-2xl cursor-pointer">
        ❤️
      </div>

      {/* Car Image */}
      <div className="relative w-full h-48 md:w-1/2 md:h-auto">
        <Image 
          src={imageSrc} 
          alt={name} 
          layout="fill" 
          objectFit="contain"
          priority
        />
      </div>

      {/* Car Details */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Name & Type */}
        <div className="mb-3">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-500">{type}</p>
        </div>

        {/* Features */}
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <span>⛽ {fuel}L</span>
          <span>⚙️ {transmission}</span>
          <span>👥 {capacity} People</span>
        </div>

        {/* Price & Rent Now Button */}
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-gray-800">Rs.{pricePerDay}/day</p>
          <Link href="/RentalSummary"><button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
            Rent Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default function HondaCivic() {
  const carDetails = {
    name: "Honda Civic",
    type: "Sedan",
    imageSrc: "/Civic.png", 
    capacity: 5,
    transmission: "Automatic",
    fuel: 50,
    pricePerDay: 7000,
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <CarCard car={carDetails} />
      

  
    </div>
   
  );
}
