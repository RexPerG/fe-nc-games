import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import postReviewIdComment from '../utils/postReviewIdComment';
import CommentsList from './CommentsList';

const AddReviewIdComment = ({ setCommentsList }) => {
  const { review_id } = useParams();
//   const [newComment, setNewComment] = useState({
//     review_id: `${review_id}`,
//     author: '',
//     body: '',
//   });

//   handleChange = (e) => {
//     setNewComment({
//       ...newComment,
//       [e.target.author]: value,
//       [e.target.body]: value,
//     });
//   };

  console.log('AddReviewComment setCommentsList:', setCommentsList);
  // setCommentsList(newComment)
  // handleSubmit(e){
  //     e.preventDefault();
  //     // useEffect(() => {
  //     //     postReviewIdComment()
  //     //       review_id,
  //     //       author,
  //     //       body,
  //     //     })
  //     //   }, [author, body]);
  //     // };

  // }

  return (
    <>
      <section className="box">
        <h2>Add your comment below:</h2>
      </section>
      <form className="box" action="">
        {/* <form onSubmit={handleSubmit}> */}
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="author"
            id=""
            required
            // onChange={handleChange}
          />
          {/* {console.log(input)} */}
        </div>
        <div>
          <label htmlFor="">Comment</label>
          <textarea
            type="text"
            name="body"
            id=""
            required
            // onChange={handleChange}
          />
        </div>
        <div>
          <Link to={`/reviews/${review_id}`}>
            <button> Submit Comment</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddReviewIdComment;
