import { useParams } from 'react-router-dom';
import IndividualReviewDetails from './IndividualReviewDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentsList from './CommentsList';

function IndividualReviewPage() {
  const { review_id } = useParams();

  const [reviewDetails, setReviewDetails] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fe-nc-games.onrender.com/api/reviews/${review_id}`)
      .then((response) => {
        setReviewDetails(response.data.review);
        setLoading(false);
      });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading Items...</p>;
  }

  return (
    <section className="box">
      <h2>Review Details</h2>
      <section>
        <IndividualReviewDetails
          key={reviewDetails.review_id}
          review_img_url={reviewDetails.review_img_url}
          review_id={reviewDetails.review_id}
          title={reviewDetails.title}
          review_body={reviewDetails.review_body}
          owner={reviewDetails.owner}
          votes={reviewDetails.votes}
          category={reviewDetails.category}
          designer={reviewDetails.designer}
          created_at={reviewDetails.created_at}
        />
      </section>
      <section >
      <h2>Comments</h2>
        <CommentsList key={review_id} />
      </section>
      <section>
        <input type="text" typeof="onSubmit" />
        <button>Add New Comment</button>
      </section>
    </section>
  );
}

export default IndividualReviewPage;
