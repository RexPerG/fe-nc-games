import axios from 'axios';

const getComments = (review_id) => {
  return axios.get(`https://fe-nc-games.onrender.com/api/reviews/${review_id}/comments`);
};

export default getComments;