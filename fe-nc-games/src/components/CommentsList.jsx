import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';
import getComments from '../utils/getComments';

function CommentsList() {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id)
    .then((response) => {
      setCommentsList(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className='box'>Loading Items...</p>;
  }
  
  if (commentsList.length === 0) {
    return <p>No comments yet, why not add one?</p>
  }

  return (
    <>
<section>
      {commentsList.map((comment) => (
        <CommentCard key={comment.comment_id} {...comment} />
      ))}
    </section>
    </>
  );
}

export default CommentsList;
