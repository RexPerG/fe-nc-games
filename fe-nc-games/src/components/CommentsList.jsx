import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';

function CommentsList() {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fe-nc-games.onrender.com/api/reviews/${review_id}/comments`)
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
