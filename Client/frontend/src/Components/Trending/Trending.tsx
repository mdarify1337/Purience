import React, { useState } from 'react';
import RatingReview from '../RatingReview';

const Trending = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <section
      className="relative font-poppins my-28 w-full text-black bg-cover bg-center h-auto lg:h-[600px] "
      style={{ backgroundImage: "url('/images/trending.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-15 trending-overlay bg-custom-gradient"></div>

      <div className="relative w-full h-full backdrop-blur-sm flex flex-col lg:flex-row items-center  justify-center lg:px-16 px-6 p-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="/images/tour-img.jpg"
            className="rounded-full shadow-lg object-cover lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]"
            alt="Agafay Adventure"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-white lg:ml-12 flex lg:items-start items-center flex-col ">
          {/* Trending Now Tag */}
          <p className="inline-block font-semibold px-4 py-2 text-xs  bg-yellow-400 rounded-full text-black">
            Trending Now
          </p>

          {/* Title */}
          <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Agafay Desert Adventure
          </h1>

          {/* Rating and Description */}
          <div className="mt-4 text-center flex items-center lg:items-start flex-col">
            <p className="text-xs md:text-sm flex items-center">
              Marrakech, Morocco |{' '}
              <span className="ml-2 flex items-center text-white text-center">
                <RatingReview
                  rating={rating}
                  setRating={setRating}
                  static_rating={true}
                  static_n={5}
                  rating_count={5}
                />
              </span>
            </p>
            <p className="mt-4 text-xs md:text-sm text-white text-center">
              Experience the thrill of an ATV ride across the Agafay Desert near Marrakech.
            </p>
          </div>

          {/* Call to Action Button */}
          <button className="mt-6 px-8 md:px-12 py-2 md:py-3 font-medium bg-orange-500 text-black text-xs md:text-sm rounded-3xl shadow-2xl hover:bg-orange-600 duration-300 ease-in-out transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
