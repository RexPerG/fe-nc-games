function CommentCard({ comment_id, author, body, votes, created_at }) {
  
  return (
    <>
      <section className="card">
        <p>Comment ID: {comment_id}</p>
        <p>Author: {author}</p>
        <p>Comment: {body}</p>
        <p>Votes: {votes}</p>
        <p>Date Created: {created_at}</p>
      </section>
    </>
  );
}

export default CommentCard;
