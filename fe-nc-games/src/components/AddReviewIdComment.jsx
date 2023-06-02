import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import postReviewIdComment from '../utils/postReviewIdComment';



const AddReviewIdComment = () => {
  const { review_id } = useParams();
  const navigate = useNavigate();

const [newComment, setNewComment] = useState({})

const handleNameChange = (event) => {
  event.preventDefault();



}

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: e.target[0].value,
      body: e.target[1].value,
    };

    postReviewIdComment(review_id, newComment)
      .then((response) => {
        console.log('Comment posted successfully!');
        navigate(`/reviews/${review_id}`);
      })
      .catch((error) => {
        console.log(error.response.status, error.response.data.msg);
        navigate(`/error-user-not-found`);
      });
  };

  return (
    <>
      <section className="container">
        <h2>Add your comment below:</h2>
      </section>
      <form className="container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="author" id="" required onChange={handleNameChange}/>
        </div>
        <div>
          <label htmlFor="">Comment</label>
          <textarea type="text" name="body" id="" required />
        </div>
        <div>
          <button type="submit"> Submit Comment</button>
        </div>
      </form>
    </>
  );
};

export default AddReviewIdComment;
