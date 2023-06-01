import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';
import getComments from '../utils/apiRequests';

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
    return <p>Loading Items...</p>;
  }

  return (
    <>
      <section>
        {commentsList.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              author={comment.author}
              body={comment.body}
              comment_id={comment.comment_id}
              created_at={comment.created_at}
              votes={comment.votes}
            />
          );
        })}
      </section>
    </>
  );
}

export default CommentsList;
