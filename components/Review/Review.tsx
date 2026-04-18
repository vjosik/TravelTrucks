import React from "react";
import { Review } from "../../lib/api";
import { LuStar } from "react-icons/lu";
import css from "./Review.module.css";

interface ReviewsProps {
  reviews: Review[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet.</p>;
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <LuStar
        key={index}
        className={index < rating ? css.starFilled : css.starEmpty}
      />
    ));
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id} className={css.item}>
            <div className={css.header}>
              <div className={css.avatar}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={css.info}>
                <p className={css.name}>{review.reviewer_name}</p>
                <div className={css.rating}>{renderStars(review.reviewer_rating)}</div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};