import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import NoReviews from "./NoReviews";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  let noReview;
  useEffect(() => {
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setReviews(data);
        }
      });
  }, [id]);
  if (reviews.length === 0) {
    return <NoReviews />;
  }
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {reviews.map((review) => (
          <div>
            <div className="flex items-center gap-2">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus uppercase text-neutral-content rounded-full w-12">
                  <span>{review.name.slice(0, 2)}</span>
                </div>
              </div>
              <div>
                <span className="font-semibold mb-0">{review.name}</span>
                <ReactStars
                  value={review.rating}
                  edit={false}
                  size={20}
                  a11y={true}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-500 mt-3">{review.description}</p>
            </div>
            <p className="mt-1">{review.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
