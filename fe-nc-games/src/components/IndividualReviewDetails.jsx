import React from "react";

function IndividualReviewDetails({
  review_id,
  title,
  review_img_url,
  owner,
  votes,
  category,
  designer,
  created_at,
  review_body
}) {

  return (
    <section className="card">
      <img src={review_img_url} alt="" width="100" />
      <p>Title: {title}</p>
      <p>Game Designer: {designer}</p>
      <p>Category: {category}</p>
      <p>Review ID: {review_id}</p>
      <p>Review: {review_body}</p>
      <p>Review Author: {owner}</p>
      <p>Votes: {votes}</p>
      <p>Review Created: {created_at}</p>
    </section>
  );
}

export default IndividualReviewDetails;
