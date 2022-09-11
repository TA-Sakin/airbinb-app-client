import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

const AddReview = () => {
  const [rating, setRating] = useState(5);
  const { currentUser: user } = useAuth();
  // const [review, setReview] = useState([]);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.desc.value;
    if (rating) {
      const review = {
        propertyId: id,
        name: user?.displayName,
        rating: rating,
        description: description,
      };
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("Thanks for your feedback.");
            e.target.reset();
          }
        });
    }
  };
  return (
    <div>
      <div>
        <div className="flex mb-1">
          <p className="mt-2 font-bold">Rating: </p>
          <p>
            <ReactStars
              value={5}
              edit={true}
              onChange={ratingChanged}
              size={24}
              a11y={true}
              activeColor="#ffb700"
            />
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            name="desc"
            placeholder="Write your feedback"
            className="input input-bordered w-full max-w-xs h-32"
          />
          <input
            type="submit"
            value="Add"
            className="btn btn-secondary btn-md w-full max-w-xs flex mt-3"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddReview;
