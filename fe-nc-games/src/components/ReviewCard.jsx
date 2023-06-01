import { Link } from 'react-router-dom';

function ReviewCard({
  review_id,
  title,
  owner,
  review_img_url,
  votes,
  category,
}) {

  return (
    <>
      <section className="card">
        <p>Title: {title}</p>
        <img src={review_img_url} alt="" width="100" />
        <p>Author: {owner}</p>
        <p>Votes: {votes}</p>
        <p>Category: {category}</p>
        <Link className="Link" to={`/reviews/${review_id}`}>
          <button className="box">Review Details</button>
        </Link>
      </section>
    </>
  );
}

export default ReviewCard;
