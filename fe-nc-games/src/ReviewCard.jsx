import { Link } from 'react-router-dom';

function ReviewCard ({review_id, title, designer, owner, review_img_url, review_body, created_at, votes, category}) {

    return (
        <section>
            <Link className='Link' to={`/review/${review_id}`}>
                <section className="card">
                    <p>Title: {title}</p>
                    <p>Designer: {designer}</p>
                    <p>Review: {review_body}</p>
                    <img src={review_img_url} alt='' width='100'></img>
                    <p>{owner}</p>
                    <p>Votes: £{votes}</p>
                    <p>Category: {category}</p>
                    <p>Created: {created_at}</p>
                </section>
            </Link>
        </section>

    )
}

export default ReviewCard;