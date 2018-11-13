import http from './index'

export default {
  getOrderList: (res) => {
    http.get('/api/orders', res);
  }
}
