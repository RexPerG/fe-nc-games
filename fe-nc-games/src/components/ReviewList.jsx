import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from '../ReviewCard';

function ReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fe-nc-games.onrender.com/api/reviews').then((response) => {
      setReviewList(response.data.reviews);
      setLoading(false);
    });
  });

  if (isLoading) {
    return <p>Loading Items...</p>;
  }

  return (
    <>
        <section className="box">
            { reviewList.map( review => {
                return <ReviewCard key={review.review_id} title={review.title}  owner={review.owner} img_url={review.review_img_url} category={review.category}/>
            })}
        </section>
    </>
  );
}

export default ReviewList;
