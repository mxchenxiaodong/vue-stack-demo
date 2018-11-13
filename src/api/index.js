import config from '../config/index'
import axios from 'axios'

axios.defaults.baseURL = config.BASE_API_HOST;
axios.defaults.headers['Accept'] = 'application/json, text/plain, */*';
axios.defaults.timeout = 2000;
axios.defaults.withCredentials = true; //允许携带cookies

export default {
  get: function(url, res, data = ''){
    axios.get(url).then(res).catch((error) => {
      // console.log(error);
      return error + data;
    })
  },
  post: function(url, data, res) {
    axios.post(url, data).then(res).catch((error) => {
      // console.log(error);
      return error;
    })
  }
}