import axios from 'axios';

const instance = axios.create({
  //api url(cloud function)
  baseURI: 'http://localhost:5000/api',
});
export default instance;
