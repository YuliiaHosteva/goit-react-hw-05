import axios from 'axios';

const API_KEY = 'pT4YpWvpHKZYFuX01zUVu8HgDcJe3v04cFGM5w4ZOOE';

axios.defaults.baseURL = `https://api.unsplash.com/`;
axios.defaults.params = {
  client_id: API_KEY,
  per_page: 12,
};

export const fetchImages = async (params = {}) => {
  const { data } = await axios.get('search/photos/', {
    params,
  });
  return data;
};