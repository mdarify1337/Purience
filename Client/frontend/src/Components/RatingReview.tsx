import React from 'react';

interface RatingReviewProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  static_rating: boolean;
  static_n: number;
  rating_count: number;
  totalStars?: number; // Optional, default to 5
}

const RatingReview: React.FC<RatingReviewProps> = ({
  rating,
  setRating,
  static_rating,
  static_n,
  rating_count,
  totalStars = 5, // Default value
}) => {
  const displayedRating = static_rating ? static_n : rating;

  const handleStarClick = (star: number) => {
    if (!static_rating) {
      setRating(star);
    }
  };

  return (
    <div className="pl-2 mt-2 flex items-center gap-2 ">
      <div className="flex items-center space-x-1  ">
        {[...Array(totalStars)].map((_, index) => {
          const starNumber = index + 1;
          return (
            <span
              key={starNumber}
              className={`cursor-pointer text-base ${
                displayedRating >= starNumber ? 'text-yellow-400' : 'text-gray-400'
              }`}
              role="button"
              aria-label={`Rate ${starNumber} stars`}
              tabIndex={0}
              onClick={() => handleStarClick(starNumber)}
              onKeyDown={(e) =>
                e.key === 'Enter' && handleStarClick(starNumber)
              }
            >★</span>
          );
        })}
      </div>
      <span className="text-[12px] text-dark_blue text-center flex items-center">
        {displayedRating} ({rating_count})
      </span>
    </div>
  );
};

export default RatingReview;
