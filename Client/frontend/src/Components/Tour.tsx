import React, { useState } from "react";
import RatingReview from "./RatingReview";
import { FaPerson } from "react-icons/fa6";

interface TourProps {
  tour: {
    id: number;
    location: string;
    title: string;
    rating: number;
    reviews: number;
    duration: string;
    days: number;
    price: number;
    image: string;
  };
}

const Tour: React.FC<TourProps> = ({ tour }) => {
  const [rating, setRating] = useState<number>(tour.rating); // Use the initial rating from props

  return (
    <div className="w-[300px] rounded-[12px] h-[370px] p-2 border-[#E7E6E6] border-[1.5px] shadow-custom">
      <img
        src={tour.image}
        alt={tour.title}
        className="mb-2 object-cover h-[52%] rounded-lg  w-full"
      />
      <div>
        <p className="text-dark_gray text-xs mb-2 lg:mt-2 pl-2 opacity-80">
          {tour.location}
        </p>
        <p className="text-dark_blue px-2 font-normal text-sm">{tour.title}</p>
      </div>
      <div>
        <RatingReview
          rating={rating}
          setRating={setRating}
          static_rating={true}
          static_n={4}
          rating_count={tour.reviews}
        />
      </div>
      <hr className="w-[95%] mr-auto ml-auto my-4" />
      <div className="text-dark_blue flex items-center justify-between px-3">
        <p className="text-sm">{tour.days} Days</p>
        <p className="flex items-center font-normal">
          From{" "}
          <span className="ml-2 font-semibold">
            ${tour.price}/
          </span>
          <FaPerson />
        </p>
      </div>
    </div>
  );
};

export default Tour;
