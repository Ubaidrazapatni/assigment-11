import React from "react";

interface CarProps {
  carImage: string;
  carName: string;
  carPrice: string | number;
  carReviews: string | number;
}
const ChildComponent: React.FC<CarProps> = ({ carImage, carName, carPrice, carReviews }) => {
  return (

    <div className="car-card">
      <div className="w-[250px] h-[250px]">
        <img src={carImage} alt={carName} className="mt-5 " />
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <h3 className="text-xl font-bold">{carName}</h3>
        <p className="text-xl font-bold">Price: {carPrice}</p>
        <p className="text-xl font-bold text-green-700">Reviews: {carReviews}</p>
      </div>
    </div>

  );
};

export default ChildComponent;
