import axios from 'axios';

const postReviewIdComment = (review_id, newComment) => {
  return axios.post(`https://fe-nc-games.onrender.com/api/reviews/${Number(review_id)}/comments`, newComment);
};

export default postReviewIdComment;