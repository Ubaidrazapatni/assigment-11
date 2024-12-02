import React from "react";
import ChildComponent from "./components/ChildComponents";

export default function Home() {

  const cars = [

    { carImage: "/carolla copy.jpg", carName: "Toyota-Carolla", carPrice: 6000000, carReviews: 3.9 },
    { carImage: "/city copy.jpg", carName: " Honda-City", carPrice: 5500000, carReviews: 4.2 },
    { carImage: "/civic copy.jpg", carName: "Honda-Civic", carPrice: 8500000, carReviews: 4.7 },
    { carImage: "/Suzuki_Alto_-_PNG.png", carName: "Suzuki-Alto", carPrice: 3000000, carReviews: 3.3 },

  ];

  return (
    <div className="bg-slate-100 w-auto h-[600px]">
      <h1 className="text-5xl text-center font-bold underline">Props Car Details Card</h1>
      <div className=" sm:flex sm:justify-center gap-2 mt-[100px] md:gap-4 md:mr-8 lg:gap-[80px] ml-9">
        {cars.map((car, index) => (
          <ChildComponent

            key={index}
            carImage={car.carImage}
            carName={car.carName}
            carPrice={car.carPrice}
            carReviews={car.carReviews}
          />
        ))}
      </div>
    </div>

  );
}




