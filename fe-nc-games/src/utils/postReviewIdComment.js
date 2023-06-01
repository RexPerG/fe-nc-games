import axios from 'axios';

const postReviewIdComment = (review_id) => {
  return axios.post(`https://fe-nc-games.onrender.com/api/reviews/${review_id}/comments`);
};

export default postReviewIdComment;