import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';

function ReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fe-nc-games.onrender.com/api/reviews')
      .then((response) => {
        setReviewList(response.data.reviews);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading Items...</p>;
  }

  return (
    <>
      <section style={{ scroll: true, height: 300, overflow: "scroll", overflowX: "hidden"}}>
        {reviewList.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </section>
    </>
  );
}

export default ReviewList;
