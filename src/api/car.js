import http from './index'

export default {
  getCarList: (res) => {
    http.get('/api/cars/', res);
  }
}