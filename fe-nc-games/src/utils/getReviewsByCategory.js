import axios from 'axios';

const getReviewsByCategory = () => {
  return axios.get(`https://fe-nc-games.onrender.com/api/categories`);
};

export default getReviewsByCategory;